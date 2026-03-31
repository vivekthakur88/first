import { useCalendarStore } from '../../store/useCalendarStore';

export const CalendarComponent = () => {
  const { openEventModal } = useCalendarStore();

  return (
    <>
      {/* Header Section */}
      <div className="flex justify-between items-end mb-12">
        <div>
          <h1 className="font-headline text-4xl font-bold tracking-tight text-white mb-2">Cycle 04: <span className="text-primary-container">Ascension</span></h1>
          <p className="font-mono text-xs text-white/40">LATENCY: 14MS // TEMPORAL_DRIFT: 0.003s</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-surface-container-low border border-white/5 rounded-lg p-3 flex flex-col items-center min-w-[80px]">
            <span className="text-[10px] text-white/40 font-mono">ENERGY</span>
            <span className="text-secondary font-mono font-bold">98.4%</span>
          </div>
          <div className="bg-surface-container-low border border-white/5 rounded-lg p-3 flex flex-col items-center min-w-[80px]">
            <span className="text-[10px] text-white/40 font-mono">FOCUS</span>
            <span className="text-tertiary-fixed-dim font-mono font-bold">04:12:00</span>
          </div>
        </div>
      </div>

      {/* 7-Day Grid */}
      <div className="grid grid-cols-7 gap-4 h-[calc(100vh-280px)]">
        {/* Mon (Past) */}
        <div className="relative group/col">
          <div className="absolute inset-0 bg-surface-container-low/30 rounded-xl -z-10 transition-colors group-hover/col:bg-surface-container-low/50"></div>
          <div className="p-4 border-b border-white/5 text-center">
            <span className="block text-[10px] font-mono text-white/20">MON</span>
            <span className="text-lg font-headline text-white/40">12</span>
          </div>
        </div>

        {/* Tue (Active) */}
        <div className="relative group/col aether-aura ring-1 ring-primary-container/20 rounded-xl overflow-hidden bg-primary-container/5">
          <div className="p-4 border-b border-white/10 text-center bg-primary-container/10">
            <span className="block text-[10px] font-mono text-primary-container">TUE</span>
            <span className="text-lg font-headline text-white font-bold">13</span>
          </div>

          {/* Events Area */}
          <div className="p-3 relative h-full">
            {/* Floating Glass Event 1 */}
            <div 
              onClick={() => openEventModal(null)} 
              className="bg-white/5 backdrop-blur-xl border-l-2 border-primary-container p-3 rounded-lg shadow-2xl mb-4 hover:scale-105 transition-transform cursor-pointer relative group/event overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 w-12 h-12 bg-primary-container/10 blur-xl"></div>
              <span className="text-[9px] font-mono text-primary-container mb-1 block">09:00 - 10:30</span>
              <h4 className="text-xs font-bold text-white relative z-10">Synaptic Sync</h4>
              <p className="text-[10px] text-white/50 mt-1 relative z-10">Deep Architecture Review</p>
            </div>

            {/* Floating Glass Event 2 */}
            <div 
              onClick={() => openEventModal(null)}
              className="bg-white/5 backdrop-blur-xl border-l-2 border-secondary-container p-3 rounded-lg shadow-2xl hover:scale-105 transition-transform cursor-pointer relative group/event"
            >
              <span className="text-[9px] font-mono text-secondary-container mb-1 block">14:00 - 15:00</span>
              <h4 className="text-xs font-bold text-white relative z-10">Neural Flow</h4>
              <div className="flex mt-2 -space-x-2 relative z-10">
                <div className="w-5 h-5 rounded-full border border-background bg-surface-container"></div>
                <div className="w-5 h-5 rounded-full border border-background bg-surface-container"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Wed */}
        <div className="relative group/col">
          <div className="absolute inset-0 bg-surface-container-low/30 rounded-xl -z-10"></div>
          <div className="p-4 border-b border-white/5 text-center">
            <span className="block text-[10px] font-mono text-white/20">WED</span>
            <span className="text-lg font-headline text-white/60">14</span>
          </div>
          <div className="p-3">
            <div className="bg-white/5 backdrop-blur-md border-l-2 border-tertiary p-3 rounded-lg opacity-60">
              <span className="text-[9px] font-mono text-tertiary mb-1 block">11:00</span>
              <h4 className="text-xs font-bold text-white">Drift Calibration</h4>
            </div>
          </div>
        </div>

        {/* Thu */}
        <div className="relative group/col">
          <div className="absolute inset-0 bg-surface-container-low/30 rounded-xl -z-10"></div>
          <div className="p-4 border-b border-white/5 text-center">
            <span className="block text-[10px] font-mono text-white/20">THU</span>
            <span className="text-lg font-headline text-white/60">15</span>
          </div>
          {/* Temporal Bridge Start */}
          <div className="p-3">
            <div className="bg-white/5 backdrop-blur-md border-l-2 border-primary-container p-3 rounded-lg relative z-10">
              <span className="text-[9px] font-mono text-primary-container mb-1 block">08:00</span>
              <h4 className="text-xs font-bold text-white">Quantum Sprint</h4>
              <div className="temporal-bridge absolute -right-[150%] top-1/2 w-[160%] -z-10"></div>
            </div>
          </div>
        </div>

        {/* Fri */}
        <div className="relative group/col">
          <div className="absolute inset-0 bg-surface-container-low/30 rounded-xl -z-10"></div>
          <div className="p-4 border-b border-white/5 text-center">
            <span className="block text-[10px] font-mono text-white/20">FRI</span>
            <span className="text-lg font-headline text-white/60">16</span>
          </div>
          <div className="p-3">
            <div className="bg-white/5 backdrop-blur-md border-l-2 border-primary-container p-3 rounded-lg mt-12">
              <h4 className="text-xs font-bold text-white">Sprint Finale</h4>
            </div>
          </div>
        </div>

        {/* Sat */}
        <div className="relative group/col">
          <div className="absolute inset-0 bg-surface-container-low/10 rounded-xl -z-10"></div>
          <div className="p-4 border-b border-white/5 text-center">
            <span className="block text-[10px] font-mono text-white/10">SAT</span>
            <span className="text-lg font-headline text-white/30">17</span>
          </div>
        </div>

        {/* Sun */}
        <div className="relative group/col">
          <div className="absolute inset-0 bg-surface-container-low/10 rounded-xl -z-10"></div>
          <div className="p-4 border-b border-white/5 text-center">
            <span className="block text-[10px] font-mono text-white/10">SUN</span>
            <span className="text-lg font-headline text-white/30">18</span>
          </div>
        </div>
      </div>
    </>
  );
};
