import { useCalendarStore } from '../../store/useCalendarStore';

export const Sidebar = () => {
  const { openEventModal, setView, view } = useCalendarStore();

  return (
    <aside className="fixed left-0 h-full w-20 hover:w-64 bg-[#131315] border-r border-[#D0BCFF]/5 z-40 flex flex-col py-8 transition-all duration-500 ease-[spring(300,20)] group/sidebar shadow-[20px_0_80px_rgba(0,0,0,0.5)]">
      <div className="px-6 mb-12 flex items-center gap-4 overflow-hidden">
        <div className="min-w-[32px] h-8 rounded-lg bg-primary-container flex items-center justify-center">
          <span className="material-symbols-outlined text-on-primary-fixed text-lg">timeline</span>
        </div>
        <div className="opacity-0 group-hover/sidebar:opacity-100 transition-opacity whitespace-nowrap">
          <p className="font-headline font-black text-[#D0BCFF]">Temporal Architect</p>
          <p className="text-[10px] text-white/40 tracking-widest uppercase">Active State</p>
        </div>
      </div>

      <nav className="flex-1 space-y-2 px-3">
        <div 
          onClick={() => setView('month')}
          className={`rounded-lg flex items-center p-3 gap-4 cursor-pointer transition-all ${view === 'month' || view === 'week' || view === 'day' ? 'bg-[#D0BCFF]/10 text-[#D0BCFF] shadow-[0_0_15px_rgba(208,188,255,0.2)]' : 'text-white/40 hover:text-white/80 hover:bg-white/5'}`}
        >
          <span className="material-symbols-outlined">calendar_today</span>
          <span className="font-headline text-sm opacity-0 group-hover/sidebar:opacity-100 transition-opacity whitespace-nowrap">Calendar</span>
        </div>
        <div 
          onClick={() => setView('tasks')}
          className={`rounded-lg flex items-center p-3 gap-4 cursor-pointer transition-all ${view === 'tasks' ? 'bg-[#D0BCFF]/10 text-[#D0BCFF] shadow-[0_0_15px_rgba(208,188,255,0.2)]' : 'text-white/40 hover:text-white/80 hover:bg-white/5'}`}
        >
          <span className="material-symbols-outlined">assignment</span>
          <span className="font-headline text-sm opacity-0 group-hover/sidebar:opacity-100 transition-opacity whitespace-nowrap">Tasks</span>
        </div>
        <div className="text-white/40 hover:text-white/80 hover:bg-white/5 rounded-lg flex items-center p-3 gap-4 cursor-pointer transition-all">
          <span className="material-symbols-outlined">insights</span>
          <span className="font-headline text-sm opacity-0 group-hover/sidebar:opacity-100 transition-opacity whitespace-nowrap">Analytics</span>
        </div>
        <div 
          onClick={() => setView('focus')}
          className={`rounded-lg flex items-center p-3 gap-4 cursor-pointer transition-all ${view === 'focus' ? 'bg-[#D0BCFF]/10 text-[#D0BCFF] shadow-[0_0_15px_rgba(208,188,255,0.2)]' : 'text-white/40 hover:text-white/80 hover:bg-white/5'}`}
        >
          <span className="material-symbols-outlined">center_focus_strong</span>
          <span className="font-headline text-sm opacity-0 group-hover/sidebar:opacity-100 transition-opacity whitespace-nowrap">Focus</span>
        </div>
        <div className="text-white/40 hover:text-white/80 hover:bg-white/5 rounded-lg flex items-center p-3 gap-4 cursor-pointer transition-all">
          <span className="material-symbols-outlined">settings</span>
          <span className="font-headline text-sm opacity-0 group-hover/sidebar:opacity-100 transition-opacity whitespace-nowrap">Settings</span>
        </div>
      </nav>

      <div className="px-3 mt-auto space-y-4">
        <button 
          onClick={() => openEventModal(null)}
          className="w-full bg-primary-container text-on-primary-fixed-variant p-3 rounded-lg flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(208,188,255,0.4)] transition-all overflow-hidden"
        >
          <span className="material-symbols-outlined">add</span>
          <span className="font-headline font-bold text-xs opacity-0 group-hover/sidebar:opacity-100 transition-opacity whitespace-nowrap">New Event</span>
        </button>
        <div className="text-white/40 hover:text-white/80 flex items-center p-3 gap-4 cursor-pointer">
          <span className="material-symbols-outlined">help_outline</span>
          <span className="font-headline text-sm opacity-0 group-hover/sidebar:opacity-100 transition-opacity whitespace-nowrap">Support</span>
        </div>
      </div>
    </aside>
  );
};
