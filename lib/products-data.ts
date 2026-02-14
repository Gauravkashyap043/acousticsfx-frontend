// Product data from API. Re-exports types and async helpers for backward compatibility.

import {
  fetchProducts,
  getProductBySlug as getProductBySlugFromList,
  getSubProductData as getSubProductDataFromList,
  getAllProductSlugs as getAllProductSlugsFromList,
  getAllSubProductSlugs as getAllSubProductSlugsFromList,
  type Product,
  type SubProduct,
} from "@/lib/products-api";

export type { Product, SubProduct };

/** @deprecated Use fetchProducts() then getProductBySlug(products, slug) from products-api. */
export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  const products = await fetchProducts();
  return getProductBySlugFromList(products, slug);
}

/** @deprecated Use fetchProducts() then getSubProductData(products, ...) from products-api. */
export async function getSubProductData(
  productSlug: string,
  subProductSlug: string
): Promise<SubProduct | undefined> {
  const products = await fetchProducts();
  return getSubProductDataFromList(products, productSlug, subProductSlug);
}

export async function getSubProductBySlug(
  productSlug: string,
  subProductSlug: string
): Promise<SubProduct | undefined> {
  return getSubProductData(productSlug, subProductSlug);
}

export async function getAllProductSlugs(): Promise<string[]> {
  const products = await fetchProducts();
  return getAllProductSlugsFromList(products);
}

export async function getAllSubProductSlugs(
  productSlug: string
): Promise<{ productId: string; insideProduct: string }[]> {
  const products = await fetchProducts();
  return getAllSubProductSlugsFromList(products, productSlug);
}

// Legacy sync API: not supported (API is async). Export fetchProducts for use in async pages.
export { fetchProducts } from "@/lib/products-api";
