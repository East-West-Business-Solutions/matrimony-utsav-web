"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { MOCK_PRODUCTS } from "@/data/mock/products";
import { MOCK_SERVICES } from "@/data/mock/services";
import {
  filterAndSortProducts,
  parseProductQueryParams,
} from "@/lib/products-filter";
import {
  filterAndSortServices,
  parseServiceQueryParams,
} from "@/lib/services-filter";

const SORT_OPTIONS = [
  { label: "Recommended", value: "recommended" },
  { label: "Rating", value: "rating" },
  { label: "Price: Low to High", value: "price_asc" },
  { label: "Price: High to Low", value: "price_desc" },
] as const;

/** Shared toolbar for Products and Services results. Uses URL params as single source of truth (city, categories, minPrice, maxPrice, sort). */
export type ResultsToolbarProps = {
  title: string;
  dataSource: "products" | "services";
};

export default function ResultsToolbar({
  title,
  dataSource,
}: ResultsToolbarProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const filtered =
    dataSource === "products"
      ? filterAndSortProducts(MOCK_PRODUCTS, searchParams)
      : filterAndSortServices(MOCK_SERVICES, searchParams);

  const parsed =
    dataSource === "products"
      ? parseProductQueryParams(searchParams)
      : parseServiceQueryParams(searchParams);

  const { city, categories, minPrice, maxPrice, sort } = parsed;
  const categoryList = categories ?? [];

  const updateQuery = (params: Record<string, string | null>) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    Object.keys(params).forEach((key) => {
      const val = params[key];
      if (val === null || val === "") {
        current.delete(key);
      } else {
        current.set(key, val);
      }
    });
    router.replace(`?${current.toString()}`);
  };

  const clearAllFilters = () => {
    updateQuery({
      city: null,
      categories: null,
      minPrice: null,
      maxPrice: null,
      sort: null,
    });
  };

  const hasActiveFilters =
    city !== "" ||
    categoryList.length > 0 ||
    minPrice != null ||
    maxPrice != null;

  const currentSort = sort ?? "recommended";

  return (
    <div className="space-y-3">
      {/* Row 1: Title + count | Sort dropdown */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-xl font-semibold text-slate-900 sm:text-2xl">
          {title}{" "}
          <span className="font-normal text-slate-600">
            ({filtered.length} {filtered.length === 1 ? "result" : "results"})
          </span>
        </h1>
        <div className="flex items-center gap-2">
          <label
            htmlFor="results-sort"
            className="text-sm text-slate-600"
          >
            Sort by
          </label>
          <select
            id="results-sort"
            value={currentSort}
            onChange={(e) =>
              updateQuery({
                sort: e.target.value === "recommended" ? null : e.target.value,
              })
            }
            className="rounded border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-900 focus:border-rose-600 focus:ring-1 focus:ring-rose-600"
            aria-label="Sort results"
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 2: Active filter chips + Clear all */}
      {hasActiveFilters && (
        <div className="flex flex-wrap items-center gap-2">
          {city !== "" && (
            <FilterChip
              label={`City: ${city}`}
              onRemove={() => updateQuery({ city: null })}
            />
          )}
          {categoryList.map((cat) => (
            <FilterChip
              key={cat}
              label={cat}
              onRemove={() => {
                const rest = categoryList.filter((c) => c !== cat);
                updateQuery({
                  categories: rest.length > 0 ? rest.join(",") : null,
                });
              }}
            />
          ))}
          {(minPrice != null || maxPrice != null) && (
            <FilterChip
              label={
                minPrice != null && maxPrice != null
                  ? `₹${minPrice.toLocaleString("en-IN")} – ₹${maxPrice.toLocaleString("en-IN")}`
                  : minPrice != null
                    ? `From ₹${minPrice.toLocaleString("en-IN")}`
                    : `Up to ₹${maxPrice!.toLocaleString("en-IN")}`
              }
              onRemove={() =>
                updateQuery({ minPrice: null, maxPrice: null })
              }
            />
          )}
          <button
            type="button"
            onClick={clearAllFilters}
            className="text-sm font-medium text-rose-700 hover:text-rose-800 hover:underline focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-1"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}

function FilterChip({
  label,
  onRemove,
}: {
  label: string;
  onRemove: () => void;
}) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-rose-200 bg-rose-50 px-2.5 py-1 text-sm text-rose-800">
      {label}
      <button
        type="button"
        onClick={onRemove}
        className="rounded-full p-0.5 hover:bg-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-500"
        aria-label={`Remove ${label}`}
      >
        <span aria-hidden>×</span>
      </button>
    </span>
  );
}
