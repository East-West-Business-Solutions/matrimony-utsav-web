import Link from "next/link";

export const metadata = {
  title: "Wedding Products | Mohan Utsav",
  description: "Invitations, jewellery, return gifts and more",
};

export default function ProductsPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-20 text-center">
      <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Wedding Products
        </h1>
        <p className="mt-4 text-slate-600">
          Shop invitations, jewellery, return gifts and décor. Full catalog
          coming soon.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/venues"
            className="rounded-xl bg-rose-700 px-6 py-3 text-sm font-semibold text-white hover:bg-rose-800"
          >
            Explore Venues
          </Link>
          <Link
            href="/"
            className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
