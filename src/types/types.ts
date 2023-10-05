export interface LocationData {
  locationText: String;
}

export interface Review {
  description: string;
  rating: number;
}

export interface ItineraryTag {
  text: string;
  value: string;
}

export interface Itinerary {
  id: number;
  name: string;
  photoUrl?: string;
  summary?: string;
  location: LocationData;
  rating: number;
  reviews: Review[];
  itineraryTypes: string[];
}

export interface Destination {
  id: number;
  name: string;
  photoUrl?: string;
  location: LocationData;
  rating: number;
  reviews: Review[];
}
