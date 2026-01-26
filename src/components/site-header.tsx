import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Matrimony Utsav
        </Link>

        <nav className="flex items-center gap-4 text-sm font-medium">
          <Link href="/" className="text-slate-700 hover:text-slate-900">
            Home
          </Link>
          <Link
            href="/register"
            className="rounded-lg bg-rose-700 px-4 py-2 text-white hover:bg-rose-800"
          >
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
}
