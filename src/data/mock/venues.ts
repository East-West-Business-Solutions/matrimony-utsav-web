export interface Venue {
  id: number;
  name: string;
  city: string;
  category: string;
  price: number;
  rating: number;
}

export const MOCK_VENUES: Venue[] = [
  { id: 1, name: "Royal Palace Banquet", city: "Delhi", category: "Banquet Halls", price: 250000, rating: 4.9 },
  { id: 2, name: "Garden Paradise Resort", city: "Mumbai", category: "Wedding Resorts", price: 300000, rating: 4.8 },
  { id: 3, name: "Grand Heritage Hall", city: "Bangalore", category: "Convention Centers", price: 220000, rating: 4.7 },
  { id: 4, name: "Elegant Outdoor Lawn", city: "Hyderabad", category: "Outdoor Lawns", price: 180000, rating: 4.6 },
  { id: 5, name: "Luxury Hotel Venue", city: "Chennai", category: "Hotels", price: 350000, rating: 4.9 },
  { id: 6, name: "Classic Banquet Hall", city: "Kolkata", category: "Banquet Halls", price: 200000, rating: 4.5 },
  { id: 7, name: "Sunset Garden Venue", city: "Delhi", category: "Outdoor Lawns", price: 280000, rating: 4.7 },
  { id: 8, name: "Modern Convention Center", city: "Mumbai", category: "Convention Centers", price: 320000, rating: 4.8 },
  { id: 9, name: "Cozy Resort Venue", city: "Bangalore", category: "Wedding Resorts", price: 270000, rating: 4.6 },
  { id: 10, name: "Elegant City Hotel", city: "Hyderabad", category: "Hotels", price: 310000, rating: 4.9 },
];