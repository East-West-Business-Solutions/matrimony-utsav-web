"use client";

import { useSearchParams } from "next/navigation";
import { MOCK_PRODUCTS } from "@/data/mock/products";
import { filterAndSortProducts } from "@/lib/products-filter";

export default function ProductsResultsCountClient() {
  const searchParams = useSearchParams();
  const filtered = filterAndSortProducts(MOCK_PRODUCTS, searchParams);

  return (
    <span className="text-sm text-white/70">
      Results: {filtered.length}
    </span>
  );
}
