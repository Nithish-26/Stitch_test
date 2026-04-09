import { clsx } from "clsx";

export function Dashboard() {
  return (
    <section className="p-8 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-end gap-4">
        <div>
          <h2 className="text-4xl font-headline font-bold uppercase tracking-tighter text-on-surface">Live Performance Dashboard</h2>
          <p className="text-on-surface-variant font-label text-sm mt-1">Real-time engagement metrics and audience growth insights.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 text-xs font-headline uppercase font-bold text-tertiary border border-tertiary/20 rounded-lg hover:bg-tertiary/10 transition-all">Export report</button>
          <button className="px-4 py-2 text-xs font-headline uppercase font-bold bg-surface-container-high text-on-surface rounded-lg hover:bg-surface-bright transition-all">Last 30 Days</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-8 glass-card rounded-2xl p-6 relative overflow-hidden group">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="font-headline text-xl uppercase font-bold tracking-wider text-white">Subscriber growth</h3>
              <p className="text-on-surface-variant text-sm font-label">Visualizing last 30 days performance</p>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold text-primary font-headline">+12,482</span>
              <p className="text-[10px] uppercase text-tertiary tracking-widest">Growth Peak</p>
            </div>
          </div>

          <div className="h-64 relative flex items-end gap-1">
            {[30, 45, 35, 60, 55, 85, 65, 95, 75, 55, 40, 45].map((h, i) => (
              <div
                key={i}
                className={clsx(
                  "flex-1 rounded-t-sm",
                  h === 95 ? "bg-gradient-to-t from-primary/40 to-primary/20 relative" : "bg-gradient-to-t from-primary/20 to-primary/5"
                )}
                style={{ height: `${h}%` }}
              >
                {h === 95 && <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#EDB1FF]"></div>}
              </div>
            ))}
          </div>
          <svg className="absolute bottom-6 left-6 right-6 h-64 w-[calc(100%-3rem)] pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
            <path className="drop-shadow-[0_0_8px_rgba(237,177,255,0.8)]" d="M0,70 Q10,45 20,65 T40,40 T60,15 T80,25 T100,55" fill="none" stroke="#EDB1FF" strokeWidth="2"></path>
          </svg>
        </div>

        <div className="md:col-span-4 glass-card rounded-2xl p-6 flex flex-col justify-between border-tertiary/10 group hover:border-tertiary/30 transition-all">
          <div className="flex justify-between items-start">
            <span className="material-symbols-outlined text-tertiary-fixed text-3xl">visibility</span>
            <div className="flex items-center gap-2 px-2 py-1 bg-tertiary/10 rounded-full">
              <div className="w-2 h-2 bg-tertiary rounded-full animate-pulse"></div>
              <span className="text-[10px] font-bold text-tertiary font-headline uppercase">Live</span>
            </div>
          </div>
          <div>
            <p className="text-on-surface-variant text-sm font-label">Live viewers</p>
            <h4 className="text-4xl font-headline font-bold text-white mt-1">42.8K</h4>
            <div className="flex items-center gap-1 mt-2 text-tertiary">
              <span className="material-symbols-outlined text-sm">trending_up</span>
              <span className="text-xs font-medium">+5.2% from last hour</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-4 glass-card rounded-2xl p-6 flex flex-col justify-between group hover:border-primary/30 transition-all">
          <div className="flex justify-between items-start">
            <span className="material-symbols-outlined text-primary-fixed text-3xl">schedule</span>
            <span className="text-[10px] font-bold text-on-surface-variant font-headline uppercase">Total Time</span>
          </div>
          <div>
            <p className="text-on-surface-variant text-sm font-label">Total hours streamed</p>
            <h4 className="text-4xl font-headline font-bold text-white mt-1">1,240</h4>
            <p className="text-xs text-outline mt-2 font-label">Season rank: #420</p>
          </div>
        </div>

        <div className="md:col-span-4 glass-card rounded-2xl p-6 flex flex-col justify-between border-secondary-container/30 group hover:border-secondary/30 transition-all">
          <div className="flex justify-between items-start">
            <span className="material-symbols-outlined text-secondary text-3xl">payments</span>
            <div className="bg-secondary-container/20 px-2 py-1 rounded text-[10px] text-secondary font-headline font-bold">EST. EARNINGS</div>
          </div>
          <div>
            <p className="text-on-surface-variant text-sm font-label">Revenue</p>
            <h4 className="text-4xl font-headline font-bold text-white mt-1">$18,520</h4>
            <div className="flex items-center gap-1 mt-2 text-tertiary">
              <span className="material-symbols-outlined text-sm">bolt</span>
              <span className="text-xs font-medium">New sub record reached</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-8 glass-card rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-outline-variant/10 flex justify-between items-center bg-surface-container-low">
            <h3 className="font-headline text-lg uppercase font-bold tracking-wider text-white">Top Tamil Gaming Streams</h3>
            <a className="text-xs font-headline uppercase text-tertiary-fixed hover:underline" href="#">View all sessions</a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[10px] uppercase font-headline tracking-widest text-outline border-b border-outline-variant/10">
                  <th className="px-6 py-4 font-semibold">Stream Title</th>
                  <th className="px-6 py-4 font-semibold text-center">Peak Viewers</th>
                  <th className="px-6 py-4 font-semibold text-center">Engagement</th>
                  <th className="px-6 py-4 font-semibold text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/5">
                <tr className="hover:bg-surface-bright/20 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-surface-container-high overflow-hidden">
                        <img alt="game stream thumbnail" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_Bn8u8WRRVcWA6I5qQ-FbgzlIX8BZJ16UI0KqqS9Eg4WwpTZ1FrTFKN3ZYy0gRQD0De5iCHLdYh4k4rjoclPtq3DzKuZMzimWioRA41r8e9Fzk3bFFlYTTtmtIHqZrWlLuljxZrutvyZ5Av6EjR7OxmIDrWOj_Wb66vb9vVPl7qJp-y-kO_9Orn9zKNjOva0fV1yw89ifOXIqpgaZwxOBNfyDlNTstD0kA4Zhdjco64Awt89mgLbbYl7zYe50z-b8ro2X7cIt5i8"/>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-on-surface">Tamil Valorant Championship Finals</p>
                        <p className="text-[10px] text-tertiary-fixed uppercase">Competitive Play</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center font-headline text-lg text-white">12.4K</td>
                  <td className="px-6 py-4">
                    <div className="w-full bg-outline-variant/20 h-1 rounded-full overflow-hidden">
                      <div className="bg-tertiary h-full w-[85%]"></div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="text-[10px] font-headline font-bold uppercase py-1 px-2 rounded bg-tertiary/10 text-tertiary">Live</span>
                  </td>
                </tr>
                <tr className="hover:bg-surface-bright/20 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-surface-container-high overflow-hidden">
                        <img alt="game stream thumbnail" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADp_bagveuBECkEed_aRdgMlvtboCvn5l4BHDObFDf02zfocsLOfDMqzqLeZN0kBBYRcubKrr839DsHLWGRIrv0fHn8g1bFAFPim812MMArSCl2gL5lOM8uD1FwxtLlLwLfiNZStRgPjwWsVezwkIGOAeUXkAjr1B59xPa1XTfkTXOZs3GzVSNyJt8MQbYbc9urXu3cAjz_wrBF1BYSKj_xlbKc3XC6RCg44zMcsuX0ECaZKLEIOBozDS-tkgeCwQnWV5hO_3h_tk"/>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-on-surface">Midnight GTA RP: Tamil Kings</p>
                        <p className="text-[10px] text-secondary uppercase">Roleplay Session</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center font-headline text-lg text-white">8.2K</td>
                  <td className="px-6 py-4">
                    <div className="w-full bg-outline-variant/20 h-1 rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[65%]"></div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="text-[10px] font-headline font-bold uppercase py-1 px-2 rounded bg-outline-variant/20 text-on-surface-variant">Archived</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="md:col-span-4 space-y-6">
          <div className="glass-card rounded-2xl p-6 h-full border-l-4 border-l-tertiary">
            <h3 className="font-headline text-lg uppercase font-bold tracking-wider text-white mb-4">Audience Demographics</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-label text-on-surface-variant">Tamil Nadu, IN</span>
                  <span className="text-xs font-bold text-white">68%</span>
                </div>
                <div className="w-full bg-surface-container-highest h-1.5 rounded-full">
                  <div className="bg-tertiary h-full w-[68%] rounded-full shadow-[0_0_8px_#26fedc]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-label text-on-surface-variant">Sri Lanka</span>
                  <span className="text-xs font-bold text-white">15%</span>
                </div>
                <div className="w-full bg-surface-container-highest h-1.5 rounded-full">
                  <div className="bg-primary h-full w-[15%] rounded-full shadow-[0_0_8px_#edb1ff]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-label text-on-surface-variant">Malaysia</span>
                  <span className="text-xs font-bold text-white">12%</span>
                </div>
                <div className="w-full bg-surface-container-highest h-1.5 rounded-full">
                  <div className="bg-secondary h-full w-[12%] rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="mt-10 p-4 rounded-xl bg-primary-container/10 border border-primary-container/20">
              <p className="text-xs italic text-on-primary-container font-label leading-relaxed">
                  "Streams with Tamil titles see 40% higher click-through rates from local viewers between 8PM and 11PM IST."
              </p>
              <div className="mt-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">tips_and_updates</span>
                <span className="text-[10px] font-headline font-bold uppercase text-primary">Pro Tip</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
