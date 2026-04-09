import { Link, useLocation } from "react-router-dom";
import { clsx } from "clsx";

export function Sidebar() {
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/", icon: "dashboard" },
    { name: "Analytics", path: "/analytics", icon: "insights" },
    { name: "Audience", path: "/audience", icon: "group" },
    { name: "Revenue", path: "/revenue", icon: "payments" },
    { name: "Settings", path: "/settings", icon: "settings" },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-64 border-r-2 border-primary-container/20 bg-[#191C22]/80 backdrop-blur-xl flex flex-col py-8 z-50 shadow-[0_0_15px_rgba(157,80,187,0.1)]">
      <div className="px-6 mb-10 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-container flex items-center justify-center shadow-[0_0_15px_rgba(237,177,255,0.4)]">
          <span className="material-symbols-outlined text-on-primary">bolt</span>
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-widest text-[#EDB1FF] font-headline uppercase">GamerStream</h1>
          <p className="text-[10px] uppercase tracking-widest text-tertiary-fixed font-headline font-bold">Pro Analytics</p>
        </div>
      </div>

      <nav className="flex-1 space-y-2 px-3 overflow-y-auto no-scrollbar">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={clsx(
                "flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group",
                isActive
                  ? "text-[#EDB1FF] border-r-4 border-[#9D50BB] bg-gradient-to-r from-[#9D50BB]/10 to-transparent"
                  : "text-gray-400 hover:text-white hover:bg-[#363940]/50 hover:shadow-[0_0_15px_rgba(157,80,187,0.3)]"
              )}
            >
              <span
                className="material-symbols-outlined transition-transform group-active:scale-90"
                style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
              >
                {item.icon}
              </span>
              <span className="text-sm font-medium font-label">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="px-6 mt-auto">
        <button className="w-full py-3 bg-gradient-to-br from-primary to-primary-container text-on-primary-fixed font-headline font-bold uppercase tracking-wider rounded-xl hover:shadow-[0_0_15px_#EDB1FF] transition-all duration-300 transform active:scale-95">
          Go Live
        </button>
        <div className="mt-8 flex items-center gap-3">
          <img
            alt="User profile avatar"
            className="w-10 h-10 rounded-full border-2 border-primary/20 object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAr2PKnonR-wsXj950Lyl1gvcMmYphNxK_wzghRCqfAnWuyYx6imZdTKr_ZmJcdt7RJB00roXtgO12mVWux3N44BA_EsOCcrsZschGiIEEv4I79tauNn7SWO57XaB1yNBuUZd3YVXdrJ0aLlKJ0DGFQHRL3UecO_w4raUnMWbWqdgvpCK_43GchyXNvkL10EpEh3GrN4ae0ub92PJ9YhZ6fI5mT_bZ2X_Qdz4KGVLJ4mSQs6NYgfTTtY1i61UjQB37GYu_lPCFUlAo"
          />
          <div className="overflow-hidden">
            <p className="text-xs font-bold text-on-surface truncate">Alex Rivera</p>
            <p className="text-[10px] text-tertiary-fixed/70 uppercase">Top Tier Streamer</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
