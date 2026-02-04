// // import Link from "next/link";
// // import Image from "next/image";
// // import { fetchAPI } from "../lib/api";

// // export default async function BlogPage() {
// //   const res = await fetchAPI("/api/articles");
// //   const articles = res.data;

// //   return (
// //     <main className="max-w-5xl mx-auto px-6 py-10">
// //       <h1 className="text-4xl font-bold mb-8">Blog</h1>

// //       <div className="grid gap-8">
// //         {articles.map((article) => (
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
// //       </div>
// //     </main>
// //   );
// // }


// import { fetchAPI } from "../lib/api";
// import BlogClient from "./BlogClient";
// // import BlogClient from "./BlogClient";

// export default async function BlogPage() {
//   const res = await fetchAPI("/api/articles");
//   const articles = res.data;

//   return <BlogClient articles={articles} />;
// }


import { fetchAPI } from "../lib/api";
import BlogListClient from "./BlogListClient";

export default async function BlogPage() {
  const res = await fetchAPI("/api/articles");
  const articles = res?.data || [];

  return <BlogListClient articles={articles} />;
}
