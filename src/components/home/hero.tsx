"use client";

// NOTE: This component must not render any global navigation or header UI.
// Global navigation lives exclusively in app/layout.tsx.
// SECTION INVARIANT:
// - Do NOT render global header/nav here.
// - Only content + CTAs.
// SEARCH INVARIANT:
// - Tabs order is fixed: Venues → Services → Products
// - Category taxonomy is fixed per tab
// - Categories must render in a single horizontal line (no wrapping)
// - First category is selected by default on each tab


import { useState } from "react";
import { useRouter } from "next/navigation";

const tabs = ["Venues", "Services", "Products"];
const categoriesMap: { [key: string]: string[] } = {
  Venues: ["Banquet Halls", "Wedding Resorts", "Convention Centers", "Outdoor Lawns", "Hotels"],
  Services: ["Photography", "Makeup", "Decoration", "Catering", "Mehendi", "DJ & Music"],
  Products: ["Invitations", "Return Gifts", "Jewellery", "Accessories", "Décor Items"],
};
const cities = ["Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai", "Kolkata"];

export default function Hero() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [selectedCategory, setSelectedCategory] = useState(categoriesMap[tabs[0]][0]);
  const [city, setCity] = useState("");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setSelectedCategory(categoriesMap[tab][0]); // Auto-select the first category for the new tab
  };

  const handleSearch = () => {
    if (!city) {
      alert("Please select a city.");
      return;
    }
    const route = `/${activeTab.toLowerCase()}?city=${encodeURIComponent(city)}&category=${encodeURIComponent(
      selectedCategory
    )}`;
    router.push(route);
  };

  return (
    <section className="bg-gradient-to-b from-rose-950 to-rose-900 py-16">
      <div className="mx-auto max-w-6xl px-4 text-center text-white">
        <h1 className="text-3xl font-semibold tracking-tight text-rose-50 sm:text-5xl">
          Mohan Utsav
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-rose-100/90 sm:text-base">
          Explore trusted wedding vendors, services, and products for your special day.
        </p>

        {/* Tabs */}
        <div className="mt-8 flex justify-center gap-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition ${
                activeTab === tab
                  ? "bg-rose-100 text-rose-800"
                  : "bg-white/10 text-rose-100 hover:bg-white/20"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search Box */}
        <div className="mt-6 mx-auto w-full max-w-4xl rounded-lg bg-rose-950/30 p-6 text-left">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="city-select w-full rounded-lg border border-rose-300/60 bg-rose-50 px-4 py-2 text-sm text-slate-800 focus:border-rose-400 focus:ring-2 focus:ring-rose-400/40"
            >
              <option value="" disabled>
                Select city
              </option>
              {cities.map((cityName) => (
                <option key={cityName} value={cityName}>
                  {cityName}
                </option>
              ))}
            </select>
            <button
              onClick={handleSearch}
              className="w-full rounded-lg bg-rose-600 px-6 py-2 text-sm font-semibold text-white hover:bg-rose-500 sm:w-auto"
            >
              Search
            </button>
          </div>

          {/* Popular Categories */}
          <div className="mt-4 flex overflow-x-auto whitespace-nowrap scrollbar-hide">
            {categoriesMap[activeTab].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`mr-3 rounded-full px-4 py-2 text-sm font-medium transition ${
                  selectedCategory === category
                    ? "bg-rose-100 text-rose-800"
                    : "bg-white/10 text-rose-100 hover:bg-white/20"
                }`}
                aria-pressed={selectedCategory === category}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}