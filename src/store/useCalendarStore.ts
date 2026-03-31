import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { addMonths, addWeeks, subDays, addDays, subMonths, subWeeks } from 'date-fns';

export type EventPriority = 'high' | 'medium' | 'low';
// Added tasks and focus to view types
export type ViewType = 'month' | 'week' | 'day' | 'tasks' | 'focus';

export interface CalendarEvent {
  id: string;
  title: string;
  description?: string;
  location?: string;
  startTime: string; // ISO String
  endTime: string; // ISO String
  tags: string[];
  color: string;
  priority: EventPriority;
  isTask: boolean;
  isCompleted?: boolean;
}

interface CalendarState {
  currentDate: string; // ISO String to be serializable
  view: ViewType;
  events: CalendarEvent[];
  isDarkMode: boolean;
  selectedEvent: CalendarEvent | null;
  isEventModalOpen: boolean;
  searchQuery: string;

  // Actions
  setCurrentDate: (date: Date) => void;
  nextPeriod: () => void;
  prevPeriod: () => void;
  today: () => void;
  setView: (view: ViewType) => void;
  toggleDarkMode: () => void;
  
  // Event Actions
  addEvent: (event: Omit<CalendarEvent, 'id'>) => void;
  updateEvent: (id: string, event: Partial<CalendarEvent>) => void;
  deleteEvent: (id: string) => void;
  
  // Modal State Actions
  openEventModal: (event?: CalendarEvent | null) => void;
  closeEventModal: () => void;

  // Search
  setSearchQuery: (query: string) => void;
}

const mockEvents: CalendarEvent[] = [
  {
    id: '1',
    title: 'Synaptic Sync',
    description: 'Deep Architecture Review.',
    location: 'Aether Hub',
    startTime: new Date(new Date().setHours(10, 0, 0, 0)).toISOString(),
    endTime: new Date(new Date().setHours(11, 0, 0, 0)).toISOString(),
    tags: ['work', 'meeting'],
    color: '#d0bcff', // primary-container
    priority: 'high',
    isTask: false,
  },
];

export const useCalendarStore = create<CalendarState>()(
  persist(
    (set, _get) => ({
      currentDate: new Date().toISOString(),
      view: 'focus', // Made Neural Task Hub the default view
      events: mockEvents,
      isDarkMode: false,
      selectedEvent: null,
      isEventModalOpen: false,
      searchQuery: '',

      setCurrentDate: (date) => set({ currentDate: date.toISOString() }),
      
      nextPeriod: () => set((state) => {
        const date = new Date(state.currentDate);
        if (state.view === 'month') return { currentDate: addMonths(date, 1).toISOString() };
        if (state.view === 'week') return { currentDate: addWeeks(date, 1).toISOString() };
        return { currentDate: addDays(date, 1).toISOString() };
      }),

      prevPeriod: () => set((state) => {
        const date = new Date(state.currentDate);
        if (state.view === 'month') return { currentDate: subMonths(date, 1).toISOString() };
        if (state.view === 'week') return { currentDate: subWeeks(date, 1).toISOString() };
        return { currentDate: subDays(date, 1).toISOString() };
      }),

      today: () => set({ currentDate: new Date().toISOString() }),

      setView: (view) => set({ view }),

      toggleDarkMode: () => set((state) => {
        const newMode = !state.isDarkMode;
        if (typeof window !== 'undefined') {
          if (newMode) document.documentElement.classList.add('dark');
          else document.documentElement.classList.remove('dark');
        }
        return { isDarkMode: newMode };
      }),

      addEvent: (event) => set((state) => ({
        events: [...state.events, { ...event, id: crypto.randomUUID() }]
      })),

      updateEvent: (id, updatedEvent) => set((state) => ({
        events: state.events.map(ev => ev.id === id ? { ...ev, ...updatedEvent } : ev)
      })),

      deleteEvent: (id) => set((state) => ({
        events: state.events.filter(ev => ev.id !== id)
      })),

      openEventModal: (event = null) => set({ selectedEvent: event, isEventModalOpen: true }),
      
      closeEventModal: () => set({ selectedEvent: null, isEventModalOpen: false }),

      setSearchQuery: (query) => set({ searchQuery: query }),
    }),
    {
      name: 'calendar-storage', // name of item in the storage (must be unique)
      partialize: (state) => ({ 
        events: state.events, 
        isDarkMode: state.isDarkMode, 
        view: state.view 
      }), // only persist these fields
      onRehydrateStorage: () => (state) => {
        if (state && typeof window !== 'undefined') {
          if (state.isDarkMode) document.documentElement.classList.add('dark');
          else document.documentElement.classList.remove('dark');
        }
      }
    }
  )
);
