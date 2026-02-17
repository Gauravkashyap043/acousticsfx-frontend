import { api } from "./api/client";

export interface FooterLink {
  _id: string;
  section: "services" | "resources";
  label: string;
  href?: string;
  order?: number;
}

interface FooterLinksResponse {
  services: FooterLink[];
  resources: FooterLink[];
}

export async function fetchFooterLinks(): Promise<FooterLinksResponse> {
  return api.get<FooterLinksResponse>("/api/footer-links");
}
