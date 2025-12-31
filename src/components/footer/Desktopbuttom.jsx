



"use client";

import { useState } from "react";
import Image from "next/image";
import FreeClassPopup from "../common/FreeClassPopup";
import { useRouter } from "next/navigation";

export default function Desktopbuttom() {
  const [openPopup, setOpenPopup] = useState(false);

const router = useRouter();

  return (
    <>
      <section className="hidden w-full rounded-full  backdrop-blur-sm bg-[#FFF9EC00] py-5 shadow-[0px_-6px_25px_0px_#592EFF1F] lg:block">
        <div className="mx-auto flex max-w-6xl  flex-wrap items-center justify-between gap-6">
          <button
           onClick={() => router.push("/booking")}
            type="button"
            className="cursor-pointer rounded-lg bg-gradient-to-r from-[#A025FF] to-[#5C3BFF] px-10 py-5 text-base font-semibold text-white shadow-md transition hover:brightness-110"
          >
            Get Financial Advisor in 60 Min - Book Now
          </button>

          <button
            type="button"
            onClick={() => setOpenPopup(true)}
            className="flex items-center gap-3 rounded-lg bg-[#FFC94B] px-10 text-base font-semibold text-[#22120B] shadow-md transition hover:brightness-105"
          >
            <span>Learn Finance - Join Free Classes</span>
            <Image
              src="/landing_page/Whatsappgif.gif"
              alt="WhatsApp icon"
              width={64}
              height={63}
              unoptimized
            />
          </button>
        </div>
      </section>

      <FreeClassPopup open={openPopup} onClose={() => setOpenPopup(false)} />
    </>
  );
}
