"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useRouter } from "next/navigation";

export type FiltersSidebarProps = {
  cities?: string[];
  categories?: string[];
};

export function FiltersSidebar({ cities = [], categories = [] }: FiltersSidebarProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialMin = searchParams.get("minPrice") ?? "";
  const initialMax = searchParams.get("maxPrice") ?? "";
  const priceKey = `${initialMin}|${initialMax}`;

  const selectedCity = searchParams.get("city") ?? "";

  const updateQuery = (params: Record<string, string | null>) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    Object.keys(params).forEach((key) => {
      if (params[key] === null || params[key] === "") {
        current.delete(key);
      } else {
        current.set(key, params[key]!);
      }
    });
    router.replace(`?${current.toString()}`);
  };

  const clearAll = () => {
    updateQuery({ city: null, categories: null, minPrice: null, maxPrice: null, sort: null });
  };

  return (
    <div className="sticky top-20 h-[calc(100vh-6rem)] overflow-auto">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-black flex items-center justify-between p-2 border-b border-white/10">
        <h2 className="text-sm font-semibold">Filters</h2>
        <button
          onClick={clearAll}
          className="text-sm text-blue-500 hover:underline"
        >
          Clear all
        </button>
      </div>

      {/* City Section */}
      <div>
        <h3 className="text-sm font-semibold">City</h3>
        <select
          className="bg-black text-white border border-white/20 rounded px-2 py-2 w-full text-sm"
          value={selectedCity}
          onChange={(e) => {
            const newCity = e.target.value;
            updateQuery({ city: newCity || null });
          }}
          aria-label="City filter"
        >
          <option value="">All cities</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      {/* Category Section */}
      <div>
        <h3 className="text-sm font-semibold">Category</h3>
        <div className="space-y-1">
          {categories.map((category) => (
            <div key={category} className="flex items-center">
              <input
                type="checkbox"
                value={category}
                checked={(searchParams.get("categories") || "").split(",").includes(category)}
                onChange={(e) => {
                  const currentCategories = (searchParams.get("categories") || "").split(",");
                  if (e.target.checked) {
                    currentCategories.push(category);
                  } else {
                    const index = currentCategories.indexOf(category);
                    if (index > -1) currentCategories.splice(index, 1);
                  }
                  updateQuery({ categories: currentCategories.join(",") });
                }}
                aria-label={`Toggle category ${category}`}
              />
              <label className="ml-2 text-sm">{category}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Section */}
      <PriceRangeFilter
        key={priceKey}
        initialMin={initialMin}
        initialMax={initialMax}
        onApply={(min, max) => {
          updateQuery({
            minPrice: min || null,
            maxPrice: max || null,
          });
        }}
      />

      {/* Sort Section */}
      <div>
        <h3 className="text-sm font-semibold">Sort</h3>
        <div className="space-y-1">
          { [
            { label: "Recommended", value: "recommended" },
            { label: "Rating", value: "rating" },
            { label: "Price: Low to High", value: "price_asc" },
            { label: "Price: High to Low", value: "price_desc" },
          ].map((sortOption) => (
            <div key={sortOption.value} className="flex items-center">
              <input
                type="radio"
                name="sort"
                value={sortOption.value}
                checked={searchParams.get("sort") === sortOption.value}
                onChange={() => updateQuery({ sort: sortOption.value })}
                aria-label={`Sort by ${sortOption.label}`}
              />
              <label className="ml-2 text-sm">{sortOption.label}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PriceRangeFilter({
  initialMin,
  initialMax,
  onApply,
}: {
  initialMin: string;
  initialMax: string;
  onApply: (min: string, max: string) => void;
}) {
  const [minPrice, setMinPrice] = useState(initialMin);
  const [maxPrice, setMaxPrice] = useState(initialMax);
  const [validationMessage, setValidationMessage] = useState("");

  const handleMinPriceChange = (value: string) => {
    const sanitizedValue = value === "" ? "" : Math.max(0, parseFloat(value) || 0).toString();
    setMinPrice(sanitizedValue);
    if (maxPrice && parseFloat(sanitizedValue) > parseFloat(maxPrice)) {
      setValidationMessage("Min price cannot exceed max price.");
    } else {
      setValidationMessage("");
    }
  };

  const handleMaxPriceChange = (value: string) => {
    const sanitizedValue = value === "" ? "" : Math.max(0, parseFloat(value) || 0).toString();
    setMaxPrice(sanitizedValue);
    if (minPrice && parseFloat(sanitizedValue) < parseFloat(minPrice)) {
      setValidationMessage("Max price cannot be less than min price.");
    } else {
      setValidationMessage("");
    }
  };

  const handleApply = () => {
    if (!validationMessage) {
      onApply(minPrice, maxPrice);
    }
  };

  return (
    <div>
      <h3 className="text-sm font-semibold">Price</h3>
      <div className="flex items-center space-x-2">
        <input
          type="number"
          placeholder="Min"
          value={minPrice}
          onChange={(e) => handleMinPriceChange(e.target.value)}
          className="w-full p-1 text-sm border rounded"
          aria-label="Minimum price"
        />
        <input
          type="number"
          placeholder="Max"
          value={maxPrice}
          onChange={(e) => handleMaxPriceChange(e.target.value)}
          className="w-full p-1 text-sm border rounded"
          aria-label="Maximum price"
        />
      </div>
      {validationMessage && (
        <p className="text-xs text-red-500 mt-1">{validationMessage}</p>
      )}
      <button
        onClick={handleApply}
        className={`mt-2 w-full text-sm text-white bg-blue-500 rounded p-1 hover:bg-blue-600 ${validationMessage ? "opacity-50 cursor-not-allowed" : ""}`}
        disabled={!!validationMessage}
      >
        Apply
      </button>
    </div>
  );
}
