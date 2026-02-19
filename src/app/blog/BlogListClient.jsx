// "use client";

// import Link from "next/link";
// import Image from "next/image";

// export default function BlogListClient({ articles }) {
//   if (!Array.isArray(articles) || articles.length === 0) {
//     return (
//       <p className="text-center text-gray-500">
//         No blogs found
//       </p>
//     );
//   }

//   return (
//     <main className="max-w-5xl mx-auto px-6 py-10">
//       <h1 className="text-4xl font-bold mb-8">Blog</h1>

//       <div className="grid gap-8">
//         {articles.map((article) => (
//           <Link
//             key={article.slug}
//             href={`/blog/${article.slug}`}
//             className="border rounded-lg overflow-hidden hover:shadow-lg transition"
//           >
//             <Image
//               src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${article.cover}`}
//               alt={article.title}
//               width={800}
//               height={400}
//               className="w-full h-56 object-cover"
//             />

//             <div className="p-6">
//               <p className="text-sm text-gray-500">
//                 {article.category.name} · {article.author.name}
//               </p>

//               <h2 className="text-2xl font-semibold mt-2">
//                 {article.title}
//               </h2>

//               <p className="mt-2 text-gray-600">
//                 {article.description}
//               </p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </main>
//   );
// }

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function BlogListClient({ articles = [] }) {
  const [query, setQuery] = useState("");

  const filteredArticles = articles.filter((article) => {
    const q = query.toLowerCase();
    return (
      article.title?.toLowerCase().includes(q) ||
      article.description?.toLowerCase().includes(q) ||
      article.category?.name?.toLowerCase().includes(q) ||
      article.author?.name?.toLowerCase().includes(q)
    );
  });

  return (
    <main className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>

      <div className="mb-10">
        <input
          type="text"
          placeholder="Search blogs, category, author..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-lg border px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {filteredArticles.length === 0 && (
        <p className="text-center text-gray-500">No blogs found</p>
      )}

      <div className="grid gap-8">
        {filteredArticles.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="border rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            {/* FIXED IMAGE RENDERING */}
            {article.cover ? (
              <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${article.cover}`}
                alt={article.title || "Blog post image"}
                width={800}
                height={400}
                className="w-full h-56 object-cover"
                // Optional: better loading experience
                loading="lazy"
                // sizes="(max-width: 768px) 100vw, 800px"
              />
            ) : (
              // Fallback when no cover (prevents layout shift)
              <div className="w-full h-56 bg-gray-200 flex items-center justify-center text-gray-500">
                No image
              </div>
            )}

            <div className="p-6">
              <p className="text-sm text-gray-500">
                {article.category?.name || "Uncategorized"} ·{" "}
                {article.author?.name || "Anonymous"}
              </p>

              <h2 className="text-2xl font-semibold mt-2">
                {article.title || "Untitled"}
              </h2>

              <p className="mt-2 text-gray-600">
                {article.description || "No description available"}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}