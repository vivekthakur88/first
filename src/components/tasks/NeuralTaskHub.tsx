export const NeuralTaskHub = () => {
  return (
    <div className="w-full h-full relative z-10 animate-in fade-in duration-500 pb-16">
      {/* Layered Mesh Gradients specific to Task Hub */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-secondary-container/5 blur-[150px]"></div>
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[40%] rounded-full bg-tertiary/5 blur-[100px]"></div>
      </div>
      
      {/* Hero Section / Focus Header */}
      <div className="max-w-6xl mx-auto mb-16 flex justify-between items-end mt-4 relative z-10">
        <div>
          <h1 className="font-headline text-5xl font-bold tracking-tighter text-white mb-2">Deep Focus Mode</h1>
          <p className="text-white/60 font-body flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse"></span>
            Synthesizing context for <span className="text-secondary-container font-medium">Quantum Framework Launch</span>
          </p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-white/40 font-mono text-xs uppercase tracking-widest">Zen Mode</span>
          <button className="w-12 h-6 rounded-full bg-surface-container-high border border-white/10 relative p-1 flex items-center group">
            <div className="w-4 h-4 rounded-full bg-primary-container shadow-[0_0_10px_rgba(208,188,255,0.5)] transition-transform group-hover:translate-x-6"></div>
          </button>
        </div>
      </div>

      {/* Priority Loop (The Central Feature) */}
      <section className="max-w-6xl mx-auto mb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left: Stats/Meta */}
        <div className="lg:col-span-3 space-y-8">
          <div className="p-6 rounded-xl hyper-glass dual-light-edge">
            <p className="text-white/40 text-xs font-mono mb-1 uppercase">Temporal Load</p>
            <p className="text-3xl font-headline font-bold text-primary">84<span className="text-sm font-normal text-white/40 ml-1">%</span></p>
            <div className="w-full bg-white/5 h-1 rounded-full mt-4 overflow-hidden">
              <div className="bg-primary w-[84%] h-full shadow-[0_0_10px_rgba(208,188,255,0.8)]"></div>
            </div>
          </div>
          <div className="p-6 rounded-xl hyper-glass dual-light-edge">
            <p className="text-white/40 text-xs font-mono mb-1 uppercase">Flow State</p>
            <p className="text-3xl font-headline font-bold text-secondary-container">1h 42m</p>
            <div className="flex gap-1 mt-4">
              <div className="h-4 w-1 bg-secondary-container rounded-full opacity-20"></div>
              <div className="h-6 w-1 bg-secondary-container rounded-full opacity-40"></div>
              <div className="h-8 w-1 bg-secondary-container rounded-full opacity-60"></div>
              <div className="h-10 w-1 bg-secondary-container rounded-full shadow-[0_0_10px_rgba(1,227,253,0.5)]"></div>
              <div className="h-5 w-1 bg-secondary-container rounded-full opacity-30"></div>
            </div>
          </div>
        </div>

        {/* Center: Priority Loop */}
        <div className="lg:col-span-6 relative flex justify-center items-center h-[500px]">
          {/* Circular Path Visual */}
          <div className="absolute inset-0 rounded-full border border-dashed border-white/5 animate-[spin_60s_linear_infinite]"></div>
          <div className="absolute w-[80%] h-[80%] rounded-full border border-primary/5 animate-[spin_40s_linear_infinite_reverse]"></div>
          {/* Center Glow */}
          <div className="absolute w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>

          {/* Circular Tasks (Simulated Loop) */}
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Top Task (Active) */}
            <div className="absolute -top-4 w-72 p-5 hyper-glass dual-light-edge rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:scale-105 transition-all group cursor-grab active:cursor-grabbing border-primary/40">
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-mono text-primary px-2 py-0.5 bg-primary/10 rounded-full border border-primary/20">PRIORITY 01</span>
                <span className="text-[10px] font-mono text-white/40">14:30 REM</span>
              </div>
              <h3 className="font-headline font-bold text-lg text-white mb-3">Initialize Neural Interface</h3>
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  <img alt="Team member" className="w-6 h-6 rounded-full border border-background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCd1Gg4B_yJssRFFv4WNATsBuIBCCqma-6qmClPbou3Weu2s45YyVRlB73YawpIw5d2wLgRjEw-W2s4wBvjoJ2WFj1KyNOboKJNCs8JGIzndQORnSMnmCFUf49RVQXcZWHfhLTJj5UYFkdDOWRw1Mky-cQclRY48GKaSW7B6pYm0CMiTBAgfszxTh6-IpIhy7CnSdKfz3qVAHY52R1BF1mLrcXnNZHCbJVzZthZwQJ-DLFIRY2OlNBe6LnZcbUnwvNWXmmiZZSedk" />
                  <img alt="Team member" className="w-6 h-6 rounded-full border border-background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeRsJH_HG9sefdKHh4zc_2Xb9s0pCK_QemZpkhyikLaj22p2AzJnmoDcyKrM-efoetLtOzHEpWFl6st5htNQ-gontDveiYIhfwxEQnR-26t0MicHu32X9qyImm8b-SuGkxnYnf3GWD6T0b87JuwPjZtcQryAFMGWtxwsKHD5t06idmZ7ICQ45lDIqOVDKjkCjBAlfUa0nb1bcAnQ5vDBNbEbFrnMXIdt4myr-so-2nmpqbbpegDPTg4Yey0ITA5UfwF04uFY_7c98" />
                </div>
                <button className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/40 group-hover:bg-primary transition-colors">
                  <span className="material-symbols-outlined text-primary group-hover:text-on-primary text-sm">check</span>
                </button>
              </div>
            </div>

            {/* Right Task */}
            <div className="absolute right-[-20px] top-[40%] w-64 p-4 hyper-glass dual-light-edge rounded-xl opacity-60 hover:opacity-100 hover:scale-105 transition-all group cursor-grab">
              <p className="text-[10px] font-mono text-white/40 mb-2">PRIORITY 02</p>
              <h3 className="font-headline font-semibold text-md text-white/90">Review Core Logic</h3>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-xs font-mono text-secondary-container">25m est</span>
                <span className="material-symbols-outlined text-white/20 text-sm">more_vert</span>
              </div>
            </div>

            {/* Left Task */}
            <div className="absolute left-[-20px] top-[40%] w-64 p-4 hyper-glass dual-light-edge rounded-xl opacity-60 hover:opacity-100 hover:scale-105 transition-all group cursor-grab">
              <p className="text-[10px] font-mono text-white/40 mb-2">PRIORITY 03</p>
              <h3 className="font-headline font-semibold text-md text-white/90">Sync Global State</h3>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-xs font-mono text-tertiary">Urgent</span>
                <span className="material-symbols-outlined text-white/20 text-sm">more_vert</span>
              </div>
            </div>

            {/* Bottom Task (Faded/Upcoming) */}
            <div className="absolute -bottom-4 w-60 p-3 hyper-glass dual-light-edge rounded-xl opacity-30 hover:opacity-60 transition-all text-center">
              <p className="text-[10px] font-mono text-white/20 mb-1">UPCOMING</p>
              <p className="text-sm font-headline text-white/40">Temporal Audit</p>
            </div>
          </div>
        </div>

        {/* Right: AI Directives */}
        <div className="lg:col-span-3 space-y-6">
          <div className="p-6 rounded-xl bg-secondary-container/5 border border-secondary-container/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-6xl text-secondary-container">psychology</span>
            </div>
            <p className="text-secondary-container text-xs font-mono mb-3 uppercase tracking-wider">AI Suggestion</p>
            <p className="text-white/80 font-body text-sm leading-relaxed mb-4">
              Based on your current cognitive load, shifting "Core Logic" to 16:00 will maximize flow efficiency.
            </p>
            <button className="w-full py-2 bg-secondary-container/10 border border-secondary-container/40 rounded-md text-secondary-container text-xs font-bold uppercase hover:bg-secondary-container hover:text-on-secondary-container transition-all">Optimize Schedule</button>
          </div>

          <div className="flex items-center gap-4 p-4 hyper-glass dual-light-edge rounded-xl">
            <div className="w-10 h-10 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary">
              <span className="material-symbols-outlined">bolt</span>
            </div>
            <div>
              <p className="text-xs text-white/40 font-mono">STREAK</p>
              <p className="text-lg font-headline font-bold text-white">12 Cycles</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Context: Below Tasks */}
      <section className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-headline text-2xl font-bold text-white">Focus Context</h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
          <span className="text-white/40 font-mono text-[10px] uppercase">Synced 2m ago</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Context Card 1: Document */}
          <div className="p-6 hyper-glass dual-light-edge rounded-2xl group hover:translate-y-[-4px] transition-all cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined text-primary">description</span>
            </div>
            <h4 className="font-headline font-bold text-white mb-2">Quantum Specs.v2</h4>
            <p className="text-white/40 text-xs font-body mb-6 line-clamp-2">Technical requirements for the new temporal synchronization engine...</p>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-white/30 uppercase tracking-tighter">DOC • 2.4MB</span>
              <span className="material-symbols-outlined text-white/20 group-hover:text-primary transition-colors">arrow_forward</span>
            </div>
          </div>

          {/* Context Card 2: Meeting */}
          <div className="p-6 hyper-glass dual-light-edge rounded-2xl group hover:translate-y-[-4px] transition-all cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-secondary-container/20 transition-colors">
              <span className="material-symbols-outlined text-secondary-container">video_camera_front</span>
            </div>
            <h4 className="font-headline font-bold text-white mb-2">Sprint Alignment</h4>
            <p className="text-white/40 text-xs font-body mb-6 line-clamp-2">Recorded session highlighting critical path blockers for Q4...</p>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-white/30 uppercase tracking-tighter">REPLAY • 14:02</span>
              <span className="material-symbols-outlined text-white/20 group-hover:text-secondary-container transition-colors">play_circle</span>
            </div>
          </div>

          {/* Context Card 3: Code Repo */}
          <div className="p-6 hyper-glass dual-light-edge rounded-2xl group hover:translate-y-[-4px] transition-all cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-tertiary/20 transition-colors">
              <span className="material-symbols-outlined text-tertiary">code</span>
            </div>
            <h4 className="font-headline font-bold text-white mb-2">Temporal_SDK_Main</h4>
            <p className="text-white/40 text-xs font-body mb-6 line-clamp-2">3 Pending pull requests related to focus task #01...</p>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-white/30 uppercase tracking-tighter">GIT • 3 ALERTS</span>
              <span className="material-symbols-outlined text-white/20 group-hover:text-tertiary transition-colors">terminal</span>
            </div>
          </div>

          {/* Context Card 4: AI Research */}
          <div className="p-6 bg-gradient-to-br from-primary/10 to-secondary-container/10 border border-white/10 rounded-2xl group hover:translate-y-[-4px] transition-all cursor-pointer relative overflow-hidden">
            <div className="absolute inset-0 grain-texture"></div>
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 relative z-10">
              <span className="material-symbols-outlined text-white">auto_awesome</span>
            </div>
            <h4 className="font-headline font-bold text-white mb-2 relative z-10">Insight Stream</h4>
            <p className="text-white/60 text-xs font-body mb-6 line-clamp-2 relative z-10">Live AI aggregation of competitor temporal strategies...</p>
            <div className="flex items-center justify-between relative z-10">
              <span className="text-[10px] font-mono text-white/50 uppercase tracking-tighter">LIVE FEED</span>
              <div className="flex gap-1">
                <span className="w-1 h-1 rounded-full bg-white animate-bounce"></span>
                <span className="w-1 h-1 rounded-full bg-white animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1 h-1 rounded-full bg-white animate-bounce [animation-delay:0.4s]"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating UI element missing from main layout */}
      <div className="fixed bottom-24 right-8 xl:right-8 flex flex-col gap-4 z-50 transition-all">
        <button className="w-14 h-14 rounded-full bg-white/5 hyper-glass dual-light-edge flex items-center justify-center text-white/60 hover:text-primary hover:border-primary/40 transition-all hover:scale-110 shadow-2xl">
          <span className="material-symbols-outlined">message</span>
        </button>
      </div>

    </div>
  );
};
