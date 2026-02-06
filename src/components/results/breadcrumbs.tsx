"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export type BreadcrumbsProps = {
  /** Section label (e.g. Venues, Products, Services) */
  sectionLabel: string;
  /** Section URL (e.g. /venues, /products, /services) */
  sectionHref: string;
  /** When true, append first category from URL as current segment */
  useCategoryFromUrl?: boolean;
  /** "dark" for dark layout (Venues), "light" for commerce layout (Products, Services) */
  variant?: "light" | "dark";
};

/**
 * Breadcrumbs for results pages. Shows Home > Section, optionally Home > Section > Category when category filter is applied.
 */
export default function Breadcrumbs({
  sectionLabel,
  sectionHref,
  useCategoryFromUrl = true,
  variant = "light",
}: BreadcrumbsProps) {
  const searchParams = useSearchParams();
  const categoriesParam = (searchParams.get("categories") ?? "").trim();
  const firstCategory = categoriesParam
    ? categoriesParam.split(",").map((s) => s.trim()).filter(Boolean)[0]
    : null;

  const isDark = variant === "dark";
  const linkClass = isDark
    ? "text-white/80 hover:text-white"
    : "text-slate-600 hover:text-slate-900";
  const currentClass = isDark ? "text-white" : "text-slate-900";

  const items: { label: string; href: string | null }[] = [
    { label: "Home", href: "/" },
    { label: sectionLabel, href: sectionHref },
  ];
  if (useCategoryFromUrl && firstCategory) {
    items.push({ label: firstCategory, href: null });
  }

  return (
    <nav aria-label="Breadcrumb" className="mb-3">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-center gap-1.5"
          >
            {i > 0 && (
              <span
                className={isDark ? "text-white/50" : "text-slate-400"}
                aria-hidden
              >
                /
              </span>
            )}
            {item.href !== null ? (
              <Link
                href={item.href}
                className={linkClass}
              >
                {item.label}
              </Link>
            ) : (
              <span className={currentClass} aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
