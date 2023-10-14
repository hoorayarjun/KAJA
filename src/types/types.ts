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
  id: string;
  name: string;
  photoUrl?: string;
  summary?: string;
  location: LocationData;
  rating: number;
  reviews: Review[];
  itineraryTypes: string[];
}

export interface Destination {
  id: string;
  name: string;
  photoUrl?: string;
  location: LocationData;
  rating: number;
  reviews: Review[];
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  profilePictureUrl?: string;
}
