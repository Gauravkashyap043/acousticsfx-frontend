import { api } from "./api/client";

export interface LocationData {
  _id: string;
  title: string;
  highlight?: boolean;
  items: { label: string; value: string }[];
  order?: number;
}

interface LocationsResponse {
  locations: LocationData[];
}

export async function fetchLocations(): Promise<LocationData[]> {
  const data = await api.get<LocationsResponse>("/api/locations");
  return data.locations ?? [];
}
