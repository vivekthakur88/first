import React from 'react';
import { useCalendarStore } from '../../store/useCalendarStore';
import { format, parseISO } from 'date-fns';

export const Header = () => {
  const { searchQuery, setSearchQuery, view, setView } = useCalendarStore();

  return (
    <header className="fixed top-0 w-full z-50 bg-[#131315]/40 backdrop-blur-3xl shadow-[0_0_60px_-15px_rgba(208,188,255,0.05)] h-20 flex justify-between items-center px-8 border-b border-[#D0BCFF]/5">
      <div className="flex items-center gap-8">
        <span className="font-headline font-bold text-[#D0BCFF] text-xl tracking-tight">TimeFlow</span>
        <nav className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => setView('day')}
            className={`font-headline transition-all ${view === 'day' ? 'text-[#D0BCFF] border-b border-[#D0BCFF] pb-1 shadow-[0_4px_12px_-2px_rgba(208,188,255,0.3)]' : 'text-white/60 hover:text-[#00E3FD]'}`}
          >
            Day
          </button>
          <button 
            onClick={() => setView('week')}
            className={`font-headline transition-all ${view === 'week' ? 'text-[#D0BCFF] border-b border-[#D0BCFF] pb-1 shadow-[0_4px_12px_-2px_rgba(208,188,255,0.3)]' : 'text-white/60 hover:text-[#00E3FD]'}`}
          >
            Week
          </button>
          <button 
            onClick={() => setView('month')}
            className={`font-headline transition-all ${view === 'month' ? 'text-[#D0BCFF] border-b border-[#D0BCFF] pb-1 shadow-[0_4px_12px_-2px_rgba(208,188,255,0.3)]' : 'text-white/60 hover:text-[#00E3FD]'}`}
          >
            Month
          </button>
        </nav>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative group">
          <input 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-white/5 border-none focus:ring-1 focus:ring-primary-container rounded-full px-4 py-2 text-sm w-64 transition-all text-on-surface" 
            placeholder="Search timeline..." 
            type="text"
          />
          <span className="material-symbols-outlined absolute right-3 top-2 text-white/40 group-focus-within:text-primary">search</span>
        </div>
        <span className="material-symbols-outlined text-[#D0BCFF] hover:scale-110 active:scale-95 transition-transform cursor-pointer">settings_input_antenna</span>
        
        <div className="w-10 h-10 rounded-full border border-primary-container/30 overflow-hidden shadow-[0_0_15px_rgba(208,188,255,0.2)]">
          <img 
            alt="Aether AI Orb" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBt5ROHm5MXL8foJmzcYW-7xQ1oHMXgQJBGx1wgAWS9aXASi-5YkPro1HCx1A_lsUcYEeUrnhjKmmOPDsVj5pg_w5Q3VIJgphVZt1tVVUXr9P7dMR4qHX6vWYLzBU9wB8pSFBnBVGVRFbxa50rXVz1mYwjhsgXCSOzlHnWevVZiMYzmeqNHIkf4-g5KurjZvuK9aHn-NyyFZ8uKt7mEP97cHRmGqYcfb5Vo660rl2hq36iVwlBqlO_tt6xGcUJs8al50orNiDxpX1Y"
          />
        </div>
      </div>
    </header>
  );
};
