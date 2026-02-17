import { api } from "./api/client";

export interface TrustedPartner {
  _id: string;
  name: string;
  logo: string;
  order?: number;
}

interface TrustedPartnersResponse {
  partners: TrustedPartner[];
}

export async function fetchTrustedPartners(): Promise<TrustedPartner[]> {
  const data = await api.get<TrustedPartnersResponse>("/api/trusted-partners");
  return data.partners ?? [];
}
