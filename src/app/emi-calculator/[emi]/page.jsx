import { notFound } from "next/navigation";

import { emiData } from "@/data/emiData";
import EmiPage from "./EmiPage";

/* ✅ METADATA */
export async function generateMetadata({ params }) {
  const resolvedParams = await params; // ✅ FIX
  const emi = resolvedParams.emi;

  const data = emiData[emi];
  if (!data) return {};

  return {
    title: data.title,
    description: data.description,
  };
}

/* ✅ PAGE */
export default async function Page({ params }) {
  const resolvedParams = await params; 
  const emi = resolvedParams.emi;

  if (!emiData[emi]) notFound();

  return <EmiPage emi={emi} />;
}
