"use client";

import { useSearchParams } from "next/navigation";
import { MOCK_VENUES } from "@/data/mock/venues";
import { filterAndSortVenues } from "@/lib/venues-filter";
import Image from "next/image";
import { useState } from "react";
import { Venue } from "@/data/mock/venues";

function VenueCardImage({ src, alt }: { src?: string; alt: string }) {
  const [imgSrc, setImgSrc] = useState(src ?? "/venues/placeholder.jpg");

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill
      className="w-full h-48 object-cover"
      onError={() => setImgSrc("/venues/placeholder.jpg")}
    />
  );
}

function VenueCard({ venue }: { venue: Venue }) {
  const { name, city, category, price, rating, images } = venue;
  const imageUrl = images?.[0];

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden flex flex-col h-full w-full">
      <div className="relative w-full h-56 overflow-hidden">
        <VenueCardImage src={imageUrl} alt={name} />
      </div>
      <div className="p-4 flex flex-col flex-1 space-y-2">
        <h3 className="text-base font-semibold leading-snug text-white line-clamp-2">{name}</h3>
        <div className="text-sm text-white/60">{city}</div>
        <div className="inline-flex rounded-full bg-blue-400/15 px-2 py-1 text-xs font-medium text-blue-200">
          {category}
        </div>
        <div className="flex items-center text-sm text-white/70">
          <span className="mr-1">⭐</span>
          {rating}
        </div>
        <div className="mt-auto pt-3">
          <span className="block text-sm text-white">From ₹{price.toLocaleString("en-IN")}</span>
          <button className="mt-2 w-full h-10 rounded-lg bg-blue-600 text-sm font-medium text-white hover:bg-blue-500">
            View details
          </button>
        </div>
      </div>
    </div>
  );
}

export default function VenuesResultsClient() {
  const searchParams = useSearchParams();
  const filteredVenues = filterAndSortVenues(MOCK_VENUES, searchParams);

  if (filteredVenues.length === 0) {
    return (
      <div className="text-center text-white/60">
        No venues match your filters.
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="grid w-full gap-6 grid-cols-[repeat(3,1fr)]">
        {filteredVenues.map((venue) => (
          <VenueCard key={venue.id} venue={venue} />
        ))}
      </div>
    </div>
  );
}