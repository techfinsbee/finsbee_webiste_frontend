

import Image from "next/image";
import Link from "next/link";
import { Navbar } from "../Navbar";

// import FreeClassPopup from "../common/FreeClassPopup";

export default function NotFoundUI() {
   

    const handleLearnFinanceClick = () => {
  const isMobile = window.innerWidth < 768; // Tailwind md breakpoint

  if (isMobile) {
    window.open(
      "https://chat.whatsapp.com/JlWVMfZCz1eCKVr8QU20PC",
      "_blank",
      "noopener,noreferrer"
    );
  } else {
    setOpenPopup(true);
  }
};


  return (
    <div className="min-h-screen w-full relative overflow-hidden ">

         {/* <div
        className="
          absolute inset-0 -z-10
          bg-[url('/bg/planbg.png')]
          bg-no-repeat bg-center bg-cover
        "
      /> */}
      {/* ================= HERO HEADER WITH CURVE ================= */}
      <div
        className="
         relative w-full
    h-[72px] sm:h-[80px] md:h-[91px]
    bg-gradient-to-r from-[#3A1C8F] via-[#4A2DBA] to-[#3A1C8F]
    rounded-b-[40px]
    sm:rounded-b-[60px]
    md:rounded-b-[120px]
    px-4 sm:px-6
        "
      >
        {/* Navbar sits INSIDE gradient */}
        <Navbar />
      </div>

      {/* ================= PAGE BACKGROUND ================= */}
      <div
        className="
          absolute inset-0 -z-10
          bg-[url('/booking/planbg.png')]
          bg-no-repeat bg-center bg-cover
        "
      />

      {/* ================= 404 CONTENT ================= */}
      <div className="relative flex flex-col items-center justify-center text-center px-6 pt-24">
        {/* Illustration */}
        <div className="mb-6">
          <Image
            src="/landing_page/error.png" // replace if needed
            alt="404 Not Found"
            width={260}
            height={260}
            priority
          />
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
          Oops! We can’t find this page.
        </h1>

        {/* Description */}
        <p className="text-gray-500 max-w-md mb-20">
          Don’t worry – it happens. Let’s get you back on track.
        </p>

        {/* Links */}
        <div className="flex flex-col text-[#212121] sm:flex-row md:gap-20 gap-5  lg:gap-40 text-lg font-medium">
          <Link href="/" className="underline underline-offset-4">
            Home
          </Link>

          <Link href="/booking" className="underline underline-offset-4">
            Book Financial Advisor
          </Link>

          {/* <Link href="/learn" className="underline underline-offset-4">
            Learn Finance Free
          </Link> */}
          <>
        <Link href="/webinar-form" className="underline underline-offset-4">
             Learn Finance Free
          </Link>
       
    

      
    </>

          <Link href="/Instant-form" className="underline underline-offset-4">
            Get Instant Loan
          </Link>
        </div>
      </div>
    </div>
  );
}
