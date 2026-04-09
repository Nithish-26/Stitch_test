export function Settings() {
  return (
    <div className="p-8 max-w-6xl w-full mx-auto">
      {/* Breadcrumbs / Page Header */}
      <div className="mb-10">
        <h1 className="font-display font-bold text-5xl uppercase tracking-[0.05em] text-on-background mb-2">Account Settings</h1>
        <p className="text-secondary text-lg opacity-80">Configure your broadcast presence and account security</p>
      </div>
      {/* Settings Tab System */}
      <div className="flex space-x-8 mb-8 border-b border-outline-variant/20">
        <button className="pb-4 text-primary font-bold border-b-2 border-primary uppercase tracking-wider text-sm transition-all">Profile</button>
        <button className="pb-4 text-on-surface-variant hover:text-primary uppercase tracking-wider text-sm transition-all">Security</button>
        <button className="pb-4 text-on-surface-variant hover:text-primary uppercase tracking-wider text-sm transition-all">Notifications</button>
        <button className="pb-4 text-on-surface-variant hover:text-primary uppercase tracking-wider text-sm transition-all">Billing</button>
      </div>
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-12 gap-6">
        {/* Profile Identity Card */}
        <section className="col-span-12 lg:col-span-8 space-y-6">
          <div className="glass-panel p-8 rounded-2xl flex flex-col md:flex-row gap-8 items-start">
            <div className="relative group">
              <div className="w-32 h-32 rounded-2xl overflow-hidden border-2 border-primary p-1 bg-background">
                <img className="w-full h-full object-cover rounded-xl" alt="Close-up of high-end gaming mouse and mechanical keyboard with vibrant neon RGB lighting in shades of purple and teal" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1byiESKHtWKeDWxwL2W2rl379fpyCgVXpGsxAsSTHhjuPL1pZVl_XdR2kaEyezLMqr3oiAXDaagh_oflhXYJZLu6jDEa1EreEE2myHIUavosS92yXpqTSLd6-0diud2Ilti45KzAZ5dx_QnTKA4OYk0IrEnA-JUACVfcgjd6Cbe-FajDwZcrwpc9XVeYBP46UHOrU8eda4NcTEuqAPgEam6L5JFKEiuTSworFoG5I4WthbU5uGDhiqIReWVIH4h6sJOscuHnb7Fo" />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  <span className="material-symbols-outlined text-white text-3xl">photo_camera</span>
                </div>
              </div>
              <button className="mt-4 text-tertiary text-xs font-bold uppercase tracking-widest hover:underline block text-center w-full">Update Avatar</button>
            </div>
            <div className="flex-1 space-y-6 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-secondary text-xs font-bold uppercase tracking-tighter">Display Username</label>
                  <input className="w-full bg-surface-container-lowest border-b border-primary-container/40 p-3 text-on-background focus:outline-none focus:border-primary focus:ring-0 transition-all rounded-t-lg" type="text" defaultValue="ProGamer_99" />
                </div>
                <div className="space-y-2">
                  <label className="text-secondary text-xs font-bold uppercase tracking-tighter">Account Email</label>
                  <input className="w-full bg-surface-container-lowest border-b border-primary-container/40 p-3 text-on-background focus:outline-none focus:border-primary focus:ring-0 transition-all rounded-t-lg opacity-60" disabled type="email" defaultValue="alex.storm@gamerhub.io" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-secondary text-xs font-bold uppercase tracking-tighter">Broadcast Bio</label>
                <textarea className="w-full bg-surface-container-lowest border-b border-primary-container/40 p-3 text-on-background focus:outline-none focus:border-primary focus:ring-0 transition-all rounded-t-lg resize-none" placeholder="Tell your audience about yourself..." rows={4} defaultValue="Elite tier FPS player specializing in tactical shooters. Streaming daily from the neon abyss. Join the shadow collective." />
              </div>
            </div>
          </div>
          {/* Additional Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-panel p-6 rounded-2xl">
              <h3 className="font-display text-xl uppercase tracking-wider text-primary mb-4 flex items-center">
                <span className="material-symbols-outlined mr-2">link</span> Connected Accounts
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-surface-container-high rounded-xl">
                  <div className="flex items-center space-x-3">
                    <span className="material-symbols-outlined text-secondary">videogame_asset</span>
                    <span className="text-sm">Steam Account</span>
                  </div>
                  <span className="text-tertiary text-xs font-bold uppercase">Linked</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-surface-container-high rounded-xl">
                  <div className="flex items-center space-x-3">
                    <span className="material-symbols-outlined text-secondary">share</span>
                    <span className="text-sm">Twitter/X</span>
                  </div>
                  <button className="text-on-surface-variant hover:text-primary text-xs font-bold uppercase">Connect</button>
                </div>
              </div>
            </div>
            <div className="glass-panel p-6 rounded-2xl">
              <h3 className="font-display text-xl uppercase tracking-wider text-primary mb-4 flex items-center">
                <span className="material-symbols-outlined mr-2">palette</span> Interface Theme
              </h3>
              <div className="flex space-x-3">
                <button className="flex-1 aspect-video bg-[#0B0E14] border-2 border-primary rounded-xl flex flex-col items-center justify-center space-y-2">
                  <div className="w-8 h-8 rounded-full bg-primary shadow-[0_0_10px_#EDB1FF]"></div>
                  <span className="text-[10px] uppercase font-bold text-primary">Neon Aether</span>
                </button>
                <button className="flex-1 aspect-video bg-[#1D2026] border border-outline-variant/20 rounded-xl flex flex-col items-center justify-center space-y-2 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
                  <div className="w-8 h-8 rounded-full bg-tertiary"></div>
                  <span className="text-[10px] uppercase font-bold">Cyber Green</span>
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Sidebar / Quick Actions */}
        <aside className="col-span-12 lg:col-span-4 space-y-6">
          {/* Stream Stats Card */}
          <div className="bg-gradient-to-br from-primary/20 to-secondary/10 p-6 rounded-2xl border border-primary/30 relative overflow-hidden">
            <div className="absolute -right-8 -bottom-8 opacity-10">
              <span className="material-symbols-outlined text-9xl">verified_user</span>
            </div>
            <h3 className="font-display text-2xl uppercase font-black text-on-background mb-4">Stream Status</h3>
            <div className="space-y-4 relative z-10">
              <div className="flex justify-between items-center">
                <span className="text-sm opacity-70">Account Standing</span>
                <span className="text-tertiary font-bold px-2 py-0.5 bg-tertiary/10 rounded border border-tertiary/20 text-[10px] uppercase">Excellent</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm opacity-70">Next Payout</span>
                <span className="text-on-background font-mono text-sm">$1,420.69</span>
              </div>
              <div className="pt-4">
                <div className="w-full bg-black/40 rounded-full h-1.5 mb-2">
                  <div className="bg-primary h-full rounded-full" style={{ width: "75%" }}></div>
                </div>
                <div className="flex justify-between text-[10px] font-bold uppercase text-secondary">
                  <span>Lv. 9 Associate</span>
                  <span>Next: Partner</span>
                </div>
              </div>
            </div>
          </div>
          {/* Action Sidebar */}
          <div className="glass-panel p-6 rounded-2xl space-y-4">
            <button className="w-full bg-surface-bright/20 hover:bg-surface-bright/40 text-on-background font-bold py-4 rounded-xl flex items-center justify-center space-x-3 transition-colors border border-outline-variant/20">
              <span className="material-symbols-outlined">save</span>
              <span className="uppercase tracking-widest text-sm">Save Changes</span>
            </button>
            <button className="w-full bg-transparent text-error hover:bg-error/10 font-bold py-4 rounded-xl flex items-center justify-center space-x-3 transition-colors">
              <span className="material-symbols-outlined">delete_forever</span>
              <span className="uppercase tracking-widest text-sm">Deactivate Account</span>
            </button>
          </div>
          {/* Security Tip */}
          <div className="p-6 rounded-2xl border-l-4 border-tertiary bg-tertiary/5">
            <div className="flex space-x-4">
              <span className="material-symbols-outlined text-tertiary">info</span>
              <div>
                <p className="text-xs font-bold text-tertiary uppercase mb-1">Security Checkup</p>
                <p className="text-xs opacity-70 leading-relaxed">Your 2-Factor Authentication was last updated 45 days ago. We recommend refreshing your keys for maximum protection.</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
      {/* Decorative Visual Element */}
      <div className="mt-16 w-full h-48 rounded-3xl overflow-hidden relative group">
        <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="An abstract cinematic landscape of glowing purple digital waves and neon data particles flowing through a dark void" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTQf1Ld7wFCRYc7RV-EfDZlkQ1R1TOTuVjl3MnMT0jZCNlN-m7GKs8BP5LVaY6fol1cnRtp5Zb0cS6wRt8i6n3rGcZEwlCKEvPRw6Q72ybIevJZTTqmfUBgAH22VT6Vy9iS7xT1Ny3ILWmtXJh0LJ2rNdVFJfa7crFjcB8He5UvlcCKdYUSkjyv0eQMMUQkO642g3g6wzYXnPWmeAd4FJ0nqqVVkdBZPfnFbU2RVlHI0IHVpIy27Gz79DdcmV8ZaL9ez1YvE-ktvE" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        <div className="absolute bottom-8 left-8">
          <h4 className="font-display text-3xl font-black uppercase text-white drop-shadow-2xl">The Kinetic Shadow</h4>
          <p className="text-primary text-sm font-bold tracking-[0.2em] uppercase">Season 4 Now Live</p>
        </div>
      </div>
    </div>
  );
}
