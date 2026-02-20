// // "use client";

// // import { useState } from "react";
// // import Link from "next/link";
// // import Image from "next/image";

// // export default function BlogClient({ articles }) {
// //   const [search, setSearch] = useState("");

// //   const filteredArticles = articles.filter((article) => {
// //     const q = search.toLowerCase();
// //     return (
// //       article.title.toLowerCase().includes(q) ||
// //       article.description.toLowerCase().includes(q) ||
// //       article.category.name.toLowerCase().includes(q) ||
// //       article.author.name.toLowerCase().includes(q)
// //     );
// //   });

// //   return (
// //     <main className="max-w-5xl mx-auto px-6 py-10">
      
// //       {/* Page Title */}
// //       <h1 className="text-4xl font-bold mb-6">Blog</h1>

// //       {/* 🔍 Search Bar */}
// //       <input
// //         type="text"
// //         placeholder="Search blog, category, author..."
// //         value={search}
// //         onChange={(e) => setSearch(e.target.value)}
// //         className="w-full mb-8 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// //       />

// //       {/* Blog Cards */}
// //       <div className="grid gap-8">
// //         {filteredArticles.map((article) => (
// //           <Link
// //             key={article.slug}
// //             href={`/blog/${article.slug}`}
// //             className="border rounded-lg overflow-hidden hover:shadow-lg transition"
// //           >
// //             <Image
// //               src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${article.cover}`}
// //               alt={article.title}
// //               width={800}
// //               height={400}
// //               className="w-full h-56 object-cover"
// //             />

// //             <div className="p-6">
// //               <p className="text-sm text-gray-500">
// //                 {article.category.name} · {article.author.name}
// //               </p>

// //               <h2 className="text-2xl font-semibold mt-2">
// //                 {article.title}
// //               </h2>

// //               <p className="mt-2 text-gray-600">
// //                 {article.description}
// //               </p>
// //             </div>
// //           </Link>
// //         ))}

// //         {/* Empty State */}
// //         {filteredArticles.length === 0 && (
// //           <p className="text-center text-gray-500">
// //             No blogs found.
// //           </p>
// //         )}
// //       </div>
// //     </main>
// //   );
// // }

// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import PageHero from "@/components/common/PageHero";

// export default function BlogClient({ article, allArticles = [], children }) {
//   const [progress, setProgress] = useState(0);

//   /* 🔥 Reading Progress */
//   useEffect(() => {
//     const onScroll = () => {
//       const scrollTop = window.scrollY;
//       const height =
//         document.documentElement.scrollHeight -
//         document.documentElement.clientHeight;

//       setProgress((scrollTop / height) * 100);
//     };

//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   if (!article) return null;

//   const articles = Array.isArray(allArticles) ? allArticles : [];

//   const index = articles.findIndex(
//     (a) => a.slug === article.slug
//   );

//   const nextArticle =
//     index !== -1 && articles.length > 1
//       ? articles[index + 1] || articles[0]
//       : null;

//   return (
//     <>

      
//       {/* 🔥 Progress Bar */}
//       <div
//         className="fixed top-0 left-0 h-1 bg-blue-500 z-50 transition-all"
//         style={{ width: `${progress}%` }}
//       />
//      <PageHero
//         title="Our Latest Insights"
//         subtitle="Explore expert perspectives and strategies from our team."
//         bgImage="/loan_Page/hero-bg.jpg"
//         height={{
//           base: "h-[15rem]",
//           sm: "sm:h-[20rem]",
//           md: "md:h-[12rem]",
//           lg: "lg:h-[20rem]",
//         }}
//       />
//         {children}
    

//       {/* 🔥 Next Blog Recommendation */}
//       {nextArticle && (
//         <div className="max-w-3xl mx-auto px-6 mt-16 border-t pt-10">
//           <p className="text-sm text-gray-500 mb-3">
//             Next Article
//           </p>

//           <Link
//             href={`/blog/${nextArticle.slug}`}
//             className="block hover:opacity-80"
//           >
//             <h3 className="text-2xl font-semibold">
//               {nextArticle.title}
//             </h3>
//             <p className="mt-2 text-gray-600">
//               {nextArticle.description}
//             </p>
//           </Link>
//         </div>
//       )}
//     </>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import PageHero from "@/components/common/PageHero";
import Frame from "@/components/footer/Fram";
import Image from "next/image";

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

      {/* 🔥 Dynamic Hero (FIXED) */}
      <PageHero
        // title={article.title}
        // subtitle={article.category?.name || ""}
        bgImage="/loan_Page/hero-bg.jpg"
        height={{
          base: "h-[15rem]",
          sm: "sm:h-[20rem]",
          md: "md:h-[20rem]",
          lg: "lg:h-[25rem]",
        }}
      />

      {/* 🔥 Article Layout Injected Here */}
      {children}

      {/* 🔥 Next Blog Recommendation */}
      {/* {nextArticle && (
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-6 mt-20 pb-20 border-t pt-10">
            <p className="text-sm text-gray-500 mb-3">
              Next Article
            </p>

            <Link
              href={`/blog/${nextArticle.slug}`}
              className="block hover:opacity-80 transition"
            >
              <h3 className="text-2xl font-semibold text-gray-800">
                {nextArticle.title}
              </h3>
              <p className="mt-2 text-gray-600">
                {nextArticle.description}
              </p>
            </Link>
          </div>
        </div>
      )} */}
{/* 
      {nextArticle && (
  <div className="bg-[#f3f4f8] py-20">
    <div className="max-w-7xl mx-auto px-6">

      <div className="text-center mb-10">
        <p className="text-sm text-purple-600 font-medium">
          Continue Reading
        </p>
        <h2 className="text-3xl font-bold text-gray-800 mt-2">
          Next Article
        </h2>
      </div>

      <div className="flex justify-center">
        <Link
          href={`/blog/${nextArticle.slug}`}
          className="w-full max-w-xl bg-white rounded-3xl border border-gray-200 shadow-sm p-6 flex flex-col hover:shadow-2xl hover:-translate-y-2 transition duration-300"
        >
          
          {nextArticle.cover && (
            <Image
              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${nextArticle.cover}`}
              alt={nextArticle.title}
              width={800}
              height={400}
              className="w-full h-[220px] object-cover rounded-2xl"
            />
          )}

       
          {nextArticle.category?.name && (
            <div className="mt-5">
              <span className="inline-block px-4 py-1 text-sm rounded-lg border border-[#A290F7] text-[#A290F7]">
                {nextArticle.category.name}
              </span>
            </div>
          )}

      
          <h3 className="mt-4 text-xl font-semibold text-gray-800 leading-snug">
            {nextArticle.title}
          </h3>

      
          <p className="mt-3 text-gray-600 text-sm line-clamp-3">
            {nextArticle.description}
          </p>

  
          <div className="mt-6 flex items-center justify-between">
            <span className="text-sm font-medium text-purple-600">
              Read Article →
            </span>

            {nextArticle.author?.name && (
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#3866F6] flex items-center justify-center text-white font-semibold text-sm">
                  {nextArticle.author.name.charAt(0)}
                </div>
                <p className="text-sm text-gray-700 font-medium">
                  {nextArticle.author.name}
                </p>
              </div>
            )}
          </div>
        </Link>
      </div>
    </div>
  </div>
)} */}

      <Frame/>
    </>
  );
}
