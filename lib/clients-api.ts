import { api } from "./api/client";

export interface ClientLogo {
  _id: string;
  name: string;
  logo: string;
  order?: number;
}

interface ClientsResponse {
  clients: ClientLogo[];
}

export async function fetchClients(): Promise<ClientLogo[]> {
  const data = await api.get<ClientsResponse>("/api/clients");
  return data.clients ?? [];
}
