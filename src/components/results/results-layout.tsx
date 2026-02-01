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
    <section className="bg-black text-white">
      <div className="mx-auto flex max-w-6xl">
        {/* Sidebar */}
        <aside className="w-72 flex-shrink-0 bg-white/5 p-4 ring-1 ring-white/10 backdrop-blur sticky top-24 h-screen overflow-y-auto">
          {sidebar}
        </aside>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Top Bar */}
          <div className="mb-6">{topBar}</div>

          {/* Content */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}