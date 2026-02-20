export async function getInvestmentPage() {
  const res = await fetch(
    "https://admin.finsbee.com/api/investment-page",
    {
      next: { revalidate: 60 }, // ISR (recommended)
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch investment page data");
  }

  const json = await res.json();
  return json.data;
}
