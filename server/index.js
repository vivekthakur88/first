const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

// Database setup with error handling for Render
let db;
try {
  const dbPath = path.join(__dirname, 'calendar.db');
  console.log(`Initialising database at: ${dbPath}`);
  
  db = new Database(dbPath, { 
    // This helps in many restricted cloud environments
    fileMustExist: false,
    timeout: 5000 
  });
  
  // Disable WAL for now as it can cause locking issues on some cloud filesystems
  // db.pragma('journal_mode = WAL'); 
  
  console.log('Database connected successfully.');
} catch (err) {
  console.error('FATAL DATABASE ERROR:', err.message);
  process.exit(1); 
}

// Initialize schema
try {
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
} catch (err) {
  console.error('SCHEMA ERROR:', err.message);
}

app.use(cors());
app.use(express.json());

// Serve static files from the Vite build directory
const distPath = path.join(__dirname, '../dist');
if (fs.existsSync(distPath)) {
  console.log(`Serving static files from: ${distPath}`);
  app.use(express.static(distPath));
} else {
  console.warn(`WARNING: static build directory not found at ${distPath}`);
}

// Routes
app.get('/api/events', (req, res) => {
  try {
    const events = db.prepare('SELECT * FROM events').all();
    const formattedEvents = events.map(event => ({
      ...event,
      tags: JSON.parse(event.tags || '[]'),
      isTask: !!event.isTask,
      isCompleted: !!event.isCompleted
    }));
    res.json(formattedEvents);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/events', (req, res) => {
  try {
    const { id, title, description, location, startTime, endTime, tags, color, priority, isTask, isCompleted } = req.body;
    const insert = db.prepare(`
      INSERT INTO events (id, title, description, location, startTime, endTime, tags, color, priority, isTask, isCompleted)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);
    insert.run(id, title, description || null, location || null, startTime, endTime, JSON.stringify(tags || []), color || '#d0bcff', priority || 'medium', isTask ? 1 : 0, isCompleted ? 1 : 0);
    res.status(201).json({ id, message: 'Event created' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/api/events/:id', (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, location, startTime, endTime, tags, color, priority, isTask, isCompleted } = req.body;
    const update = db.prepare(`
      UPDATE events SET title = ?, description = ?, location = ?, startTime = ?, endTime = ?, tags = ?, color = ?, priority = ?, isTask = ?, isCompleted = ? WHERE id = ?
    `);
    update.run(title, description || null, location || null, startTime, endTime, JSON.stringify(tags || []), color, priority, isTask ? 1 : 0, isCompleted ? 1 : 0, id);
    res.json({ message: 'Event updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/api/events/:id', (req, res) => {
  try {
    const { id } = req.params;
    db.prepare('DELETE FROM events WHERE id = ?').run(id);
    res.json({ message: 'Event deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('*', (req, res) => {
  const indexHtml = path.join(__dirname, '../dist/index.html');
  if (fs.existsSync(indexHtml)) {
    res.sendFile(indexHtml);
  } else {
    res.status(404).send('Not Found: Build files missing');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
