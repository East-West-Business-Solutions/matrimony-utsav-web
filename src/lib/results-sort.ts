/**
 * Single source of truth for sort options across all results pages (Venues, Products, Services).
 * Query param key: "sort". Values must not be changed (guardrails).
 */

export type ResultsSortValue =
  | "recommended"
  | "rating"
  | "price_asc"
  | "price_desc";

export const SORT_OPTIONS: { label: string; value: ResultsSortValue }[] = [
  { label: "Recommended", value: "recommended" },
  { label: "Rating", value: "rating" },
  { label: "Price: Low to High", value: "price_asc" },
  { label: "Price: High to Low", value: "price_desc" },
];
