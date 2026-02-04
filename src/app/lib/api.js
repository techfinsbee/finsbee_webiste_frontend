const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function fetchAPI(path) {
  const res = await fetch(`${STRAPI_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store", // for CMS
  });

  if (!res.ok) {
    throw new Error("Failed to fetch API");
  }

  return res.json();
}
