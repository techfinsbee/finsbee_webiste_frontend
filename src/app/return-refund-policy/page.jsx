import PageHero from "@/components/common/PageHero";

export const metadata = {
  title: "Cancellation & Refund Policy | FinsBee",
  description:
    "Read FinsBee’s Cancellation & Refund Policy including timelines, conditions, and refund processing details.",
};

export default function CancellationRefundPolicy() {
  return (
    <>
      <PageHero
  title="Return and Refund Policy"
  bgImage="/loan_Page/hero-bg.jpg"
  height={{
    base: "h-[15rem]",
    sm: "sm:h-[20rem]",
    md: "md:h-[25rem]",
    lg: "lg:h-[30rem]",
  }}
/>
      {/* <div className="max-w-4xl mx-auto p-6 pt-[5rem] ">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Return and Refund Policy
        </h1> */}
        {/* </div> */}
<div className=" relative mx-4 z-50 -mt-20 sm:-mt-35 md:-mt-55  md:mx-[136px] p-3 md:p-12 text-gray-800 bg-white rounded-2xl shadow-[0_10px_10px_rgba(0,0,0,0.12)] border border-gray-100" >
        <div className="space-y-6 text-sm text-gray-700">
          <p className="text-gray-500">
            <strong>Last updated on:</strong> Jan 24th, 2026
          </p>

          <p>
            <strong>STRADEX INTERNATIONAL PRIVATE LIMITED</strong> believes in
            helping its customers as far as possible and has therefore adopted a
            liberal cancellation policy. Under this policy:
          </p>

          <section className="space-y-4">
            <ul className="list-disc pl-6 space-y-3">
              <li>
                Cancellations will be considered only if the request is made
                within <strong>1–2 days</strong> of placing the order. However,
                the cancellation request may not be entertained if the orders
                have already been communicated to the vendors/merchants and they
                have initiated the process of shipping.
              </li>

              <li>
                STRADEX INTERNATIONAL PRIVATE LIMITED does not accept cancellation
                requests for perishable items such as flowers, eatables, etc.
                However, refund or replacement may be made if the customer
                establishes that the quality of the product delivered is not
                satisfactory.
              </li>

              <li>
                In case of receipt of damaged or defective items, please report
                the same to our Customer Service team. The request will be
                entertained only after the merchant has verified and confirmed
                the issue. This must be reported within <strong>1–2 days</strong>{" "}
                of receiving the product.
              </li>

              <li>
                If you feel that the product received is not as shown on the site
                or does not meet your expectations, you must notify our customer
                service within <strong>1–2 days</strong> of receiving the
                product. The Customer Service Team will review the complaint and
                take an appropriate decision.
              </li>

              <li>
                For complaints regarding products that come with a manufacturer
                warranty, please refer the issue directly to the manufacturer.
              </li>

              <li>
                In case any refunds are approved by STRADEX INTERNATIONAL PRIVATE
                LIMITED, it may take <strong>3–5 business days</strong> for the
                refund to be processed to the end customer.
              </li>
            </ul>
          </section>

          <section className="border-t pt-6 space-y-4">
            <h2 className="text-lg font-semibold">Disclaimer</h2>
            <p className="text-gray-600">
              The above content is created at STRADEX INTERNATIONAL PRIVATE
              LIMITED’s sole discretion. Razorpay shall not be liable for any
              content provided here and shall not be responsible for any claims
              or liabilities that may arise due to the merchant’s
              non-adherence to this policy.
            </p>
          </section>

          <div className="mt-8 pt-4 border-t text-center">
            <p className="text-xs text-gray-500">
              © 2026 STRADEX INTERNATIONAL PRIVATE LIMITED. All rights reserved.
            </p>
          </div>
        </div>
      </div>
     
    </>
  );
}
