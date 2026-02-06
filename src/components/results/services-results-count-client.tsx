"use client";

import { useSearchParams } from "next/navigation";
import { MOCK_SERVICES } from "@/data/mock/services";
import { filterAndSortServices } from "@/lib/services-filter";

export default function ServicesResultsCountClient() {
  const searchParams = useSearchParams();
  const filtered = filterAndSortServices(MOCK_SERVICES, searchParams);

  return (
    <span className="text-sm text-white/70">
      Results: {filtered.length}
    </span>
  );
}
