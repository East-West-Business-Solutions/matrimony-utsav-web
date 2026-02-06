"use client";

import { useSearchParams } from "next/navigation";
import { MOCK_SERVICES } from "@/data/mock/services";
import { filterAndSortServices } from "@/lib/services-filter";
import { Service } from "@/data/mock/services";

/** Commerce-style card: white surface, dark text, amber rating, maroon CTA. Non-link until service detail routes exist. */
function ServiceCard({ service }: { service: Service }) {
  const { name, vendor, city, category, price, rating } = service;
  const isPerUnit = category === "Catering";

  return (
    <article
      className="flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
      aria-label={name}
    >
      <div className="relative flex h-32 w-full shrink-0 items-center justify-center bg-slate-100">
        <span className="text-3xl text-slate-300" aria-hidden>
          ◆
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="line-clamp-2 text-base font-semibold leading-snug text-slate-900">
          {name}
        </h3>
        <p className="mt-1 text-sm text-slate-500">by {vendor}</p>
        <p className="text-sm text-slate-500">{city}</p>
        <span className="mt-2 inline-flex w-fit rounded-full border border-rose-200 bg-rose-50 px-2 py-0.5 text-xs font-medium text-rose-800">
          {category}
        </span>
        <div className="mt-2 flex items-center gap-1 text-sm">
          <span className="font-medium text-amber-600" aria-hidden>
            ★
          </span>
          <span className="font-medium text-slate-700">{rating}</span>
        </div>
        <div className="mt-auto pt-3">
          <p className="text-sm font-semibold text-slate-900">
            {isPerUnit
              ? `From ₹${price.toLocaleString("en-IN")}/plate`
              : `From ₹${price.toLocaleString("en-IN")}`}
          </p>
          <button
            type="button"
            className="mt-2 w-full rounded-lg bg-rose-600 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
          >
            View details
          </button>
        </div>
      </div>
    </article>
  );
}

export default function ServicesResultsClient() {
  const searchParams = useSearchParams();
  const filtered = filterAndSortServices(MOCK_SERVICES, searchParams);

  if (filtered.length === 0) {
    return (
      <div className="rounded-lg border border-slate-200 bg-white p-8 text-center text-slate-600 shadow-sm">
        No services match your filters.
      </div>
    );
  }

  return (
    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {filtered.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
}
