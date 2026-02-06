"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { MOCK_PRODUCTS } from "@/data/mock/products";
import { MOCK_SERVICES } from "@/data/mock/services";
import { MOCK_VENUES } from "@/data/mock/venues";
import {
  filterAndSortProducts,
  parseProductQueryParams,
} from "@/lib/products-filter";
import {
  filterAndSortServices,
  parseServiceQueryParams,
} from "@/lib/services-filter";
import {
  filterAndSortVenues,
  parseVenueQueryParams,
} from "@/lib/venues-filter";
import { SORT_OPTIONS } from "@/lib/results-sort";

/** Shared toolbar for Venues, Products and Services results. Uses URL params as single source of truth (city, categories, minPrice, maxPrice, sort). */
export type ResultsToolbarProps = {
  title: string;
  dataSource: "venues" | "products" | "services";
  /** "dark" for dark layout (Venues), "light" for commerce layout (Products, Services) */
  variant?: "light" | "dark";
};

export default function ResultsToolbar({
  title,
  dataSource,
  variant = "light",
}: ResultsToolbarProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const filtered =
    dataSource === "products"
      ? filterAndSortProducts(MOCK_PRODUCTS, searchParams)
      : dataSource === "services"
        ? filterAndSortServices(MOCK_SERVICES, searchParams)
        : filterAndSortVenues(MOCK_VENUES, searchParams);

  const parsed =
    dataSource === "products"
      ? parseProductQueryParams(searchParams)
      : dataSource === "services"
        ? parseServiceQueryParams(searchParams)
        : parseVenueQueryParams(searchParams);

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
  const isDark = variant === "dark";
  const titleClass = isDark
    ? "text-xl font-semibold text-white sm:text-2xl"
    : "text-xl font-semibold text-slate-900 sm:text-2xl";
  const countClass = isDark
    ? "font-normal text-white/80"
    : "font-normal text-slate-600";
  const labelClass = isDark ? "text-sm text-white/80" : "text-sm text-slate-600";
  /* Light-styled select when dark so dropdown options are visible in all browsers */
  const selectClass = isDark
    ? "rounded border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-900 focus:border-rose-600 focus:ring-1 focus:ring-rose-600"
    : "rounded border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-900 focus:border-rose-600 focus:ring-1 focus:ring-rose-600";

  return (
    <div className="space-y-3">
      {/* Row 1: Title + count | Sort dropdown */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h1 className={titleClass}>
          {title}{" "}
          <span className={countClass}>
            ({filtered.length} {filtered.length === 1 ? "result" : "results"})
          </span>
        </h1>
        <div className="flex items-center gap-2">
          <label htmlFor="results-sort" className={labelClass}>
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
            className={selectClass}
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
              variant={variant}
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
              variant={variant}
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
              variant={variant}
            />
          )}
          <button
            type="button"
            onClick={clearAllFilters}
            className={
              isDark
                ? "text-sm font-medium text-rose-300 hover:text-rose-200 hover:underline focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-1 focus:ring-offset-transparent"
                : "text-sm font-medium text-rose-700 hover:text-rose-800 hover:underline focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-1"
            }
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
  variant = "light",
}: {
  label: string;
  onRemove: () => void;
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";
  const chipClass = isDark
    ? "inline-flex items-center gap-1 rounded-full border border-white/30 bg-white/10 px-2.5 py-1 text-sm text-white"
    : "inline-flex items-center gap-1 rounded-full border border-rose-200 bg-rose-50 px-2.5 py-1 text-sm text-rose-800";
  return (
    <span className={chipClass}>
      {label}
      <button
        type="button"
        onClick={onRemove}
        className={
          isDark
            ? "rounded-full p-0.5 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-rose-400"
            : "rounded-full p-0.5 hover:bg-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-500"
        }
        aria-label={`Remove ${label}`}
      >
        <span aria-hidden>×</span>
      </button>
    </span>
  );
}
