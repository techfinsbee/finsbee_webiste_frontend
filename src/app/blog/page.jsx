

// import { fetchAPI } from "../lib/api";
// import BlogListClient from "./BlogListClient";

// export default async function BlogPage() {
//   const res = await fetchAPI("/api/articles");
//   const articles = res?.data || [];

//   return <BlogListClient articles={articles} />;
// }


// app/blog/page.jsx
import { fetchAPI } from "../lib/api";
import BlogListClient from "./BlogListClient";

export const revalidate = 3600;

export default async function BlogPage() {
  const res = await fetchAPI(
    "/api/articles?populate=*&sort=publishedAt:desc&pagination[limit]=50"
  );

  // FIX: No .attributes – fields are direct
  const articles = res?.data || [];

  return <BlogListClient articles={articles} />;
}