import Image from "next/image";

const BASE_URL = "https://admin.finsbee.com";

async function getBlog(slug) {
  const res = await fetch(
    `${BASE_URL}/api/articles?filters[slug][$eq]=${slug}&populate=*`,
    { cache: "no-store" }
  );

  const data = await res.json();
  return data?.data?.[0];
}

export default async function Page({ params }) {

  // ✅ IMPORTANT (Next 16 Fix)
  const { slug } = await params;

  const blog = await getBlog(slug);

  if (!blog) {
    return <div className="p-10">Blog not found</div>;
  }

  return (
  <div className="bg-[#f3f4f8] min-h-screen">

  
    
    <div className="max-w-4xl mx-auto px-6">
      <div className="bg-white -mt-24 rounded-2xl shadow-2xl p-10 relative z-10">

        <p className="text-purple-600 mb-2">
          {blog.category?.name}
        </p>

        <h1 className="text-3xl font-semibold mb-6 text-gray-800">
          {blog.title}
        </h1>

        {blog.cover && (
          <Image
            src={`${BASE_URL}${blog.cover}`}
            alt={blog.title}
            width={900}
            height={500}
            className="rounded-xl mb-8 w-full object-cover"
          />
        )}

        <div className="space-y-6 text-gray-600 leading-relaxed">

          {blog.blocks?.map((block, index) => {

            if (block.__component === "shared.rich-text") {
              return (
                <div
                  key={index}
                  dangerouslySetInnerHTML={{ __html: block.body }}
                />
              );
            }

            if (block.__component === "shared.quote") {
              return (
                <div
                  key={index}
                  className="border border-purple-200  border-l-purple-500 px-4 py-4 italic bg-purple-50 rounded-md"

                >
                  <p>{block.body}</p>
                  <span className="block mt-2 font-semibold">
                    — {block.title}
                  </span>
                </div>
              );
            }

            if (block.__component === "shared.media") {

              const imageUrl =
                block.file?.url ||
                block.file ||
                null;

              if (!imageUrl) return null;

              return (
                <Image
                  key={index}
                  src={`${BASE_URL}${imageUrl}`}
                  alt="media"
                  width={900}
                  height={500}
                  className="rounded-xl w-full"
                />
              );
            }

            return null;
          })}

        </div>

      </div>
    </div>

  </div>
);
}