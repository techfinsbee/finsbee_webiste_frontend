// // app/blog/page.jsx
// import Link from "next/link";
// import Image from "next/image";
// import { fetchAPI } from "../lib/api";

// export const dynamic = "force-dynamic";

// export default async function BlogListPage() {
//   const res = await fetchAPI(
//     "/api/articles?populate=cover,author,category&pagination[limit]=20"
//   );

//   const articles = res?.data || [];

//   return (
//     <section className="max-w-5xl mx-auto px-6 py-10">
//       <h1 className="text-4xl font-bold mb-8">Blog</h1>

//       <div className="grid gap-8">
//         {articles.map((article) => (
//           <Link
//             key={article.slug}
//             href={`/blog/${article.slug}`}
//             className="border rounded-lg p-6 hover:shadow-md transition"
//           >
//             {article.cover && (
//               <Image
//                 src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${article.cover}`}
//                 alt={article.title}
//                 width={600}
//                 height={300}
//                 className="rounded mb-4"
//               />
//             )}

//             <h2 className="text-2xl font-semibold mb-2">
//               {article.title}
//             </h2>

//             <p className="text-gray-600">
//               {article.description}
//             </p>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// }

// app/blog/page.jsx
import Link from "next/link";
import Image from "next/image";
import { fetchAPI } from "../lib/api";
import PageHero from "@/components/common/PageHero";
import Frame from "@/components/footer/Fram";

export const dynamic = "force-dynamic";

export default async function BlogListPage() {
  const res = await fetchAPI(
    "/api/articles?populate=cover,author,category&pagination[limit]=20"
  );

  const articles = res?.data || [];

  return (
    <>
      <PageHero
        title="Our Latest Insights"
        subtitle="Explore expert perspectives and strategies from our team."
        bgImage="/loan_Page/hero-bg.jpg"
        height={{
          base: "h-[15rem]",
          sm: "sm:h-[20rem]",
          md: "md:h-[12rem]",
          lg: "lg:h-[20rem]",
        }}
      />

      <section className="min-h-screen bg-gray-50 py-16 px-4">
        {/* Heading */}
        {/* <div className="max-w-7xl mx-auto text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Our Latest Insights
          </h1>
          <p className="text-gray-500 mt-4">
            Explore expert perspectives and strategies from our team.
          </p>
        </div> */}

        {/* Grid */}
        <div className="max-w-7xl mx-auto flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px]">
            {articles.map((article, i) => (
              <div
                key={article.slug || i}
                className="w-[318px] h-[405px] bg-white rounded-3xl border border-gray-200 shadow-sm p-5 flex flex-col hover:shadow-xl hover:-translate-y-2 transition duration-300"
              >
                {/* Image */}
                {article.cover && (
                  <Image
                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${article.cover}`}
                    alt={article.title}
                    width={318}
                    height={180}
                    className="w-full h-[180px] object-cover rounded-2xl"
                  />
                )}

                {/* Category */}
                <div className="mt-4">
                  {article.category?.name && (
                    <span className="inline-block px-4 py-1 text-sm rounded-lg border border-[#A290F7] text-[#A290F7]">
                      {article.category.name}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="mt-4 text-[18px] font-semibold text-gray-800 leading-snug">
                  {article.title}
                </h3>

                <div className="flex-grow"></div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <Link href={`/blog/${article.slug}`}>
                    <span className="text-[13px] font-medium hover:text-black transition">
                      Continue Reading →
                    </span>
                  </Link>

                  <div className="flex items-center gap-4">
                    {article.author?.name && (
                      <>
                        <div className="w-7 h-7 rounded-full bg-[#3866F6] flex items-center justify-center text-white font-semibold">
                          {article.author.name.charAt(0)}
                        </div>

                        <div className="text-sm text-gray-500">
                          <p className="font-medium text-gray-700">
                            {article.author.name}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Frame/>
    </>
  );
}
