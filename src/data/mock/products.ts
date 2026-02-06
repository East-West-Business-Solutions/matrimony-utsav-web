export interface Product {
  id: number;
  name: string;
  brand: string;
  city: string;
  category: string;
  price: number;
  rating: number;
  images?: string[];
}

export const MOCK_PRODUCTS: Product[] = [
  { id: 1, name: "Elegant Jewellery Collection", brand: "Royal Gems", city: "Delhi", category: "Jewellery", price: 250000, rating: 4.9 },
  { id: 2, name: "Designer Wedding Invitations", brand: "Artisan Cards", city: "Mumbai", category: "Invitations", price: 250, rating: 4.8 },
  { id: 3, name: "Bridal Couture Collection", brand: "Bridal Bliss", city: "Bangalore", category: "Accessories", price: 75000, rating: 4.8 },
  { id: 4, name: "Premium Return Gifts Set", brand: "Gift Craft", city: "Hyderabad", category: "Return Gifts", price: 500, rating: 4.6 },
  { id: 5, name: "Décor Items – Mandap", brand: "Wedding Décor Co", city: "Chennai", category: "Décor Items", price: 45000, rating: 4.7 },
  { id: 6, name: "Kundan Bridal Set", brand: "Heritage Jewellers", city: "Kolkata", category: "Jewellery", price: 180000, rating: 4.9 },
  { id: 7, name: "Foil-Print Invitation Cards", brand: "Card Studio", city: "Delhi", category: "Invitations", price: 35, rating: 4.5 },
  { id: 8, name: "Bridal Saree & Dupatta", brand: "Silk House", city: "Mumbai", category: "Accessories", price: 55000, rating: 4.7 },
  { id: 9, name: "Personalised Return Gifts", brand: "Memorable Gifts", city: "Bangalore", category: "Return Gifts", price: 350, rating: 4.8 },
  { id: 10, name: "Floral & Lighting Décor", brand: "Bloom Décor", city: "Hyderabad", category: "Décor Items", price: 32000, rating: 4.6 },
  { id: 11, name: "Polki Necklace Set", brand: "Classic Jewels", city: "Chennai", category: "Jewellery", price: 320000, rating: 4.9 },
  { id: 12, name: "E-Invites with Video", brand: "Digital Invites", city: "Kolkata", category: "Invitations", price: 1500, rating: 4.7 },
];
