const STRAPI_URL = "https://admin.finsbee.com";

export async function getAllEmiPages() {
  const res = await fetch(
    `${STRAPI_URL}/api/emi-calculator-pages`,
    { cache: "no-store" }
  );

  const json = await res.json();
  return json.data || [];
}
