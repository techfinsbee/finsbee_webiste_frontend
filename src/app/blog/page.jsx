

// import { fetchAPI } from "../lib/api";
// import BlogListClient from "./BlogListClient";

// export default async function BlogPage() {
//   const res = await fetchAPI("/api/articles");
//   const articles = res?.data || [];

//   return <BlogListClient articles={articles} />;
// }


// // app/blog/page.jsx
// import { fetchAPI } from "../lib/api";
// import BlogListClient from "./BlogListClient";

// export const revalidate = 3600;

// export default async function BlogPage() {
//   const res = await fetchAPI(
//     "/api/articles?populate=*&sort=publishedAt:desc&pagination[limit]=50"
//   );

//   // FIX: No .attributes – fields are direct
//   const articles = res?.data || [];

//   return <BlogListClient articles={articles} />;
// }

// app/blog/page.jsx
import { fetchAPI } from "../lib/api";
import BlogListClient from "./BlogListClient";

// Remove revalidate → force fresh fetch every visit
export const dynamic = 'force-dynamic';  // ← This is the key fix for instant new posts in list

export default async function BlogPage() {
  const res = await fetchAPI(
    "/api/articles?populate=*&sort=publishedAt:desc&pagination[limit]=50"
  );

  const articles = res?.data || [];

  // Optional: log for debugging in production (remove later)
  // console.log("Fetched articles count:", articles.length);

  return <BlogListClient articles={articles} />;
}