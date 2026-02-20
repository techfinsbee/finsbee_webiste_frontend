import Link from "next/link";
import { fetchAPI } from "../../lib/api";

export default async function CategoryPage({ params }) {
  const { slug } = params;

  const res = await fetchAPI(
    `/api/articles?filters[category][slug][$eq]=${slug}`
  );

  return (
    <main className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-8">
        Category: {slug}
      </h1>

      {res.data.map((article) => (
        <Link
          key={article.slug}
          href={`/blog/${article.slug}`}
          className="block mb-4 text-xl text-blue-600"
        >
          {article.title}
        </Link>
      ))}
    </main>
  );
}
