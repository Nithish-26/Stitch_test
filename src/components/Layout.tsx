import type { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-surface-container-lowest text-on-surface">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-64 min-h-screen relative">
        <Header />
        <main className="flex-1 pt-16 h-full overflow-y-auto w-full relative">
          {children}
        </main>
      </div>
    </div>
  );
}
