export function Analytics() {
  return (
    <div className="pt-8 pb-12 px-8 min-h-screen">
      <section className="mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="px-2 py-0.5 bg-tertiary-container/30 border border-tertiary/20 text-tertiary text-[10px] font-bold uppercase tracking-widest rounded">VOD Archive</span>
              <span className="text-outline text-xs uppercase tracking-widest font-medium">Streamed 2 days ago</span>
            </div>
            <h2 className="text-5xl font-bold font-headline uppercase tracking-tight text-white mb-2 leading-none">Pro League Highlights - Tamil Gaming</h2>
            <p className="text-on-surface-variant max-w-2xl text-lg">Detailed performance breakdown of the regional finals coverage and audience retention analysis.</p>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-2 border border-outline-variant/40 rounded-xl hover:bg-surface-bright transition-colors font-medium text-sm">Export Report</button>
            <button className="px-6 py-2 bg-primary text-on-primary rounded-xl font-bold text-sm kinetic-shadow transition-all">Watch Replay</button>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-4 glass-card p-6 rounded-2xl border border-outline-variant/10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-6xl">bolt</span>
          </div>
          <p className="text-outline text-xs uppercase tracking-widest font-bold mb-1">Chat velocity</p>
          <h3 className="text-4xl font-headline font-bold text-white mb-4">42.8 <span className="text-sm font-normal text-tertiary">ms/min</span></h3>
          <div className="w-full bg-surface-container-low h-1.5 rounded-full overflow-hidden">
            <div className="bg-tertiary h-full w-[78%] shadow-[0_0_8px_#00DFC1]"></div>
          </div>
          <p className="mt-4 text-xs text-on-surface-variant font-medium">+12% from last broadcast</p>
        </div>

        <div className="md:col-span-4 glass-card p-6 rounded-2xl border border-outline-variant/10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-6xl">timer</span>
          </div>
          <p className="text-outline text-xs uppercase tracking-widest font-bold mb-1">Average watch time</p>
          <h3 className="text-4xl font-headline font-bold text-white mb-4">18:42 <span className="text-sm font-normal text-primary">mins</span></h3>
          <div className="flex gap-1 h-8 items-end">
            <div className="flex-1 bg-primary/20 h-[40%] rounded-sm"></div>
            <div className="flex-1 bg-primary/20 h-[60%] rounded-sm"></div>
            <div className="flex-1 bg-primary/20 h-[55%] rounded-sm"></div>
            <div className="flex-1 bg-primary/20 h-[80%] rounded-sm"></div>
            <div className="flex-1 bg-primary h-full rounded-sm"></div>
            <div className="flex-1 bg-primary/20 h-[70%] rounded-sm"></div>
          </div>
          <p className="mt-4 text-xs text-on-surface-variant font-medium">Consistent retention in middle third</p>
        </div>

        <div className="md:col-span-4 glass-card p-6 rounded-2xl border border-outline-variant/10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-6xl">trending_up</span>
          </div>
          <p className="text-outline text-xs uppercase tracking-widest font-bold mb-1">Peak concurrent viewers</p>
          <h3 className="text-4xl font-headline font-bold text-white mb-4">12,402</h3>
          <div className="flex items-center gap-2 text-tertiary">
            <span className="material-symbols-outlined text-sm">arrow_upward</span>
            <span className="text-xs font-bold uppercase tracking-tighter">New All-Time High</span>
          </div>
          <p className="mt-4 text-xs text-on-surface-variant font-medium tracking-wide">Reached at 01:14:05 timestamp</p>
        </div>

        <div className="md:col-span-8 glass-card p-8 rounded-2xl border border-outline-variant/10">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h4 className="text-xl font-headline font-bold uppercase tracking-wider text-white">Viewer Demographics</h4>
              <p className="text-sm text-on-surface-variant">Global distribution and age segments</p>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1 bg-surface-container-high rounded-lg text-xs font-bold text-primary">Regional</button>
              <button className="px-3 py-1 text-xs font-bold text-outline hover:text-white transition-colors">Age</button>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path className="text-surface-container-low stroke-current" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeWidth="3"></path>
                <path className="text-primary stroke-current" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeDasharray="45, 100" strokeLinecap="round" strokeWidth="3"></path>
                <path className="text-tertiary stroke-current" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeDasharray="25, 100" strokeDashoffset="-45" strokeLinecap="round" strokeWidth="3"></path>
                <path className="text-secondary stroke-current" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeDasharray="30, 100" strokeDashoffset="-70" strokeLinecap="round" strokeWidth="3"></path>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-headline font-bold">100%</span>
                <span className="text-[10px] uppercase font-bold text-outline tracking-widest">Audience</span>
              </div>
            </div>
            <div className="space-y-6">
              {[
                { label: "South Asia", pct: "45%", color: "bg-primary" },
                { label: "North America", pct: "30%", color: "bg-secondary" },
                { label: "Europe", pct: "25%", color: "bg-tertiary" }
              ].map((region) => (
                <div key={region.label} className="space-y-2">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-2"><div className={`w-2 h-2 rounded-full ${region.color}`}></div> {region.label}</span>
                    <span>{region.pct}</span>
                  </div>
                  <div className="h-1 bg-surface-container-low rounded-full overflow-hidden">
                    <div className={`h-full ${region.color}`} style={{ width: region.pct }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-4 flex flex-col gap-6">
          <div className="glass-card p-6 rounded-2xl border border-outline-variant/10 flex-1">
            <h4 className="text-lg font-headline font-bold uppercase tracking-wider text-white mb-6">Real-time Alerts</h4>
            <div className="space-y-4">
              <div className="flex gap-4 p-3 bg-tertiary-container/10 border-l-4 border-tertiary rounded-r-lg">
                <div className="text-tertiary"><span className="material-symbols-outlined">verified</span></div>
                <div>
                  <p className="text-sm font-bold text-white leading-tight">Peak Engagement reached</p>
                  <p className="text-[11px] text-tertiary-fixed font-medium">Chat velocity exceeded 50 msg/sec</p>
                </div>
              </div>
              <div className="flex gap-4 p-3 bg-error-container/10 border-l-4 border-error rounded-r-lg">
                <div className="text-error animate-pulse"><span className="material-symbols-outlined">warning</span></div>
                <div>
                  <p className="text-sm font-bold text-white leading-tight">Low bitrate detected</p>
                  <p className="text-[11px] text-error font-medium">Dropped below 2500kbps at 00:42:10</p>
                </div>
              </div>
              <div className="flex gap-4 p-3 bg-tertiary-container/10 border-l-4 border-tertiary rounded-r-lg">
                <div className="text-tertiary"><span className="material-symbols-outlined">stars</span></div>
                <div>
                  <p className="text-sm font-bold text-white leading-tight">Viral Clip Generated</p>
                  <p className="text-[11px] text-tertiary-fixed font-medium">3,200 views on 'Triple Kill' clip</p>
                </div>
              </div>
            </div>
            <button className="w-full mt-6 py-2 text-xs font-headline font-bold uppercase tracking-widest text-outline hover:text-white transition-all">View all log entries</button>
          </div>
        </div>
      </div>

      <div className="mt-12 glass-card p-1 rounded-2xl bg-gradient-to-r from-primary-container/20 to-tertiary-container/20">
        <div className="bg-surface-container rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-4xl">auto_awesome</span>
            </div>
            <div>
              <h4 className="text-2xl font-headline font-bold text-white uppercase tracking-tight">AI Stream Summary</h4>
              <p className="text-on-surface-variant max-w-md">The audience responded most positively to the 'Final Round' segment. Recommended focus for next stream: Interaction with top chat contributors from Tamil Gaming community.</p>
            </div>
          </div>
          <button className="px-8 py-3 bg-surface-bright border border-outline-variant/30 rounded-xl font-headline font-bold uppercase tracking-wider hover:border-primary/50 transition-all">Apply Strategies</button>
        </div>
      </div>
    </div>
  );
}
