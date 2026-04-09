import { useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-64 right-0 h-16 flex items-center justify-between px-8 bg-[#0B0E14]/60 backdrop-blur-md z-40">
      <div className="flex items-center flex-1 max-w-xl gap-4">
        <div className="relative w-full group">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline/50 group-focus-within:text-primary transition-colors text-sm">search</span>
          <input
            className="w-full bg-surface-container-lowest border-none border-b border-primary-container/30 focus:ring-1 focus:ring-primary-container/50 focus:border-primary text-sm font-label py-2 pl-10 pr-4 rounded-t-lg transition-all text-on-surface"
            placeholder="Search analytics..."
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-6 ml-8">
        {location.pathname === "/audience" && (
          <div className="flex items-center gap-2 mr-2">
            <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
            <span className="text-[10px] font-headline font-bold uppercase tracking-widest text-tertiary">Live Insights</span>
          </div>
        )}
        <div className="flex gap-4">
          <button className="text-white/70 hover:text-primary transition-all flex items-center">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="text-white/70 hover:text-primary transition-all flex items-center">
            <span className="material-symbols-outlined">help</span>
          </button>
        </div>
        <div className="h-8 w-[1px] bg-outline-variant/30 mx-2"></div>
        <div className="flex items-center gap-3">
          <span className="text-xs font-headline uppercase tracking-wider text-white">GamerStream Hub</span>
          <img
            alt="Streamer profile image"
            className="w-8 h-8 rounded-lg object-cover border border-outline-variant/20"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfMT3tbx7uCUa1oT5lMBoa2ByhTHCVsN_h4hu3yinMWqMfrKptVnxNkkvCLqhx5OSftNy0wnamA3ooQ9y4z2SwjgzbXaxWw5q7tcynV0JNuJHbCt1d5FjSObNkSSdFK9RKv1XgZC5imWPjB4_u4mwdQky4wQwABUK8NLP-TN9U9Hbe_or48FtCzhOUaTJMZ-Sk9ZeN9uFos08zta2WPBAhf4ox4fM5uIZBoxee1ZTNPVjz171A6u-d5UzuJPriXw7puh-n8oV5KJc"
          />
        </div>
      </div>
    </header>
  );
}
