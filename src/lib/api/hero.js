import { fetchAPI } from "./fetcher";
import { API_ENDPOINTS } from "./endpoints";

export async function getHeroSection() {
  return fetchAPI(API_ENDPOINTS.HERO_SECTION, {
    next: { revalidate: 60 }, // optional ISR
  });
}
