// // app/lib/getLoanBySlug.js
// export async function getLoanBySlug(slug) {
//   const res = await fetch("https://admin.finsbee.com/api/loans", {
//     next: { revalidate: 3600 }, // ISR: 1 hour
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch loans");
//   }

//   const json = await res.json();

//   // ✅ API is flat — this is CORRECT
//   const loan = json.data.find((item) => item.slug === slug);

//   if (!loan) return null;

//   // ✅ NORMALIZE (already mostly correct)
//   return {
//     title: loan.title,
//     slug: loan.slug,
//     heroDescription: loan.heroDescription,
//     emiRoute: loan.emiRoute,
//     backgroundImage: loan.backgroundImage,

//     features: loan.features?.map((f) => f.text) || [],

//     benefitCards:
//       loan.benefitCards?.map((b) => ({
//         benefit_id: b.benefit_id, 
//         title: b.title,
//         description: b.description,
//         icon: b.icon,
//         order: b.order,
//       })) || [],

//     whyFinsbeeFeatures:
//       loan.whyFinsbeeFeatures?.map((f) => ({
//         title: f.title,
//         description: f.description,
//         icon: f.icon,
//       })) || [],

//     faqItems:
//       loan.faqItems?.map((f) => ({
//         question: f.question,
//         answer: f.answer,
//       })) || [],
//   };
// }

// app/lib/getLoanBySlug.js

export async function getLoanBySlug(slug) {
  const res = await fetch("https://admin.finsbee.com/api/loans", {
    cache: "no-store", // 🔥 REAL TIME (NO CACHE)
  });

  if (!res.ok) {
    throw new Error("Failed to fetch loans");
  }

  const json = await res.json();

  const loan = json.data.find((item) => item.slug === slug);

  if (!loan) return null;

  return {
    title: loan.title,
    slug: loan.slug,
    heroDescription: loan.heroDescription,
    emiRoute: loan.emiRoute,
    backgroundImage: loan.backgroundImage,

    features: loan.features?.map((f) => f.text) || [],

    benefitCards:
      loan.benefitCards?.map((b) => ({
        benefit_id: b.benefit_id,
        title: b.title,
        description: b.description,
        icon: b.icon,
        order: b.order,
      })) || [],

    whyFinsbeeFeatures:
      loan.whyFinsbeeFeatures?.map((f) => ({
        title: f.title,
        description: f.description,
        icon: f.icon,
      })) || [],

    faqItems:
      loan.faqItems?.map((f) => ({
        question: f.question,
        answer: f.answer,
      })) || [],
  };
}
