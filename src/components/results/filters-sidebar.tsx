"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export type FiltersSidebarProps = {
  cities?: string[];
  categories?: string[];
};

export function FiltersSidebar({ cities = [], categories = [] }: FiltersSidebarProps) {
  console.log("Debug: cities prop in FiltersSidebar:", cities); // Temporary debug log

  const searchParams = useSearchParams();
  const router = useRouter();

  console.log("Debug: searchParams.get('city'):", searchParams.get("city")); // Debug log for city filter

  const [selectedCity, setSelectedCity] = useState(searchParams.get("city") || "");
  const [localMinPrice, setLocalMinPrice] = useState(searchParams.get("minPrice") || "");
  const [localMaxPrice, setLocalMaxPrice] = useState(searchParams.get("maxPrice") || "");
  const [validationMessage, setValidationMessage] = useState("");

  useEffect(() => {
    setLocalMinPrice(searchParams.get("minPrice") || "");
    setLocalMaxPrice(searchParams.get("maxPrice") || "");
  }, [searchParams]);

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
    setSelectedCity(""); // Reset selected city to "All cities"
    setLocalMinPrice(""); // Reset minPrice
    setLocalMaxPrice(""); // Reset maxPrice
  };

  const handleMinPriceChange = (value: string) => {
    const sanitizedValue = value === "" ? "" : Math.max(0, parseFloat(value) || 0).toString();
    setLocalMinPrice(sanitizedValue);
    if (localMaxPrice && parseFloat(sanitizedValue) > parseFloat(localMaxPrice)) {
      setValidationMessage("Min price cannot exceed max price.");
    } else {
      setValidationMessage("");
    }
  };

  const handleMaxPriceChange = (value: string) => {
    const sanitizedValue = value === "" ? "" : Math.max(0, parseFloat(value) || 0).toString();
    setLocalMaxPrice(sanitizedValue);
    if (localMinPrice && parseFloat(sanitizedValue) < parseFloat(localMinPrice)) {
      setValidationMessage("Max price cannot be less than min price.");
    } else {
      setValidationMessage("");
    }
  };

  const applyPriceFilter = () => {
    if (validationMessage) return; // Prevent Apply if validation fails
    const updatedParams: Record<string, string | null> = {
      minPrice: localMinPrice || null,
      maxPrice: localMaxPrice || null,
    };
    updateQuery(updatedParams);
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
            const selectedCity = e.target.value;
            setSelectedCity(selectedCity);
            updateQuery({ city: selectedCity || null });
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
      <div>
        <h3 className="text-sm font-semibold">Price</h3>
        <div className="flex items-center space-x-2">
          <input
            type="number"
            placeholder="Min"
            value={localMinPrice}
            onChange={(e) => handleMinPriceChange(e.target.value)}
            className="w-full p-1 text-sm border rounded"
            aria-label="Minimum price"
          />
          <input
            type="number"
            placeholder="Max"
            value={localMaxPrice}
            onChange={(e) => handleMaxPriceChange(e.target.value)}
            className="w-full p-1 text-sm border rounded"
            aria-label="Maximum price"
          />
        </div>
        {validationMessage && (
          <p className="text-xs text-red-500 mt-1">{validationMessage}</p>
        )}
        <button
          onClick={applyPriceFilter}
          className={`mt-2 w-full text-sm text-white bg-blue-500 rounded p-1 hover:bg-blue-600 ${validationMessage ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={!!validationMessage}
        >
          Apply
        </button>
      </div>

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
