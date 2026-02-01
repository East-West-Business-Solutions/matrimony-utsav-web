"use client";

import { useSearchParams } from "next/navigation";
import { MOCK_VENUES } from "@/data/mock/venues";
import { filterAndSortVenues } from "@/lib/venues-filter";

export default function VenuesResultsCountClient() {
  const searchParams = useSearchParams();
  const filteredVenues = filterAndSortVenues(MOCK_VENUES, searchParams);

  return (
    <span className="text-sm text-white/70">
      Results: {filteredVenues.length}
    </span>
  );
}