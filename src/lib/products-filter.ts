export type ProductSort = "recommended" | "rating" | "price_asc" | "price_desc";

export type ProductFilterShape = {
  city: string;
  category: string;
  price: number;
  rating: number;
};

export function parseProductQueryParams(searchParams: URLSearchParams) {
  const city = (searchParams.get("city") ?? "").trim();

  const categoriesParam = (searchParams.get("categories") ?? "").trim();
  const categories = categoriesParam
    ? categoriesParam
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean)
    : [];

  const minPriceRaw = (searchParams.get("minPrice") ?? "").trim();
  const maxPriceRaw = (searchParams.get("maxPrice") ?? "").trim();

  const minPrice =
    minPriceRaw !== "" && !Number.isNaN(Number(minPriceRaw))
      ? Math.max(0, Number(minPriceRaw))
      : null;

  const maxPrice =
    maxPriceRaw !== "" && !Number.isNaN(Number(maxPriceRaw))
      ? Math.max(0, Number(maxPriceRaw))
      : null;

  const sortRaw = (searchParams.get("sort") ?? "recommended").trim() as ProductSort;
  const sort: ProductSort =
    sortRaw === "rating" || sortRaw === "price_asc" || sortRaw === "price_desc"
      ? sortRaw
      : "recommended";

  return { city, categories, minPrice, maxPrice, sort };
}

export function filterAndSortProducts<T extends ProductFilterShape>(
  items: T[],
  searchParams: URLSearchParams
) {
  const { city, categories, minPrice, maxPrice, sort } =
    parseProductQueryParams(searchParams);

  let filtered = items.filter((v) => {
    if (city && v.city !== city) return false;
    if (categories.length > 0 && !categories.includes(v.category)) return false;
    if (minPrice != null && v.price < minPrice) return false;
    if (maxPrice != null && v.price > maxPrice) return false;
    return true;
  });

  if (sort === "rating") {
    filtered = [...filtered].sort((a, b) => b.rating - a.rating);
  } else if (sort === "price_asc") {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sort === "price_desc") {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  }

  return filtered;
}
