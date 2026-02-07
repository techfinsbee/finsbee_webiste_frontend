// import Image from "next/image";
// import { notFound } from "next/navigation";
// import { fetchAPI } from "../../lib/api";
// // import BlogClient from "./BlogClient";
// import Blocks from "./Blocks";
// import BlogClient from "../BlogClient";

// export default async function BlogDetail({ params }) {
//   const { slug } = await params;

//   // 🔹 Current article
//   const res = await fetchAPI(
//     `/api/articles?filters[slug][$eq]=${slug}`
//   );
//   const article = res.data[0];


//   if (!article) return notFound();

//   // 🔹 All articles (for next recommendation)
//   const allRes = await fetchAPI("/api/articles");
//   const allArticles = allRes?.data || [];

//   return (
//     <BlogClient article={article} allArticles={allArticles}>
//       <article className="max-w-3xl mx-auto px-6 py-10">
//         <h1 className="text-4xl font-bold mb-4">
//           {article.title}
//         </h1>

//         <p className="text-gray-500 mb-6">
//           {article.author.name} · {article.category.name}
//         </p>

//         <Image
//           src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${article.cover}`}
//           alt={article.title}
//           width={900}
//           height={500}
//           className="rounded-lg mb-8"
//         />

//         {/* Dynamic blocks */}
//         <Blocks blocks={article.blocks} />
//       </article>
//     </BlogClient>
//   );
// }

// /* ✅ SEO stays untouched */
// export async function generateMetadata({ params }) {
//   const res = await fetchAPI(
//     `/api/articles?filters[slug][$eq]=${params.slug}`
//   );
//   const article = res.data[0];

//   return {
//     title: article.title,
//     description: article.description,
//     openGraph: {
//       images: [
//         `${process.env.NEXT_PUBLIC_STRAPI_URL}${article.cover}`,
//       ],
//     },
//   };
// }


// app/blog/[slug]/page.jsx
import { notFound } from "next/navigation";
import Image from "next/image";
import { fetchAPI } from "../../lib/api";
import BlogClient from "../BlogClient";
import Blocks from "./Blocks";

export const revalidate = 3600;
export const dynamicParams = true;

export async function generateStaticParams() {
  try {
    const res = await fetchAPI("/api/articles?fields[0]=slug&pagination[limit]=1000");
    const articles = res?.data || [];

    // FIX: No .attributes.slug – slug is direct
    return articles.map((article) => ({
      slug: article.slug,
    }));
  } catch (err) {
    console.error("Error in generateStaticParams:", err);
    return [];
  }
}

export default async function BlogDetail({ params }) {
  const { slug } = await params;

  const res = await fetchAPI(
    `/api/articles?filters[slug][$eq]=${slug}&populate=*`
  );

  const article = res?.data?.[0];

  if (!article) {
    notFound();
  }

  // FIX: No .attributes – use article.title, article.author.name, etc. directly

  // All articles for next recommendation
  const allRes = await fetchAPI(
    "/api/articles?fields[0]=slug&fields[1]=title&fields[2]=description&pagination[limit]=1000"
  );
  const allArticles = allRes?.data || [];

  return (
    <BlogClient article={article} allArticles={allArticles}>
      <article className="max-w-3xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
        <p className="text-gray-500 mb-6">
          {article.author?.name || "Author"} · {article.category?.name || "Category"}
        </p>

        {article.cover && (
          <Image
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${article.cover}`}
            alt={article.title}
            width={900}
            height={500}
            className="rounded-lg mb-8"
            priority
          />
        )}

        <Blocks blocks={article.blocks || []} />
      </article>
    </BlogClient>
  );
}