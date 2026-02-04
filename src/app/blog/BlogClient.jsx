// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function BlogClient({ articles }) {
//   const [search, setSearch] = useState("");

//   const filteredArticles = articles.filter((article) => {
//     const q = search.toLowerCase();
//     return (
//       article.title.toLowerCase().includes(q) ||
//       article.description.toLowerCase().includes(q) ||
//       article.category.name.toLowerCase().includes(q) ||
//       article.author.name.toLowerCase().includes(q)
//     );
//   });

//   return (
//     <main className="max-w-5xl mx-auto px-6 py-10">
      
//       {/* Page Title */}
//       <h1 className="text-4xl font-bold mb-6">Blog</h1>

//       {/* 🔍 Search Bar */}
//       <input
//         type="text"
//         placeholder="Search blog, category, author..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         className="w-full mb-8 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />

//       {/* Blog Cards */}
//       <div className="grid gap-8">
//         {filteredArticles.map((article) => (
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

//         {/* Empty State */}
//         {filteredArticles.length === 0 && (
//           <p className="text-center text-gray-500">
//             No blogs found.
//           </p>
//         )}
//       </div>
//     </main>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function BlogClient({ article, allArticles = [], children }) {
  const [progress, setProgress] = useState(0);

  /* 🔥 Reading Progress */
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setProgress((scrollTop / height) * 100);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!article) return null;

  const articles = Array.isArray(allArticles) ? allArticles : [];

  const index = articles.findIndex(
    (a) => a.slug === article.slug
  );

  const nextArticle =
    index !== -1 && articles.length > 1
      ? articles[index + 1] || articles[0]
      : null;

  return (
    <>
      {/* 🔥 Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-blue-500 z-50 transition-all"
        style={{ width: `${progress}%` }}
      />

      {children}

      {/* 🔥 Next Blog Recommendation */}
      {nextArticle && (
        <div className="max-w-3xl mx-auto px-6 mt-16 border-t pt-10">
          <p className="text-sm text-gray-500 mb-3">
            Next Article
          </p>

          <Link
            href={`/blog/${nextArticle.slug}`}
            className="block hover:opacity-80"
          >
            <h3 className="text-2xl font-semibold">
              {nextArticle.title}
            </h3>
            <p className="mt-2 text-gray-600">
              {nextArticle.description}
            </p>
          </Link>
        </div>
      )}
    </>
  );
}
