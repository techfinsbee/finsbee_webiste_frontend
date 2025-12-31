"use client";

import { useRouter } from "next/navigation";

export default function BookingCTA() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/booking")}
      className="
        w-full py-3 text-lg font-semibold text-white
        rounded-full shadow-lg
        active:scale-95 transition-all duration-200
        bg-[linear-gradient(279.02deg,_#592EFF_2%,_#9E05EB_100%)]
      "
    >
      60 Minutes Booking
    </button>
  );
}
