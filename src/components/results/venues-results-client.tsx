"use client";

import { useSearchParams } from "next/navigation";
import { MOCK_VENUES } from "@/data/mock/venues";
import { filterAndSortVenues } from "@/lib/venues-filter";
import Image from "next/image";
import { useState } from "react";
import { Venue } from "@/data/mock/venues";

function VenueCardImage({ src, alt }: { src?: string; alt: string }) {
  const [imgSrc, setImgSrc] = useState(src ?? "/Venues/placeholder.jpg");

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill
      className="h-48 w-full object-cover"
      onError={() => setImgSrc("/Venues/placeholder.jpg")}
    />
  );
}

/** Commerce-style card: white surface, dark text, amber rating, maroon CTA. Matches Products and Services. */
function VenueCard({ venue }: { venue: Venue }) {
  const { name, city, category, price, rating, images } = venue;
  const imageUrl = images?.[0];

  return (
    <article
      className="flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
      aria-label={name}
    >
      <div className="relative h-40 w-full shrink-0 overflow-hidden bg-slate-100">
        <VenueCardImage src={imageUrl} alt={name} />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="line-clamp-2 text-base font-semibold leading-snug text-slate-900">
          {name}
        </h3>
        <p className="mt-1 text-sm text-slate-500">{city}</p>
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
            From ₹{price.toLocaleString("en-IN")}
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

export default function VenuesResultsClient() {
  const searchParams = useSearchParams();
  const filteredVenues = filterAndSortVenues(MOCK_VENUES, searchParams);

  if (filteredVenues.length === 0) {
    return (
      <div className="rounded-lg border border-slate-200 bg-white p-8 text-center text-slate-600 shadow-sm">
        No venues match your filters.
      </div>
    );
  }

  return (
    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {filteredVenues.map((venue) => (
        <VenueCard key={venue.id} venue={venue} />
      ))}
    </div>
  );
}
