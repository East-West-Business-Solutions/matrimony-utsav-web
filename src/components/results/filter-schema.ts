export interface FilterOption {
  label: string;
  value: string;
}

export interface FilterDefinition {
  title: string;
  queryKey: string;
  type: "select" | "radio" | "checkbox" | "range";
  options?: FilterOption[]; // For "select", "radio", "checkbox"
  min?: number; // For "range"
  max?: number; // For "range"
  step?: number; // For "range"
}

export const filterSchema: Record<string, FilterDefinition[]> = {
  venues: [
    {
      title: "City",
      queryKey: "city",
      type: "select",
      options: [
        { label: "Delhi", value: "delhi" },
        { label: "Mumbai", value: "mumbai" },
        { label: "Bangalore", value: "bangalore" },
        { label: "Hyderabad", value: "hyderabad" },
        { label: "Chennai", value: "chennai" },
        { label: "Kolkata", value: "kolkata" },
      ],
    },
    {
      title: "Category",
      queryKey: "category",
      type: "radio",
      options: [
        { label: "Banquet Halls", value: "banquet-halls" },
        { label: "Wedding Resorts", value: "wedding-resorts" },
        { label: "Convention Centers", value: "convention-centers" },
        { label: "Outdoor Lawns", value: "outdoor-lawns" },
        { label: "Hotels", value: "hotels" },
      ],
    },
  ],
  services: [
    {
      title: "City",
      queryKey: "city",
      type: "select",
      options: [
        { label: "Delhi", value: "delhi" },
        { label: "Mumbai", value: "mumbai" },
        { label: "Bangalore", value: "bangalore" },
        { label: "Hyderabad", value: "hyderabad" },
        { label: "Chennai", value: "chennai" },
        { label: "Kolkata", value: "kolkata" },
      ],
    },
    {
      title: "Service Type",
      queryKey: "category",
      type: "radio",
      options: [
        { label: "Photography", value: "photography" },
        { label: "Makeup", value: "makeup" },
        { label: "Decoration", value: "decoration" },
        { label: "Catering", value: "catering" },
        { label: "Mehendi", value: "mehendi" },
        { label: "DJ & Music", value: "dj-music" },
      ],
    },
    {
      title: "Price Range",
      queryKey: "price",
      type: "range",
      min: 500,
      max: 50000,
      step: 500,
    },
    {
      title: "Rating",
      queryKey: "rating",
      type: "radio",
      options: [
        { label: "4+ Stars", value: "4" },
        { label: "3+ Stars", value: "3" },
        { label: "2+ Stars", value: "2" },
        { label: "1+ Stars", value: "1" },
      ],
    },
  ],
  products: [
    {
      title: "City",
      queryKey: "city",
      type: "select",
      options: [
        { label: "Delhi", value: "delhi" },
        { label: "Mumbai", value: "mumbai" },
        { label: "Bangalore", value: "bangalore" },
        { label: "Hyderabad", value: "hyderabad" },
        { label: "Chennai", value: "chennai" },
        { label: "Kolkata", value: "kolkata" },
      ],
    },
    {
      title: "Product Type",
      queryKey: "category",
      type: "radio",
      options: [
        { label: "Invitations", value: "invitations" },
        { label: "Return Gifts", value: "return-gifts" },
        { label: "Jewellery", value: "jewellery" },
        { label: "Accessories", value: "accessories" },
        { label: "Décor Items", value: "decor-items" },
      ],
    },
    {
      title: "Price Range",
      queryKey: "price",
      type: "range",
      min: 100,
      max: 10000,
      step: 100,
    },
    {
      title: "Rating",
      queryKey: "rating",
      type: "radio",
      options: [
        { label: "4+ Stars", value: "4" },
        { label: "3+ Stars", value: "3" },
        { label: "2+ Stars", value: "2" },
        { label: "1+ Stars", value: "1" },
      ],
    },
  ],
};