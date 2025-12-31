"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// import PlansSection from "./PlansSection";
// import BookingHero from "./BookingHero";
// import HowItWorksScroll from "./HowItWorkSection";
// import WhyFinsbeeHover from "./WhyFinsbee";
// import FaqSection from "./FaqSection";
// import SupportSection from "./SupportSection";
import dynamic from "next/dynamic";

const PlansSection = dynamic(() => import("./PlansSection"), { ssr: false });
const BookingHero = dynamic(() => import("./BookingHero"), { ssr: false });
const HowItWorksScroll = dynamic(() => import("./HowItWorkSection"), { ssr: false });
const WhyFinsbeeHover = dynamic(() => import("./WhyFinsbee"), { ssr: false });
const FaqSection = dynamic(() => import("./FaqSection"), { ssr: false });
const SupportSection = dynamic(() => import("./SupportSection"), { ssr: false });


/* ========= Rotating Gold Text ========= */
function RotatingGoldText({ items, delay = 2200, className = "" }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setI((p) => (p + 1) % items.length);
    }, delay);
    return () => clearInterval(id);
  }, [items.length, delay]);

  return (
    <span className="relative inline-block">
      <span key={i} className={`animated-gold-text fade-in ${className}`}>
        {items[i]}
      </span>
    </span>
  );
}

/* ========= Tiny CSS ========= */
const GoldTextStyles = () => (
  <style>{`
    .animated-gold-text {
      background-image: linear-gradient(90deg, #ffc73c, #fff1a6, #ffc73c);
      background-size: 200% 100%;
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      animation: gold-run 2.8s linear infinite;
      white-space: nowrap;
    }
    @keyframes gold-run {
      0% { background-position: 0% 50%; }
      100% { background-position: -200% 50%; }
    }
    .fade-in {
      animation: fadeIn 0.55s ease both;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(4px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `}</style>
);

/* ========= Scroll to Booking ========= */ function goToBooking() {
  const el = document.getElementById("booking");
  if (!el) return;

  const container = document.querySelector("main");
  const prevSnap = container.style.scrollSnapType;

  // temporarily disable snap
  container.style.scrollSnapType = "none";

  el.scrollIntoView({ behavior: "smooth", block: "start" });

  // restore snap AFTER scroll settles
  setTimeout(() => {
    container.style.scrollSnapType = prevSnap || "y mandatory";
  }, 800);

  setTimeout(() => {
    const firstFocusable = el.querySelector(
      'input, select, textarea, button, [tabindex]:not([tabindex="-1"])'
    );
    firstFocusable?.focus({ preventScroll: true });
  }, 900);
}

/* ========= Hero Section ========= */
function ConsultantHero() {
  return (
    <section className="relative min-h-screen overflow-visible">
      <GoldTextStyles />

      {/* Optimized background */}
      <Image
        src="/booking/home_hero_bg.avif"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <a href="/" className="hidden sm:inline-block">
            <img src="/booking/text-button.svg" alt="" className="w-[155px]" />
          </a>

          <button onClick={goToBooking}>
            <img
              src="/booking/primary-button.svg"
              alt=""
              className="w-[285px]"
            />
          </button>
        </div>

        <div className="relative pb-24 lg:pb-28 -mb-24 lg:-mb-28">
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="text-white">
              <h1 className="font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.15]">
                <span className="block">Behind every</span>
                <span className="block mt-2">rupee you earn is</span>
                <span className="block mt-2">
                  <RotatingGoldText
                    items={[
                      "your hard work",
                      "your time",
                      "your family’s hopes",
                    ]}
                  />
                </span>
              </h1>

              <p className="mt-6 text-[32px] text-white/90">
                We’ll protect it like our own–
              </p>
              <p className="mt-1 text-[24px] text-white/80">
                Buy our plan today and secure every rupee you’ve worked for
              </p>
            </div>

            <div className="relative mt-10">
              <div className="ml-auto w-full max-w-[436px] rounded-[28px] overflow-hidden border-4 border-white  bg-white shadow-xl relative z-20">
                <Image
                  src="/booking/60-min-banner.webp"
                  alt="Happy customers"
                  width={436}
                  height={650}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="w-[436px] h-[650px] object-cover"
                />
              </div>

              {/* ===== Badge 1 ===== */}
              <div className="absolute -left-4 top-0 mt-28 z-[60] sm:-left-10 sm:ml-40">
                <div className="flex items-center gap-3 rounded-2xl bg-white/70 backdrop-blur px-8 py-6 shadow-lg border border-black/5">
                  <div className="flex -space-x-2">
                    <Image
                      src="/booking/b1.webp"
                      alt=""
                      width={32}
                      height={32}
                      loading="lazy"
                      decoding="async"
                      className="w-8 h-8 rounded-full ring-2 ring-white"
                    />
                    <Image
                      src="/booking/b2.webp"
                      alt=""
                      width={32}
                      height={32}
                      loading="lazy"
                      decoding="async"
                      className="w-8 h-8 rounded-full ring-2 ring-white"
                    />
                    <Image
                      src="/booking/b3.webp"
                      alt=""
                      width={32}
                      height={32}
                      loading="lazy"
                      decoding="async"
                      className="w-8 h-8 rounded-full ring-2 ring-white"
                    />
                   
                  </div>
                  <div>
                    <div className="text-[#592eff] font-semibold text-sm">
                      2k+
                    </div>
                    <div className="text-black/70 text-[12px]">
                      Already Benefit
                    </div>
                  </div>
                </div>
              </div>

              {/* ===== Badge 2 ===== */}
              <div className="absolute right-0 bottom-6 mb-32 sm:-right-6 z-[60]">
                <div className="rounded-2xl bg-white/70 backdrop-blur px-8 py-6 shadow-lg border border-black/5">
                  <div className="text-[#592eff] font-semibold text-sm">
                    99%
                  </div>
                  <div className="text-black/70 text-[12px]">
                    Customer Satisfaction
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========= Main Page ========= */
export default function ConsultantLandingPage() {
  // useEffect(() => {
  //   console.log("ConsultantLandingPage mounted");
  //   return () => console.log("ConsultantLandingPage unmounted");
  // }, []);
  return (
    <main className="snap-y snap-mandatory overflow-y-auto">
      <section>
        <ConsultantHero />
      </section>

      <section className="snap-start">
        <PlansSection />
      </section>

      <section id="booking" className="snap-start">
        <BookingHero />
      </section>

      <section id="hiw-snap" className="snap-start min-h-screen">
        <HowItWorksScroll />
      </section>

      <section className="snap-start">
        <WhyFinsbeeHover />
      </section>

      <section className="snap-start">
        <FaqSection />
      </section>

      <section className="snap-start">
        <SupportSection />
      </section>
    </main>
  );
}
