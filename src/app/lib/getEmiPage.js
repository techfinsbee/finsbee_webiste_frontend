// const STRAPI_URL = "https://admin.finsbee.com";

// export async function getEmiPage(slug) {
//   const res = await fetch(
//     `${STRAPI_URL}/api/emi-calculator-pages?filters[slug][$eq]=${slug}`,
//     { cache: "no-store" }
//   );

//   const json = await res.json();
//   const page = json?.data?.[0];

//   if (!page) return null;

//   // split lender rates
//   const bankData = page.lender_rates
//     .filter((l) => l.lenderType === "bank")
//     .map((l) => ({
//       bank: l.lenderName,
//       interestRate: l.interestRate,
//       loanAmount: l.loanAmount,
//       tenure: l.tenure,
//       processingFee: l.processingFee,
//     }));

//   const nbfcData = page.lender_rates
//     .filter((l) => l.lenderType === "nbfc")
//     .map((l) => ({
//       nbfc: l.lenderName,
//       interestRate: l.interestRate,
//       loanAmount: l.loanAmount,
//       tenure: l.tenure,
//       processingFee: l.processingFee,
//     }));

//   return {
//     title: page.title,
//     description: page.description,
//     icon: `${STRAPI_URL}${page.icon}`,
//     backgroundImage: `${STRAPI_URL}${page.backgroundImage}`,
//     applyRoute: page.applyRoute,
//     loanLabel: page.loanLabel,
//     features: page.features,
//     bankTableHeading: "Interest Rates – Banks",
//     nbfcTableHeading: "Interest Rates – NBFCs",
//     bankData,
//     nbfcData,
//   };
// }


// const STRAPI_URL = "https://admin.finsbee.com";

// export async function getEmiPage(slug) {
//   console.log("🔍 getEmiPage called with slug:", slug);

//   const res = await fetch(
//     `${STRAPI_URL}/api/emi-calculator-pages?filters[slug][$eq]=${encodeURIComponent(
//       slug
//     )}`,
//     { cache: "no-store" }
//   );

//   const json = await res.json();

//   console.log("📦 Strapi response:", json);

//   if (!json?.data || json.data.length === 0) {
//     console.log("❌ No EMI page found for slug:", slug);
//     return null;
//   }

//   const page = json.data[0];

//   // split lender rates
//   const bankData = page.lender_rates
//     .filter((l) => l.lenderType === "bank")
//     .map((l) => ({
//       bank: l.lenderName,
//       interestRate: l.interestRate,
//       loanAmount: l.loanAmount,
//       tenure: l.tenure,
//       processingFee: l.processingFee,
//     }));

//   const nbfcData = page.lender_rates
//     .filter((l) => l.lenderType === "nbfc")
//     .map((l) => ({
//       nbfc: l.lenderName,
//       interestRate: l.interestRate,
//       loanAmount: l.loanAmount,
//       tenure: l.tenure,
//       processingFee: l.processingFee,
//     }));

//   return {
//     slug: page.slug, // 🔥 IMPORTANT
//     title: page.title,
//     description: page.description,
//     icon: `${STRAPI_URL}${page.icon}`,
//     backgroundImage: `${STRAPI_URL}${page.backgroundImage}`,
//     applyRoute: page.applyRoute,
//     loanLabel: page.loanLabel,
//     features: page.features,
//     bankTableHeading: "Interest Rates – Banks",
//     nbfcTableHeading: "Interest Rates – NBFCs",
//     bankData,
//     nbfcData,
//   };
// }



const STRAPI_URL = "https://admin.finsbee.com";

export async function getEmiPage(slug) {
  if (!slug) {
    console.error("❌ slug missing");
    return null;
  }

//   console.log("🔍 getEmiPage called with slug:", slug);

  const url = `${STRAPI_URL}/api/emi-calculator-pages?filters[slug][$eq]=${encodeURIComponent(
    slug
  )}`;

  const res = await fetch(url, { cache: "no-store" });
  const json = await res.json();

//   console.log("📦 Strapi response:", json);

  // ✅ SAFETY: manually find correct page
  const page = json?.data?.find((p) => p.slug === slug);

  if (!page) {
    console.error("❌ No EMI page found for slug:", slug);
    return null;
  }

  const bankData = page.lender_rates
    .filter((l) => l.lenderType === "bank")
    .map((l) => ({
      bank: l.lenderName,
      interestRate: l.interestRate,
      loanAmount: l.loanAmount,
      tenure: l.tenure,
      processingFee: l.processingFee,
    }));

  const nbfcData = page.lender_rates
    .filter((l) => l.lenderType === "nbfc")
    .map((l) => ({
      nbfc: l.lenderName,
      interestRate: l.interestRate,
      loanAmount: l.loanAmount,
      tenure: l.tenure,
      processingFee: l.processingFee,
    }));

  return {
    title: page.title,
    description: page.description,
    slug: page.slug,
    icon: `${STRAPI_URL}${page.icon}`,
    backgroundImage: `${STRAPI_URL}${page.backgroundImage}`,
    applyRoute: page.applyRoute,
    loanLabel: page.loanLabel,
    features: page.features,
    bankTableHeading: "Interest Rates – Banks",
    nbfcTableHeading: "Interest Rates – NBFCs",
    bankData,
    nbfcData,
  };
}
