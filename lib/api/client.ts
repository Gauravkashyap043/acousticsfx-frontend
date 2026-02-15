/**
 * API client configuration
 * This is a base setup for API calls using fetch
 * You can extend this with React Query hooks in the api folder
 */

const FALLBACK_API_URL = "http://localhost:8080";

function getApiBaseUrl(): string {
  if (typeof window !== "undefined") {
    const w = window as unknown as { __NEXT_PUBLIC_API_URL__?: string };
    if (w.__NEXT_PUBLIC_API_URL__ && w.__NEXT_PUBLIC_API_URL__.trim()) {
      return w.__NEXT_PUBLIC_API_URL__.trim();
    }
  }
  const envUrl = typeof process !== "undefined" && process.env?.NEXT_PUBLIC_API_URL;
  return envUrl && envUrl.trim() ? envUrl.trim() : FALLBACK_API_URL;
}

export interface ApiError {
  message: string;
  status?: number;
}

export class ApiClientError extends Error {
  status?: number;

  constructor(message: string, status?: number) {
    super(message);
    this.name = "ApiClientError";
    this.status = status;
  }
}

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    let errorData;
    try {
      errorData = await response.json();
    } catch {
      // If response is not JSON, use status text
      errorData = { message: response.statusText || 'Request failed' };
    }
    throw new ApiClientError(
      errorData.message || errorData.error || response.statusText || 'Request failed',
      response.status
    );
  }

  // Handle empty responses
  const contentType = response.headers.get("content-type");
  if (!contentType || !contentType.includes("application/json")) {
    return {} as T;
  }

  try {
    return await response.json();
  } catch (error) {
    // If JSON parsing fails, return empty object
    console.warn('Failed to parse JSON response:', error);
    return {} as T;
  }
}

const FETCH_TIMEOUT_MS = 15000;

export async function apiClient<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const base = getApiBaseUrl();
  const url = endpoint.startsWith("http") ? endpoint : `${base}${endpoint}`;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

  const config: RequestInit = {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
    signal: controller.signal,
  };

  try {
    const response = await fetch(url, config);
    clearTimeout(timeoutId);
    return handleResponse<T>(response);
  } catch (error) {
    clearTimeout(timeoutId);
    if (error instanceof Error && error.name === "AbortError") {
      throw new ApiClientError("Request timed out. Please try again.", 408);
    }
    if (error instanceof ApiClientError) {
      throw error;
    }
    if (error instanceof TypeError && error.message === "Failed to fetch") {
      throw new ApiClientError(
        "Network error: Unable to reach the server. Please check your connection or try again later.",
        0
      );
    }
    throw new ApiClientError(
      error instanceof Error ? error.message : "An unknown error occurred"
    );
  }
}

// Convenience methods
export const api = {
  get: <T>(endpoint: string, options?: RequestInit) =>
    apiClient<T>(endpoint, { ...options, method: "GET" }),
  post: <T>(endpoint: string, data?: unknown, options?: RequestInit) =>
    apiClient<T>(endpoint, {
      ...options,
      method: "POST",
      body: data ? JSON.stringify(data) : undefined,
    }),
  put: <T>(endpoint: string, data?: unknown, options?: RequestInit) =>
    apiClient<T>(endpoint, {
      ...options,
      method: "PUT",
      body: data ? JSON.stringify(data) : undefined,
    }),
  patch: <T>(endpoint: string, data?: unknown, options?: RequestInit) =>
    apiClient<T>(endpoint, {
      ...options,
      method: "PATCH",
      body: data ? JSON.stringify(data) : undefined,
    }),
  delete: <T>(endpoint: string, options?: RequestInit) =>
    apiClient<T>(endpoint, { ...options, method: "DELETE" }),
};
