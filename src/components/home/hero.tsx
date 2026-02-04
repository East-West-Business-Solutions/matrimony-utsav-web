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
    <section className="bg-black py-16">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
          Matrimony Utsav
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-white/70 sm:text-base">
          Explore trusted wedding vendors, services, and products for your special day.
        </p>

        {/* Tabs */}
        <div className="mt-8 flex justify-center gap-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`px-4 py-2 text-sm font-medium rounded-full ${
                activeTab === tab
                  ? "bg-rose-700 text-white"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search Box */}
        <div className="mt-6 mx-auto w-full max-w-4xl rounded-lg bg-white/10 p-6 text-left">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full rounded-lg border border-white/20 bg-black px-4 py-2 text-sm text-white placeholder-white/50 focus:border-rose-700 focus:ring-rose-700"
            >
              <option value="" disabled>
                Select city
              </option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <button
              onClick={handleSearch}
              className="w-full rounded-lg bg-rose-700 px-6 py-2 text-sm font-medium text-white hover:bg-rose-800 sm:w-auto"
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
                className={`mr-3 rounded-full px-4 py-2 text-sm font-medium ${
                  selectedCategory === category
                    ? "bg-rose-700 text-white"
                    : "bg-white/10 text-white hover:bg-white/20"
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