import Link from "next/link";

export default function VendorCta() {
  return (
    <section className="px-4 pb-16">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-b from-rose-900 to-rose-800 shadow-lg">
        <div className="px-6 py-14 sm:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-400/90 text-2xl font-bold text-rose-950">
              ★
            </div>

            <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Are You a Wedding Vendor?
            </h2>

            <p className="mt-3 text-sm leading-6 text-white/85 sm:text-base">
              Join thousands of vendors and grow your business with quality leads.
            </p>

            <div className="mt-8 flex justify-center">
              <Link
                href="/register"
                className="inline-flex items-center justify-center rounded-xl bg-amber-400 px-6 py-3 text-sm font-semibold text-rose-950 hover:bg-amber-300"
              >
                Register Your Business <span aria-hidden className="ml-2">→</span>
              </Link>
            </div>

            <div className="mt-10 grid gap-3 text-sm text-white/85 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
                <span className="font-semibold text-white">Free Registration</span>
              </div>
              <div className="rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
                <span className="font-semibold text-white">Quality Leads</span>
              </div>
              <div className="rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
                <span className="font-semibold text-white">Easy Dashboard</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
