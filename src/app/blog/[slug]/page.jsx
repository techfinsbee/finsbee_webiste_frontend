import Image from "next/image";
import { notFound } from "next/navigation";
import { fetchAPI } from "../../lib/api";
// import BlogClient from "./BlogClient";
import Blocks from "./Blocks";
import BlogClient from "../BlogClient";

export default async function BlogDetail({ params }) {
  const { slug } = await params;

  // 🔹 Current article
  const res = await fetchAPI(
    `/api/articles?filters[slug][$eq]=${slug}`
  );
  const article = res.data[0];


  if (!article) return notFound();

  // 🔹 All articles (for next recommendation)
  const allRes = await fetchAPI("/api/articles");
  const allArticles = allRes?.data || [];

  return (
    <BlogClient article={article} allArticles={allArticles}>
      <article className="max-w-3xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-4">
          {article.title}
        </h1>

        <p className="text-gray-500 mb-6">
          {article.author.name} · {article.category.name}
        </p>

        <Image
          src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${article.cover}`}
          alt={article.title}
          width={900}
          height={500}
          className="rounded-lg mb-8"
        />

        {/* Dynamic blocks */}
        <Blocks blocks={article.blocks} />
      </article>
    </BlogClient>
  );
}

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
