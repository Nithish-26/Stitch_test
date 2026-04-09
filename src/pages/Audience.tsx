import { useState } from 'react';

export function Audience() {
  const [heatmapData] = useState<string[]>(() => {
    const heatmapColors = ['bg-primary/5', 'bg-primary/10', 'bg-primary/20', 'bg-primary/50', 'bg-primary/80', 'bg-primary shadow-[0_0_5px_#EDB1FF]'];
    return Array.from({ length: 144 }).map(() => heatmapColors[Math.floor(Math.random() * heatmapColors.length)]);
  });

  return (
    <div className="p-8 space-y-8 flex-1">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-4xl font-bold font-headline uppercase tracking-tighter text-white">Audience Insights</h2>
          <p className="text-on-surface-variant mt-1">Deep dive into your global viewer community and demographics.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-lg bg-surface-container-low text-xs font-bold font-headline uppercase border border-outline-variant/20 hover:bg-surface-container-high transition-colors">Last 30 Days</button>
          <button className="px-4 py-2 rounded-lg bg-primary-container/20 text-primary text-xs font-bold font-headline uppercase border border-primary/30 flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">download</span> Export Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="glass-card p-6 rounded-2xl border border-outline-variant/10 group hover:border-primary/30 transition-all">
          <p className="text-xs font-bold text-tertiary uppercase font-headline tracking-widest">Total Followers</p>
          <div className="flex items-baseline gap-2 mt-2">
            <h3 className="text-3xl font-bold font-headline">1.2M</h3>
            <span className="text-xs text-tertiary-fixed-dim font-medium">+12.5%</span>
          </div>
          <div className="w-full h-1 bg-surface-container-highest mt-4 rounded-full overflow-hidden">
            <div className="h-full bg-tertiary w-3/4 shadow-[0_0_10px_#00DFC1]"></div>
          </div>
        </div>

        <div className="glass-card p-6 rounded-2xl border border-outline-variant/10 group hover:border-primary/30 transition-all">
          <p className="text-xs font-bold text-primary uppercase font-headline tracking-widest">Active Viewers</p>
          <div className="flex items-baseline gap-2 mt-2">
            <h3 className="text-3xl font-bold font-headline">48.2K</h3>
            <span className="text-xs text-primary font-medium">+4.2%</span>
          </div>
          <div className="w-full h-1 bg-surface-container-highest mt-4 rounded-full overflow-hidden">
            <div className="h-full bg-primary w-1/2 shadow-[0_0_10px_#EDB1FF]"></div>
          </div>
        </div>

        <div className="glass-card p-6 rounded-2xl border border-outline-variant/10 group hover:border-primary/30 transition-all">
          <p className="text-xs font-bold text-secondary uppercase font-headline tracking-widest">Avg. Watch Time</p>
          <div className="flex items-baseline gap-2 mt-2">
            <h3 className="text-3xl font-bold font-headline">24m 12s</h3>
            <span className="text-xs text-error font-medium">-1.2%</span>
          </div>
          <div className="w-full h-1 bg-surface-container-highest mt-4 rounded-full overflow-hidden">
            <div className="h-full bg-secondary w-2/3 shadow-[0_0_10px_#D6BAFF]"></div>
          </div>
        </div>

        <div className="glass-card p-6 rounded-2xl border border-outline-variant/10 group hover:border-primary/30 transition-all">
          <p className="text-xs font-bold text-white/50 uppercase font-headline tracking-widest">Retention Rate</p>
          <div className="flex items-baseline gap-2 mt-2">
            <h3 className="text-3xl font-bold font-headline">68.5%</h3>
            <span className="text-xs text-tertiary font-medium">+8.1%</span>
          </div>
          <div className="w-full h-1 bg-surface-container-highest mt-4 rounded-full overflow-hidden">
            <div className="h-full bg-white w-5/6"></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 glass-card rounded-2xl border border-outline-variant/10 overflow-hidden flex flex-col">
          <div className="p-6 border-b border-outline-variant/10 flex justify-between items-center">
            <h3 className="text-xl font-bold font-headline uppercase tracking-wide">Geographic Distribution</h3>
            <div className="flex items-center gap-4 text-xs font-medium text-on-surface-variant">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-primary"></span> High Density</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-primary/30"></span> Low Density</span>
            </div>
          </div>
          <div className="relative flex-1 min-h-[400px] bg-surface-container-low group">
            <img className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAg1St3AqXoe833aU7ikgzDnGLf6X5e28VfWsbjNoT_5vvOGGTGlqHA294zvy6d-xLGAx_AVQjryLZ8_VOxB0lMIEgtsTx-1tQ-Aojv27uUcvPjB5m6POYvJtP58B7lPflFtgZVWR_DHX7l677snHbotSpIWrTOOEEj-mG315Yn2gsv0RfIZwNb9rGJ8WbNdAs6_q_B3kJy12Bupmj_Ag-_7MRkYoUq7At9hJcH1euNyTzmSLZFyVfSfQc-uCPxS26AMJ4wnmL81oU" />
            <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary rounded-full animate-ping opacity-75"></div>
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full shadow-[0_0_15px_#EDB1FF]"></div>

            <div className="absolute top-1/3 left-1/2 w-4 h-4 bg-tertiary rounded-full animate-ping opacity-75"></div>
            <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-tertiary rounded-full shadow-[0_0_15px_#00DFC1]"></div>

            <div className="absolute bottom-1/2 right-1/4 w-4 h-4 bg-primary rounded-full animate-ping opacity-75"></div>
            <div className="absolute bottom-1/2 right-1/4 w-2 h-2 bg-primary rounded-full shadow-[0_0_15px_#EDB1FF]"></div>

            <div className="absolute bottom-6 left-6 glass-card p-4 rounded-xl border border-white/10 max-w-[200px]">
              <h4 className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-3">Top Countries</h4>
              <ul className="space-y-2">
                <li className="flex justify-between items-center text-xs">
                  <span className="text-white">United States</span>
                  <span className="font-headline font-bold text-primary">42%</span>
                </li>
                <li className="flex justify-between items-center text-xs">
                  <span className="text-white">Germany</span>
                  <span className="font-headline font-bold text-primary">18%</span>
                </li>
                <li className="flex justify-between items-center text-xs">
                  <span className="text-white">South Korea</span>
                  <span className="font-headline font-bold text-primary">12%</span>
                </li>
                <li className="flex justify-between items-center text-xs">
                  <span className="text-white">Brazil</span>
                  <span className="font-headline font-bold text-primary">9%</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="glass-card p-6 rounded-2xl border border-outline-variant/10">
            <h3 className="text-lg font-bold font-headline uppercase tracking-wide mb-6">Age Groups</h3>
            <div className="space-y-4">
              {[
                { range: "13 - 17", pct: "15%", bg: "bg-primary/40", shadow: "" },
                { range: "18 - 24", pct: "45%", bg: "bg-primary", shadow: "shadow-[0_0_10px_#EDB1FF]" },
                { range: "25 - 34", pct: "30%", bg: "bg-primary/70", shadow: "" },
                { range: "35+", pct: "10%", bg: "bg-primary/20", shadow: "" }
              ].map((age) => (
                <div key={age.range}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-on-surface-variant">{age.range}</span>
                    <span className="text-white font-bold">{age.pct}</span>
                  </div>
                  <div className="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
                    <div className={`h-full ${age.bg} ${age.shadow}`} style={{ width: age.pct }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-outline-variant/10">
            <h3 className="text-lg font-bold font-headline uppercase tracking-wide mb-6">Gender Identity</h3>
            <div className="flex items-center gap-6">
              <div className="relative w-24 h-24">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <circle className="stroke-tertiary/20" cx="18" cy="18" fill="none" r="16" strokeWidth="4"></circle>
                  <circle className="stroke-primary" cx="18" cy="18" fill="none" r="16" strokeDasharray="65, 100" strokeLinecap="round" strokeWidth="4"></circle>
                  <circle className="stroke-tertiary" cx="18" cy="18" fill="none" r="16" strokeDasharray="25, 100" strokeDashoffset="-65" strokeLinecap="round" strokeWidth="4"></circle>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-xl font-bold font-headline">M/F</span>
                </div>
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary"></span><span className="text-on-surface-variant">Male</span></div>
                  <span className="text-white font-bold">65%</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-tertiary"></span><span className="text-on-surface-variant">Female</span></div>
                  <span className="text-white font-bold">25%</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-surface-container-highest"></span><span className="text-on-surface-variant">Non-binary</span></div>
                  <span className="text-white font-bold">10%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="glass-card p-6 rounded-2xl border border-outline-variant/10">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h3 className="text-xl font-bold font-headline uppercase tracking-wide">Viewer Engagement Heatmap</h3>
            <p className="text-xs text-on-surface-variant uppercase tracking-widest mt-1">Activity by Day and Time (UTC)</p>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-bold text-white/50">
            <span>LESS ACTIVE</span>
            <div className="flex gap-1">
              <div className="w-4 h-4 bg-primary/5 rounded-sm"></div>
              <div className="w-4 h-4 bg-primary/20 rounded-sm"></div>
              <div className="w-4 h-4 bg-primary/50 rounded-sm"></div>
              <div className="w-4 h-4 bg-primary/80 rounded-sm"></div>
              <div className="w-4 h-4 bg-primary rounded-sm shadow-[0_0_5px_#EDB1FF]"></div>
            </div>
            <span>MORE ACTIVE</span>
          </div>
        </div>

        <div className="overflow-x-auto no-scrollbar">
          <div className="min-w-[800px] grid" style={{ gridTemplateColumns: 'minmax(40px, 1fr) repeat(24, 1fr)', gap: '0.5rem' }}>
            <div className="col-start-2 col-span-24 grid grid-cols-24 text-[9px] font-bold text-white/30 uppercase tracking-tighter mb-2" style={{ gridTemplateColumns: 'repeat(24, 1fr)' }}>
              <div className="text-center">12a</div><div className="text-center"></div><div className="text-center"></div><div className="text-center"></div>
              <div className="text-center">4a</div><div className="text-center"></div><div className="text-center"></div><div className="text-center"></div>
              <div className="text-center">8a</div><div className="text-center"></div><div className="text-center"></div><div className="text-center"></div>
              <div className="text-center">12p</div><div className="text-center"></div><div className="text-center"></div><div className="text-center"></div>
              <div className="text-center">4p</div><div className="text-center"></div><div className="text-center"></div><div className="text-center"></div>
              <div className="text-center">8p</div><div className="text-center"></div><div className="text-center"></div><div className="text-center"></div>
            </div>

            <div className="col-span-1 flex flex-col justify-between text-[10px] font-bold text-white/50 pr-2 pt-1 pb-1">
              <div>MON</div><div>TUE</div><div>WED</div><div>THU</div><div>FRI</div><div>SAT</div><div>SUN</div>
            </div>

            <div className="col-span-24 grid grid-rows-7 gap-1" style={{ gridTemplateColumns: 'repeat(24, 1fr)' }}>
              {heatmapData.map((colorClass, i) => (
                <div key={i} className={`aspect-square ${colorClass} rounded-sm`}></div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
