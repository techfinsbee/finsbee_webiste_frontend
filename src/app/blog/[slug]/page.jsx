

// // // app/blog/[slug]/page.jsx
// import { notFound } from "next/navigation";
// import Image from "next/image";
// import { fetchAPI } from "../../lib/api";
// import BlogClient from "../BlogClient";
// import Blocks from "./Blocks";
// import BlockContent from "./BlockContent";

// export const dynamic = "force-dynamic";

// export default async function BlogDetail({ params }) {
//   const { slug } = await params; // ✅ FIX (important)

//   const res = await fetchAPI(
//     `/api/articles?filters[slug][$eq]=${slug}&populate=*`
//   );

//   const article = res?.data?.[0];
//   if (!article) notFound();

//   return (
//     <BlogClient article={article}>
//       <article className="max-w-4xl mx-auto px-6 py-10">

//         <h1 className="text-4xl font-bold mb-4">{article.title}</h1>

//         <p className="text-gray-500 mb-6">
//           {article.author?.name} · {article.category?.name}
//         </p>

//         {article.cover && (
//           <Image
//             src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${article.cover}`}
//             alt={article.title}
//             width={900}
//             height={500}
//             className="rounded-lg mb-8"
//             priority
//           />
//         )}

//         {/* ✅ NEW STRAPI BLOCK EDITOR */}
//         <BlockContent content={article.content} />

//         {/* ✅ OLD DYNAMIC ZONE */}
//         <Blocks blocks={article.blocks || []} />

//       </article>
//     </BlogClient>
//   );
// }



// app/blog/[slug]/page.jsx

import { notFound } from "next/navigation";
import Image from "next/image";
import { fetchAPI } from "../../lib/api";
import BlogClient from "../BlogClient";
import Blocks from "./Blocks";
import BlockContent from "./BlockContent";

export const dynamic = "force-dynamic";

/* =========================
   SEO (Dynamic Metadata)
========================= */
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const res = await fetchAPI(
    `/api/articles?filters[slug][$eq]=${slug}&populate=cover,seo.shareImage`
  );

  const article = res?.data?.[0];
  if (!article) return {};

  const seo = article.seo || {};

  const metaTitle = seo.metaTitle || article.title;
  const metaDescription =
    seo.metaDescription || article.description;

  const image = seo.shareImage || article.cover;
  const imageUrl = image
    ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${image}`
    : null;

  const canonical =
    seo.canonicalUrl ||
    `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${article.slug}`;

  return {
    title: metaTitle,
    description: metaDescription,

    keywords: seo.metaKeywords || undefined,

    alternates: {
      canonical,
    },

    robots: seo.noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },

    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonical,
      type: "article",
      images: imageUrl
        ? [
            {
              url: imageUrl,
              alt: seo.metaImageAlt || article.title,
            },
          ]
        : [],
    },

    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

/* =========================
   Page Render
========================= */
export default async function BlogDetail({ params }) {
  const { slug } = await params;

  const res = await fetchAPI(
    `/api/articles?filters[slug][$eq]=${slug}&populate=*`
  );

  const article = res?.data?.[0];
  if (!article) notFound();

  return (
    <BlogClient article={article}>
      <article className="max-w-4xl mx-auto px-6 py-10">

        {/* Title */}
        <h1 className="text-4xl font-bold mb-4">
          {article.title}
        </h1>

        {/* Meta info */}
        <p className="text-gray-500 mb-6">
          {article.author?.name}
          {article.category?.name && (
            <> · {article.category.name}</>
          )}
        </p>

        {/* Cover Image */}
        {article.cover && (
          <Image
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${article.cover}`}
            alt={article.seo?.metaImageAlt || article.title}
            width={900}
            height={500}
            className="rounded-lg mb-8"
            priority
          />
        )}

        {/* ✅ NEW Strapi Block Editor (Rich Text Blocks) */}
        {article.content && (
          <BlockContent content={article.content} />
        )}

        {/* ✅ OLD Dynamic Zone */}
        {article.blocks?.length > 0 && (
          <Blocks blocks={article.blocks} />
        )}

      </article>
    </BlogClient>
  );
}
