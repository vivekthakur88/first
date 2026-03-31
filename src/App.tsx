import { AppLayout } from './components/layout/AppLayout';
import { CalendarComponent } from './components/calendar/CalendarComponent';
import { useCalendarStore } from './store/useCalendarStore';
import { MonthView } from './components/calendar/MonthView';
import { NeuralTaskHub } from './components/tasks/NeuralTaskHub';

import { useEffect } from 'react';

function App() {
  const { view, fetchEvents } = useCalendarStore();
  
  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);
  
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
