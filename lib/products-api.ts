/**
 * Products API client – fetches categories and products from the backend.
 * Base URL: NEXT_PUBLIC_API_URL or VITE_API_URL or http://localhost:8080
 */

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
  categorySlug?: string;
}

export interface ProductCategory {
  slug: string;
  name: string;
  description?: string;
  image?: string;
  order?: number;
}

const getBaseUrl = (): string => {
  return (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_API_URL) || 'http://localhost:8080';
};

async function request<T>(path: string): Promise<T> {
  const url = path.startsWith('http') ? path : `${getBaseUrl()}${path}`;
  const res = await fetch(url);
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error((err as { error?: string }).error ?? res.statusText);
  }
  return res.json() as Promise<T>;
}

/** GET /api/products/categories */
export function fetchCategories(): Promise<{ categories: ProductCategory[] }> {
  return request<{ categories: ProductCategory[] }>('/api/products/categories');
}

/** GET /api/products/categories/:categorySlug */
export function fetchCategoryBySlug(categorySlug: string): Promise<{
  category: ProductCategory;
  products: Product[];
}> {
  return request(`/api/products/categories/${encodeURIComponent(categorySlug)}`);
}

/** GET /api/products?category=acoustic (optional) */
export function fetchProducts(categorySlug?: string): Promise<{ products: Product[] }> {
  const qs = categorySlug ? `?category=${encodeURIComponent(categorySlug)}` : '';
  return request<{ products: Product[] }>(`/api/products${qs}`);
}

/** GET /api/products/slug/:productSlug */
export function fetchProductBySlug(productSlug: string): Promise<Product> {
  return request<Product>(`/api/products/slug/${encodeURIComponent(productSlug)}`);
}

/** GET /api/products/slug/:productSlug/sub-products/:subProductSlug */
export function fetchSubProduct(
  productSlug: string,
  subProductSlug: string
): Promise<{
  product: { slug: string; title: string; categorySlug?: string };
  subProduct: SubProduct;
}> {
  return request(
    `/api/products/slug/${encodeURIComponent(productSlug)}/sub-products/${encodeURIComponent(subProductSlug)}`
  );
}
