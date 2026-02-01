import Link from "next/link";

interface ResultsShellProps {
  title: "Venues" | "Services" | "Products";
  basePath: string;
  categories: string[];
  cities: string[];
  searchParams: {
    city?: string;
    category?: string;
  };
}

export default function ResultsShell({
  title,
  basePath,
  categories,
  cities,
  searchParams,
}: ResultsShellProps) {
  const selectedCity = searchParams.city || "";
  const selectedCategory = searchParams.category || categories[0];

  return (
    <section className="bg-black py-16">
      <div className="mx-auto max-w-6xl px-4 text-center">
        {/* Title and Subtitle */}
        <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        {selectedCity && selectedCategory && (
          <p className="mt-2 text-sm text-white/70 sm:text-base">
            Showing {title} in {selectedCity} for {selectedCategory}
          </p>
        )}

        {/* Refine Search Card */}
        <div className="mt-8 mx-auto w-full max-w-4xl rounded-lg bg-white/5 p-6 text-left ring-1 ring-white/10 backdrop-blur">
          <form method="GET" action={basePath} className="space-y-4">
            {/* City Dropdown */}
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-white">
                City
              </label>
              <select
                id="city"
                name="city"
                defaultValue={selectedCity}
                className="mt-1 w-full rounded-lg border border-white/20 bg-black px-4 py-2 text-sm text-white placeholder-white/50 focus:border-rose-700 focus:ring-rose-700"
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
            </div>

            {/* Categories */}
            <div>
              <label className="block text-sm font-medium text-white">
                Categories
              </label>
              <div className="mt-2 flex overflow-x-auto whitespace-nowrap scrollbar-hide">
                {categories.map((category) => (
                  <label key={category} className="mr-3">
                    <input
                      type="radio"
                      name="category"
                      value={category}
                      defaultChecked={category === selectedCategory}
                      className="hidden"
                    />
                    <span
                      className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium ${
                        category === selectedCategory
                          ? "bg-rose-700 text-white"
                          : "bg-white/10 text-white hover:bg-white/20"
                      }`}
                    >
                      {category}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Search Button */}
            <div className="text-center">
              <button
                type="submit"
                className="rounded-lg bg-rose-700 px-6 py-2 text-sm font-medium text-white hover:bg-rose-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        {/* Current Filters */}
        <div className="mt-6">
          <h2 className="text-lg font-medium text-white">Current Filters</h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {selectedCity && (
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-white">
                City: {selectedCity}
              </span>
            )}
            {selectedCategory && (
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-white">
                Category: {selectedCategory}
              </span>
            )}
          </div>
        </div>

        {/* Skeleton Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="h-40 rounded-lg bg-white/5 ring-1 ring-white/10"
            ></div>
          ))}
        </div>

        {/* Back to Home */}
        <div className="mt-10">
          <Link
            href="/"
            className="inline-block rounded-lg bg-rose-700 px-6 py-2 text-sm font-medium text-white hover:bg-rose-800"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}