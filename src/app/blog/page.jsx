

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
import Link from "next/link";
import Image from "next/image";
import { fetchAPI } from "../lib/api";

export const dynamic = "force-dynamic";

export default async function BlogListPage() {
  const res = await fetchAPI(
    "/api/articles?populate=cover,author,category&pagination[limit]=20"
  );

  const articles = res?.data || [];

  return (
    <section className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>

      <div className="grid gap-8">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="border rounded-lg p-6 hover:shadow-md transition"
          >
            {article.cover && (
              <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${article.cover}`}
                alt={article.title}
                width={600}
                height={300}
                className="rounded mb-4"
              />
            )}

            <h2 className="text-2xl font-semibold mb-2">
              {article.title}
            </h2>

            <p className="text-gray-600">
              {article.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
