export interface LocationData {
  locationText: String;
}

export interface Review {
  description: string;
  rating: number;
}

export interface ItineraryType {
  text: string;
  value: string;
}

export interface Itinerary {
  name: string;
  photoUrl?: string;
  location: LocationData;
  rating: number;
  reviews: Review[];
  itineraryTypes: string[];
}
