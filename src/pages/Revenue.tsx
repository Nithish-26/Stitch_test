export function Revenue() {
  return (
    <div className="px-8 pt-8 pb-12 min-h-full">
      <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-4xl font-extrabold font-headline uppercase tracking-[0.05em] text-white">Revenue Overview</h2>
          <p className="text-outline mt-1 font-medium">Performance metrics for <span className="text-tertiary">September 2024</span></p>
        </div>
        <div className="flex items-center gap-4">
          <div className="glass-panel px-4 py-2 rounded-xl border border-outline-variant/20 flex items-center gap-3">
            <span className="text-xs font-bold text-outline uppercase tracking-wider font-headline">Estimated Payout</span>
            <span className="text-xl font-bold text-primary font-headline tracking-tight">$12,482.50</span>
          </div>
          <button className="px-6 py-2 bg-surface-container-high hover:bg-surface-bright text-white text-sm font-bold font-headline uppercase tracking-widest rounded-xl transition-all border border-outline-variant/20">
            Export Report
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-10">
        <div className="md:col-span-8 glass-panel rounded-2xl p-8 border border-outline-variant/20 relative overflow-hidden group">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="text-lg font-bold font-headline uppercase tracking-wider text-white">Earnings Trajectory</h3>
              <p className="text-xs text-outline">Real-time revenue stream analysis</p>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-primary/10 text-primary uppercase border border-primary/20">Monthly</span>
              <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-surface-container-highest text-outline uppercase">Weekly</span>
            </div>
          </div>

          <div className="h-64 flex items-end justify-between gap-2">
            {[32, 40, 36, 56, 48, 44, 52].map((h, i) => (
              <div
                key={i}
                className={`w-full ${i === 3 ? "bg-primary shadow-[0_0_20px_rgba(237,177,255,0.3)]" : "bg-surface-container-highest"} h-${h} rounded-t-lg relative group/bar`}
                style={{ height: `${h * 0.25}rem` }}
              >
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover/bar:opacity-100 transition-opacity"></div>
                {i === 3 && (
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-surface-bright px-2 py-1 rounded text-[10px] font-bold whitespace-nowrap opacity-0 group-hover/bar:opacity-100 transition-opacity">
                    $2,410 Peak
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-between text-[10px] font-bold text-outline uppercase tracking-widest font-headline">
            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
          </div>
        </div>

        <div className="md:col-span-4 flex flex-col gap-6">
          <div className="bg-surface-container-high rounded-2xl p-6 border-l-4 border-primary hover:shadow-[0_0_25px_rgba(157,80,187,0.15)] transition-all">
            <div className="flex items-center justify-between mb-4">
              <span className="material-symbols-outlined text-primary">loyalty</span>
              <span className="text-tertiary text-xs font-bold font-headline">+12% vs LY</span>
            </div>
            <h4 className="text-xs font-bold text-outline uppercase tracking-widest font-headline">Subscriptions</h4>
            <p className="text-3xl font-bold text-white font-headline mt-1">$6,240.00</p>
          </div>
          <div className="bg-surface-container-high rounded-2xl p-6 border-l-4 border-tertiary hover:shadow-[0_0_25px_rgba(0,223,193,0.1)] transition-all">
            <div className="flex items-center justify-between mb-4">
              <span className="material-symbols-outlined text-tertiary">diamond</span>
              <span className="text-primary text-xs font-bold font-headline">+8% active</span>
            </div>
            <h4 className="text-xs font-bold text-outline uppercase tracking-widest font-headline">Bits & Cheers</h4>
            <p className="text-3xl font-bold text-white font-headline mt-1">$4,120.50</p>
          </div>
          <div className="bg-surface-container-high rounded-2xl p-6 border-l-4 border-secondary hover:shadow-[0_0_25px_rgba(214,186,255,0.1)] transition-all">
            <div className="flex items-center justify-between mb-4">
              <span className="material-symbols-outlined text-secondary">ad_units</span>
              <span className="text-error text-xs font-bold font-headline">-2% dip</span>
            </div>
            <h4 className="text-xs font-bold text-outline uppercase tracking-widest font-headline">Ad Revenue</h4>
            <p className="text-3xl font-bold text-white font-headline mt-1">$2,122.00</p>
          </div>
        </div>
      </div>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold font-headline uppercase tracking-wider text-white">Recent Transactions</h3>
          <div className="flex gap-4">
            <div className="relative">
              <button className="bg-surface-container px-4 py-2 rounded-xl text-xs font-bold font-headline uppercase tracking-wider text-outline flex items-center gap-2 border border-outline-variant/20">
                Status: All <span className="material-symbols-outlined text-sm">expand_more</span>
              </button>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          {[
            { title: "Tier 3 Subscription - ShadowKilla99", sub: "Processed via PayPal • Sept 12, 2024", amt: "+$24.99", icon: "person_add", color: "text-primary", bg: "bg-primary/10", status: "Settled", statusColor: "text-tertiary" },
            { title: "Bits Cheer (5,000) - GhostRunner", sub: "In-App Purchase • Sept 11, 2024", amt: "+$50.00", icon: "diamond", color: "text-tertiary", bg: "bg-tertiary/10", status: "Settled", statusColor: "text-tertiary" },
            { title: "Ad Revenue Payout - Google AdSense", sub: "Automated Credit • Sept 10, 2024", amt: "+$842.15", icon: "support", color: "text-secondary", bg: "bg-secondary/10", status: "Pending", statusColor: "text-outline" }
          ].map((tx, i) => (
            <div key={i} className="bg-surface-container rounded-2xl p-5 flex items-center justify-between hover:bg-surface-container-high transition-colors group">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl ${tx.bg} flex items-center justify-center ${tx.color} group-hover:scale-110 transition-transform`}>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>{tx.icon}</span>
                </div>
                <div>
                  <p className="font-bold text-white font-headline uppercase">{tx.title}</p>
                  <p className="text-xs text-outline">{tx.sub}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`text-xl font-bold ${tx.color} font-headline`}>{tx.amt}</p>
                <p className={`text-[10px] ${tx.statusColor} font-bold font-headline uppercase tracking-widest`}>{tx.status}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button className="px-8 py-3 bg-surface-container border border-outline-variant/20 text-on-surface font-bold font-headline uppercase tracking-widest rounded-xl hover:bg-surface-container-high transition-all">
            Load Archive
          </button>
        </div>
      </section>

      <div className="fixed bottom-8 right-8 flex items-center gap-3 bg-[#0B0E14] border border-tertiary/30 px-4 py-3 rounded-2xl shadow-[0_0_20px_rgba(0,223,193,0.2)] z-50">
        <div className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-tertiary"></span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-tertiary font-headline uppercase tracking-widest">Live Status</span>
          <span className="text-xs font-bold text-white">4.2k Viewers</span>
        </div>
      </div>
    </div>
  );
}
