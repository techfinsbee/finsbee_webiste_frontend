
"use client";


import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Finsbeethankyou() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const source = searchParams.get("source");

  useEffect(() => {
    // If user directly opens thank-you page → redirect to form
    if (source !== "instant-form") {
      router.replace("/Instant-form");
    }
  }, [source, router]);
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center relative bg-cover bg-center"
      style={{ backgroundImage: "url('/booking/planbg.png')" }}
    >
      {/* Logo */}
      <div className="absolute top-6 left-10">
        <img
          src="/FinsbeeLogo.svg"
          alt="finsbee"
          className="h-16 bg-[#592EEF] rounded-xl p-2"
        />
      </div>

      {/* Back Button */}
      <div
        onClick={() => router.back()}
        className="absolute top-24 left-12 flex items-center gap-2 text-[#f59e0b] cursor-pointer"
      >
        <span className="text-xl">←</span>
        <span>Back</span>
      </div>

      <div className="flex flex-col items-center w-full max-w-lg py-12 px-8 bg-transparent">
        <div className="mb-8">
          <img
            src="/form_page/quality.png"
            alt="Application Submitted"
            className="mx-auto h-50"
          />
        </div>

        <div className="text-center text-xl text-[#183153] font-medium">
          <div>Your application has been submitted successfully!</div>

          <div className="mt-5">
            Our team will reach out to you shortly
            <br />
            to discuss your loan options.
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-600">
          <p>Thank you for choosing Finsbee for your financial needs.</p>
        </div>
      </div>
    </div>
  );
}