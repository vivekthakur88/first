import React from 'react';
import { AppLayout } from './components/layout/AppLayout';
import { CalendarComponent } from './components/calendar/CalendarComponent';
import { useCalendarStore } from './store/useCalendarStore';
import { MonthView } from './components/calendar/MonthView';
import { NeuralTaskHub } from './components/tasks/NeuralTaskHub';

function App() {
  const { view } = useCalendarStore();
  
  return (
    <AppLayout>
      {view === 'focus' || view === 'tasks' ? (
        <NeuralTaskHub />
      ) : view === 'month' ? (
        <MonthView />
      ) : (
        <CalendarComponent />
      )}
    </AppLayout>
  );
}

export default App;
