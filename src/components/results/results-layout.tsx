import React from "react";

interface ResultsLayoutProps {
  sidebar: React.ReactNode;
  topBar: React.ReactNode;
  children: React.ReactNode;
}

export default function ResultsLayout({
  sidebar,
  topBar,
  children,
}: ResultsLayoutProps) {
  return (
    <section className="bg-black text-white w-full">
      <div className="flex w-full">
        {/* Sidebar */}
        <aside className="w-72 shrink-0 bg-white/5 p-4 ring-1 ring-white/10 backdrop-blur sticky top-24 h-screen overflow-y-auto">
          {sidebar}
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0 w-full p-6">
          {/* Top Bar */}
          <div className="mb-6">{topBar}</div>

          {/* Content */}
          <div className="w-full">{children}</div>
        </main>
      </div>
    </section>
  );
}
