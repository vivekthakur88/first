import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { addMonths, addWeeks, subDays, addDays, subMonths, subWeeks } from 'date-fns';

export type EventPriority = 'high' | 'medium' | 'low';
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
  isLoading: boolean;
  error: string | null;

  // Actions
  fetchEvents: () => Promise<void>;
  setCurrentDate: (date: Date) => void;
  nextPeriod: () => void;
  prevPeriod: () => void;
  today: () => void;
  setView: (view: ViewType) => void;
  toggleDarkMode: () => void;
  
  // Event Actions
  addEvent: (event: Omit<CalendarEvent, 'id'>) => Promise<void>;
  updateEvent: (id: string, event: Partial<CalendarEvent>) => Promise<void>;
  deleteEvent: (id: string) => Promise<void>;
  
  // Modal State Actions
  openEventModal: (event?: CalendarEvent | null) => void;
  closeEventModal: () => void;

  // Search
  setSearchQuery: (query: string) => void;
}

const API_URL = 'http://localhost:3001/api';

export const useCalendarStore = create<CalendarState>()(
  persist(
    (set, get) => ({
      currentDate: new Date().toISOString(),
      view: 'focus',
      events: [],
      isDarkMode: false,
      selectedEvent: null,
      isEventModalOpen: false,
      searchQuery: '',
      isLoading: false,
      error: null,

      fetchEvents: async () => {
        set({ isLoading: true, error: null });
        try {
          const response = await fetch(`${API_URL}/events`);
          if (!response.ok) throw new Error('Failed to fetch events');
          const data = await response.json();
          set({ events: data, isLoading: false });
        } catch (error: any) {
          set({ error: error.message, isLoading: false });
        }
      },

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

      addEvent: async (event) => {
        const newEvent = { ...event, id: crypto.randomUUID() };
        try {
          const response = await fetch(`${API_URL}/events`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newEvent)
          });
          if (!response.ok) throw new Error('Failed to add event');
          // Update local state after success
          set((state) => ({ events: [...state.events, newEvent] }));
        } catch (error: any) {
          set({ error: error.message });
        }
      },

      updateEvent: async (id, updatedFields) => {
        const state = get();
        const existingEvent = state.events.find(ev => ev.id === id);
        if (!existingEvent) return;

        const updatedEvent = { ...existingEvent, ...updatedFields };

        try {
          const response = await fetch(`${API_URL}/events/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedEvent)
          });
          if (!response.ok) throw new Error('Failed to update event');
          // Update local state after success
          set((state) => ({
            events: state.events.map(ev => ev.id === id ? updatedEvent : ev)
          }));
        } catch (error: any) {
          set({ error: error.message });
        }
      },

      deleteEvent: async (id) => {
        try {
          const response = await fetch(`${API_URL}/events/${id}`, {
            method: 'DELETE'
          });
          if (!response.ok) throw new Error('Failed to delete event');
          // Update local state after success
          set((state) => ({
            events: state.events.filter(ev => ev.id !== id)
          }));
        } catch (error: any) {
          set({ error: error.message });
        }
      },

      openEventModal: (event = null) => set({ selectedEvent: event, isEventModalOpen: true }),
      
      closeEventModal: () => set({ selectedEvent: null, isEventModalOpen: false }),

      setSearchQuery: (query) => set({ searchQuery: query }),
    }),
    {
      name: 'calendar-storage',
      partialize: (state) => ({ 
        isDarkMode: state.isDarkMode, 
        view: state.view 
      }), // only persist UI state, not events which are now in backend
      onRehydrateStorage: () => (state) => {
        if (state && typeof window !== 'undefined') {
          if (state.isDarkMode) document.documentElement.classList.add('dark');
          else document.documentElement.classList.remove('dark');
        }
      }
    }
  )
);
