const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

// Database setup
const db = new Database(path.join(__dirname, 'calendar.db'));
db.pragma('journal_mode = WAL');

// Initialize schema
db.exec(`
  CREATE TABLE IF NOT EXISTS events (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    location TEXT,
    startTime TEXT NOT NULL,
    endTime TEXT NOT NULL,
    tags TEXT, -- JSON array
    color TEXT,
    priority TEXT,
    isTask INTEGER DEFAULT 0,
    isCompleted INTEGER DEFAULT 0
  )
`);

app.use(cors());
app.use(express.json());

// Routes
// Get all events
app.get('/api/events', (req, res) => {
  const events = db.prepare('SELECT * FROM events').all();
  // Parse tags JSON string back to array
  const formattedEvents = events.map(event => ({
    ...event,
    tags: JSON.parse(event.tags || '[]'),
    isTask: !!event.isTask,
    isCompleted: !!event.isCompleted
  }));
  res.json(formattedEvents);
});

// Create event
app.post('/api/events', (req, res) => {
  const { id, title, description, location, startTime, endTime, tags, color, priority, isTask, isCompleted } = req.body;
  
  const insert = db.prepare(`
    INSERT INTO events (id, title, description, location, startTime, endTime, tags, color, priority, isTask, isCompleted)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  insert.run(
    id,
    title,
    description || null,
    location || null,
    startTime,
    endTime,
    JSON.stringify(tags || []),
    color || '#d0bcff',
    priority || 'medium',
    isTask ? 1 : 0,
    isCompleted ? 1 : 0
  );

  res.status(201).json({ id, message: 'Event created' });
});

// Update event
app.put('/api/events/:id', (req, res) => {
  const { id } = req.params;
  const { title, description, location, startTime, endTime, tags, color, priority, isTask, isCompleted } = req.body;
  
  const update = db.prepare(`
    UPDATE events 
    SET title = ?, description = ?, location = ?, startTime = ?, endTime = ?, tags = ?, color = ?, priority = ?, isTask = ?, isCompleted = ?
    WHERE id = ?
  `);

  update.run(
    title,
    description || null,
    location || null,
    startTime,
    endTime,
    JSON.stringify(tags || []),
    color,
    priority,
    isTask ? 1 : 0,
    isCompleted ? 1 : 0,
    id
  );

  res.json({ message: 'Event updated' });
});

// Delete event
app.delete('/api/events/:id', (req, res) => {
  const { id } = req.params;
  db.prepare('DELETE FROM events WHERE id = ?').run(id);
  res.json({ message: 'Event deleted' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
