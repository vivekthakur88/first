import { useCalendarStore } from '../../store/useCalendarStore';
import {
  startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, format,
  isSameMonth, isSameDay, parseISO, isToday
} from 'date-fns';

export const MonthView = () => {
  const { currentDate, events, openEventModal, searchQuery } = useCalendarStore();
  
  const currentMonthDate = parseISO(currentDate);
  const monthStart = startOfMonth(currentMonthDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const dateFormat = "d";
  const days = eachDayOfInterval({ start: startDate, end: endDate });

  const filteredEvents = events.filter(e => 
    e.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    e.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="flex flex-col h-full bg-card rounded-2xl border border-border overflow-hidden shadow-soft-lg">
      <div className="grid grid-cols-7 border-b border-border bg-secondary/50">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="py-3 text-center text-sm font-semibold tracking-wider text-muted-foreground uppercase">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 flex-1 min-h-0 bg-secondary/20">
        {days.map((day, _i) => {
          const isCurrentMonth = isSameMonth(day, monthStart);
          const isCurrentDay = isToday(day);
          
          const dayEvents = filteredEvents.filter(e => isSameDay(parseISO(e.startTime), day));

          return (
            <div 
              key={day.toISOString()}
              className={`min-h-[120px] p-2 border-r border-b border-border/60 transition-colors 
                ${!isCurrentMonth ? 'bg-secondary/30 text-muted-foreground opacity-50' : 'bg-card hover:bg-secondary/20'}
              `}
              onClick={() => {
                const newDate = new Date(); // roughly mock new event
                newDate.setFullYear(day.getFullYear(), day.getMonth(), day.getDate());
                openEventModal({
                  id: '', title: '', startTime: newDate.toISOString(), endTime: new Date(newDate.getTime() + 60*60*1000).toISOString(), tags: [], color: '#3b82f6', priority: 'medium', isTask: false
                });
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-sm font-medium w-7 h-7 flex items-center justify-center rounded-full
                  ${isCurrentDay ? 'bg-blue-600 text-white shadow-md' : ''}
                `}>
                  {format(day, dateFormat)}
                </span>
                {dayEvents.length > 0 && <span className="text-[10px] text-muted-foreground opacity-70">{dayEvents.length}</span>}
              </div>
              <div className="space-y-1 overflow-y-auto max-h-[80px] scrollbar-hide py-1">
                {dayEvents.map(event => (
                  <div 
                    key={event.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      openEventModal(event);
                    }}
                    className="text-xs px-2 py-1 rounded cursor-pointer truncate font-medium text-white shadow-sm hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: event.color }}
                  >
                    {format(parseISO(event.startTime), 'HH:mm')} {event.title}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
