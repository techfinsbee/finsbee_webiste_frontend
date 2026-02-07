

// import { notFound } from "next/navigation";
// import { getEmiPage } from "@/app/lib/getEmiPage";
// import { getAllEmiPages } from "@/app/lib/getAllEmiPages";
// import EmiPage from "./EmiPage";

// /* SEO */
// export async function generateMetadata({ params }) {
//   const resolvedParams = await params;
//   const data = await getEmiPage(resolvedParams.emi);

//   if (!data) return {};
//   return {
//     title: data.title,
//     description: data.description,
//   };
// }

// export default async function Page({ params }) {
//   const resolvedParams = await params;
//   const data = await getEmiPage(resolvedParams.emi);

//   if (!data) notFound();

//   const allPages = await getAllEmiPages();

//   return <EmiPage data={data} allPages={allPages} />;
// }


// import { notFound } from "next/navigation";
// import { getEmiPage } from "@/app/lib/getEmiPage";
// import { getAllEmiPages } from "@/app/lib/getAllEmiPages";
// import EmiPage from "./EmiPage";

// export async function generateMetadata({ params }) {
//   const { emi } = await params; 

//   const data = await getEmiPage(emi);
//   if (!data) return {};

//   return {
//     title: data.title,
//     description: data.description,
//   };
// }

// export default async function Page({ params }) {
//   const { emi } = await params;

//   const data = await getEmiPage(emi);

//   // 🔥 THIS IS THE KEY LINE
//   if (!data) notFound();

//   const allPages = await getAllEmiPages();

//   return <EmiPage data={data} allPages={allPages} />;
// }

import { notFound } from "next/navigation";
import { getEmiPage } from "@/app/lib/getEmiPage";
import { getAllEmiPages } from "@/app/lib/getAllEmiPages";
import EmiPage from "./EmiPage";

/* ================= SEO ================= */
export async function generateMetadata({ params }) {
  const { emi } = await params; // ✅ FIX
  console.log("🧠 generateMetadata slug:", emi);

  const data = await getEmiPage(emi);
  if (!data) return {};

  return {
    title: data.title,
    description: data.description,
  };
}

/* ================= PAGE ================= */
export default async function Page({ params }) {
  const { emi } = await params; // ✅ FIX
  console.log("🚀 Page slug:", emi);

  const data = await getEmiPage(emi);
  if (!data) notFound();

  const allPages = await getAllEmiPages();

  return <EmiPage data={data} allPages={allPages} />;
}
