// const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "https://admin.finsbee.com";

// export async function fetchAPI(path) {
//   const res = await fetch(`${STRAPI_URL}${path}`, {
//     headers: {
//       "Content-Type": "application/json",
//     },
//     cache: "no-store", // for CMS
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch API");
//   }

//   return res.json();
// }



// lib/api.js (or wherever fetchAPI lives)
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "https://admin.finsbee.com" || "http://localhost:1337/"
// const STRAPI_URL =  "http://localhost:1337"

export async function fetchAPI(path, options = {}) {
  const res = await fetch(`${STRAPI_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options, // allow override (e.g. next: { revalidate: 3600 } or tags)
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch API: ${path}`);
  }

  return res.json();
}