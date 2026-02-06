import React from "react";

interface ResultsLayoutProps {
  sidebar: React.ReactNode;
  topBar: React.ReactNode;
  children: React.ReactNode;
  /** When "commerce", main area uses light neutral background and maroon sidebar. Suitable for Products and Services results. */
  variant?: "default" | "commerce";
}

export default function ResultsLayout({
  sidebar,
  topBar,
  children,
  variant = "default",
}: ResultsLayoutProps) {
  const isCommerce = variant === "commerce";

  return (
    <section
      className={
        isCommerce
          ? "w-full min-h-screen bg-stone-100"
          : "w-full bg-gradient-to-b from-rose-950 to-rose-900 text-white"
      }
    >
      <div className="flex w-full">
        {/* Sidebar: maroon for commerce variant, else dark translucent */}
        <aside
          className={
            isCommerce
              ? "w-72 shrink-0 bg-rose-950 p-4 sticky top-24 h-screen overflow-y-auto text-white"
              : "w-72 shrink-0 bg-white/5 p-4 ring-1 ring-white/10 backdrop-blur sticky top-24 h-screen overflow-y-auto"
          }
        >
          {sidebar}
        </aside>

        {/* Main Content */}
        <main
          className={
            isCommerce
              ? "flex-1 min-w-0 w-full p-6 bg-stone-100 text-slate-900"
              : "flex-1 min-w-0 w-full p-6"
          }
        >
          <div className="mb-6">{topBar}</div>
          <div className="w-full">{children}</div>
        </main>
      </div>
    </section>
  );
}
