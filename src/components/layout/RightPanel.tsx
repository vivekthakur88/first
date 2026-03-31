import React from 'react';

export const RightPanel = () => {
  return (
    <aside className="hidden xl:flex fixed right-0 top-20 bottom-0 w-80 bg-[#131315] border-l border-[#D0BCFF]/5 p-8 flex-col gap-8 shadow-[-20px_0_80px_rgba(0,0,0,0.5)] z-40">
      <div>
        <h3 className="text-xs font-mono text-[#00E3FD] mb-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse"></span>
          AI ADVISORY
        </h3>
        <div className="bg-surface-container-low p-5 rounded-xl border border-white/5 relative overflow-hidden group">
          <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-secondary-container/5 blur-3xl group-hover:bg-secondary-container/10 transition-colors"></div>
          <p className="text-sm leading-relaxed text-white/80">
            "Your cognitive load is peaking between <span className="text-secondary font-mono">14:00 - 16:00</span>. Consider rescheduling the 'Drift Calibration' to tomorrow's focus window."
          </p>
          <button className="mt-4 text-[10px] font-bold text-secondary uppercase tracking-widest hover:text-white transition-colors">
            Apply Optimization
          </button>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-xs font-mono text-white/30 uppercase tracking-widest">Energy Vectors</h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-end mb-1.5">
              <span className="text-xs font-headline text-white/60">Creative Engine</span>
              <span className="text-xs font-mono text-primary-container">82%</span>
            </div>
            <div className="h-1 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full w-[82%] bg-gradient-to-r from-primary-container to-[#FFABF3]"></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between items-end mb-1.5">
              <span className="text-xs font-headline text-white/60">Logic Processing</span>
              <span className="text-xs font-mono text-secondary">45%</span>
            </div>
            <div className="h-1 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full w-[45%] bg-gradient-to-r from-secondary-container to-on-secondary-container"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full border border-white/5 p-1">
            <img 
              alt="User Avatar with Status Glow" 
              className="w-full h-full rounded-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCM5TbFxY-U3z5381xmxWvyO0TtXqdjBnX9nNngzyVRBOeZhCwjTSOC9UkBs35EUOLsLZ716rJddayxXOarVJn1BM4AKJblKjHEV6HGwQxz0iJzqY8pLGuqzRrPsWO7ei7WJUm80-iCJSkbB9bUfPM7rz2vHZqoY1AXQxunCGAzUGA0KJCQgRmDrmKBD5P0A76maLc5gmftlrqJOtaOTRO_PP6MPbst6o6hHuJUw1jil6cZVZyF1P84nKdbXxo9PEjTYf5b-mc6fRw"
            />
          </div>
          <div>
            <p className="text-sm font-headline font-bold text-white">Temporal Architect</p>
            <p className="text-[10px] font-mono text-white/40">LEVEL 84 COMMANDER</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-white/5 p-3 rounded-lg text-center hover:bg-white/10 transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-sm text-primary-container block mb-1">bolt</span>
            <span className="text-[9px] font-mono text-white/60">POWER UP</span>
          </div>
          <div className="bg-white/5 p-3 rounded-lg text-center hover:bg-white/10 transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-sm text-secondary block mb-1">auto_awesome</span>
            <span className="text-[9px] font-mono text-white/60">DEEP SCAN</span>
          </div>
        </div>
      </div>
    </aside>
  );
};
