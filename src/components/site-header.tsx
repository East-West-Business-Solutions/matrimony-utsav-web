import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-slate-900 hover:text-rose-700"
        >
          Mohan Utsav
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link
            href="/"
            className="text-slate-600 hover:text-slate-900"
          >
            Home
          </Link>
          <Link
            href="/venues"
            className="text-slate-600 hover:text-slate-900"
          >
            Venues
          </Link>
          <Link
            href="/services"
            className="text-slate-600 hover:text-slate-900"
          >
            Services
          </Link>
          <Link
            href="/products"
            className="text-slate-600 hover:text-slate-900"
          >
            Products
          </Link>
          <Link
            href="/register"
            className="rounded-lg bg-rose-600 px-4 py-2 text-white hover:bg-rose-700"
          >
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
}
