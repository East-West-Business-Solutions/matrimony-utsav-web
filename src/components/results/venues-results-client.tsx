"use client";

import { useSearchParams } from "next/navigation";
import { MOCK_VENUES } from "@/data/mock/venues";
import { filterAndSortVenues } from "@/lib/venues-filter";

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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredVenues.map((venue) => (
        <div
          key={venue.id}
          className="rounded-xl border border-white/10 bg-white/5 p-4"
        >
          <h3 className="text-base font-semibold text-white">{venue.name}</h3>

          <div className="mt-2 space-y-1 text-sm text-white/70">
            <div>
              <span className="text-white/50">City:</span> {venue.city}
            </div>
            <div>
              <span className="text-white/50">Category:</span> {venue.category}
            </div>
            <div>
              <span className="text-white/50">Rating:</span> {venue.rating}
            </div>
            <div>
              <span className="text-white/50">Price:</span>{" "}
              ₹ {venue.price.toLocaleString("en-IN")}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}