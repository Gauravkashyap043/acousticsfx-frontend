/**
 * Products API: fetch from GET /api/products and provide same helper API as legacy products-data.
 */

import { api } from "@/lib/api/client";

export interface SubProduct {
  slug: string;
  title: string;
  description: string;
  image: string;
}

export interface Product {
  slug: string;
  title: string;
  description: string;
  image: string;
  heroImage?: string;
  subProducts: SubProduct[];
}

interface ProductsResponse {
  products: Product[];
}

/** Fetch all products from API (server or client). */
export async function fetchProducts(): Promise<Product[]> {
  try {
    const res = await api.get<ProductsResponse>("/api/products");
    return res?.products ?? [];
  } catch {
    return [];
  }
}

export function getProductBySlug(
  products: Product[],
  slug: string
): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getSubProductData(
  products: Product[],
  productSlug: string,
  subProductSlug: string
): SubProduct | undefined {
  const product = getProductBySlug(products, productSlug);
  if (!product) return undefined;
  const sub = product.subProducts.find((s) => s.slug === subProductSlug);
  if (sub) return sub;
  const defaultSubs: SubProduct[] = [
    { slug: "linearlux", title: "Linerlux", description: "", image: "" },
    { slug: "acoperf", title: "Acoperf", description: "", image: "" },
    { slug: "microatlas", title: "Microatlas", description: "", image: "" },
    { slug: "acoslots", title: "Acoslots", description: "", image: "" },
    { slug: "perfomax", title: "Perfomax", description: "", image: "" },
  ];
  return defaultSubs.find((s) => s.slug === subProductSlug);
}

export function getAllProductSlugs(products: Product[]): string[] {
  return products.map((p) => p.slug);
}

export function getAllSubProductSlugs(
  products: Product[],
  productSlug: string
): { productId: string; insideProduct: string }[] {
  const product = getProductBySlug(products, productSlug);
  if (!product) return [];
  return product.subProducts.map((s) => ({
    productId: productSlug,
    insideProduct: s.slug,
  }));
}
