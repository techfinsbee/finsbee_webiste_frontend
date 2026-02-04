import { API_BASE_URL } from "./config";

export async function fetchAPI(endpoint, options = {}) {
  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
  });

  if (!res.ok) {
    throw new Error(`API Error: ${endpoint}`);
  }

  return res.json();
}
