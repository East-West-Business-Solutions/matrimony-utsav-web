export interface Service {
  id: number;
  name: string;
  vendor: string;
  city: string;
  category: string;
  price: number;
  rating: number;
  images?: string[];
}

export const MOCK_SERVICES: Service[] = [
  { id: 1, name: "Bridal Photography Package", vendor: "Frame Your Day", city: "Delhi", category: "Photography", price: 75000, rating: 4.9 },
  { id: 2, name: "Bridal Makeup & Styling", vendor: "Glam Studio", city: "Mumbai", category: "Makeup", price: 25000, rating: 4.8 },
  { id: 3, name: "Floral & Theme Decoration", vendor: "Bloom Events", city: "Bangalore", category: "Decoration", price: 120000, rating: 4.7 },
  { id: 4, name: "Traditional Catering Service", vendor: "Saffron Kitchen", city: "Hyderabad", category: "Catering", price: 450, rating: 4.6 },
  { id: 5, name: "Mehendi Artist – Premium", vendor: "Henna Art Co", city: "Chennai", category: "Mehendi", price: 15000, rating: 4.9 },
  { id: 6, name: "Wedding DJ & Music", vendor: "Sound Waves", city: "Kolkata", category: "DJ & Music", price: 35000, rating: 4.5 },
  { id: 7, name: "Candid Wedding Films", vendor: "Reel Stories", city: "Delhi", category: "Photography", price: 95000, rating: 4.8 },
  { id: 8, name: "Bridal Makeup Trial", vendor: "Bridal Glow", city: "Mumbai", category: "Makeup", price: 8000, rating: 4.7 },
  { id: 9, name: "Mandap & Stage Setup", vendor: "Grand Décor", city: "Bangalore", category: "Decoration", price: 180000, rating: 4.6 },
  { id: 10, name: "North Indian Buffet", vendor: "Dawat Caterers", city: "Hyderabad", category: "Catering", price: 550, rating: 4.8 },
  { id: 11, name: "Bridal Mehendi Design", vendor: "Mehendi Magic", city: "Chennai", category: "Mehendi", price: 12000, rating: 4.7 },
  { id: 12, name: "Live Band & DJ Combo", vendor: "Party Beats", city: "Kolkata", category: "DJ & Music", price: 42000, rating: 4.6 },
];
