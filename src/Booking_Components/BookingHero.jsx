"use client";

import React, { useEffect, useRef, useState } from "react";
import BookingFormCard from "./BookingFormCard";

const cn = (...a) => a.filter(Boolean).join(" ");

export default function BookingHero() {
  const formRef = useRef(null);
  const leftRef = useRef(null);
  const [showForm, setShowForm] = useState(false);
  const [showLeft, setShowLeft] = useState(false);

  useEffect(() => {
    const opts = { threshold: 0.3 };
    const io1 = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setShowForm(true);
        io1.disconnect();
      }
    }, opts);
    const io2 = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setShowLeft(true);
        io2.disconnect();
      }
    }, opts);

    if (formRef.current) io1.observe(formRef.current);
    if (leftRef.current) io2.observe(leftRef.current);
    return () => {
      io1.disconnect();
      io2.disconnect();
    };
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* BG image + overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/booking/bg.jpg")' }}
        aria-hidden
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(89,46,255,0.84) 0%, rgba(89,46,255,0.76) 42%, rgba(89,46,255,0.64) 70%, rgba(89,46,255,0.56) 100%)",
        }}
        aria-hidden
      />

      <div className="relative min-h-[786px] lg:h-[786px]">
        <div className="mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center h-full py-10 sm:py-0">
            {/* LEFT (text stack) */}
            <div
              ref={leftRef}
              className={cn(
                "text-white transform-gpu will-change-transform",
                "transition-[transform,opacity] duration-[900ms]",
                "ease-[cubic-bezier(0.22,1,0.36,1)]",
                showLeft ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
            >
              <div className="w-full max-w-[512px]">
                {/* <div className="inline-flex items-center rounded-full border border-white/60 bg-white/10 px-6 py-2 text-[24px] leading-none backdrop-blur-md shadow-[inset_0_0_0_2px_rgba(255,255,255,0.25)]">
                  Why choose us
                </div> */}

                <h2
                  className="
                    mt-6 font-[700] leading-[1.0]
                    text-[44px] sm:text-[56px] lg:text-[64px]
                    tracking-[-0.01em]
                  "
                >
                  Simple Plans
                  <br />
                  Solid Financial
                  <br />
                  Decisions.
                </h2>

                <div className="mt-8 grid grid-cols-3 gap-5">
                  {[
                    ["15min", "Google Meet"],
                    ["Door Step", "financial advisor"],
                    ["1 Month", "Call + Door Step financial advisor"],
                  ].map(([big, small]) => (
                    <div
                      key={big}
                      className="
                        h-[110px] rounded-2xl bg-black/20 backdrop-blur-md
                        px-5 py-4 shadow-md ring-1 ring-white/10
                        flex flex-col justify-center
                      "
                    >
                      <div className="text-[22px] font-semibold leading-none">{big}</div>
                      <div className="text-white/85 text-[13px] mt-2 leading-none">{small}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT (form card) */}
            <div
              ref={formRef}
              className={cn(
                "lg:justify-self-end w-full max-w-[562px]",
                "transform-gpu will-change-transform",
                "transition-[transform,opacity] duration-[900ms]",
                "ease-[cubic-bezier(0.22,1,0.36,1)]",
                showForm ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
              )}
            >
              <div className="rounded-[22px] bg-white/95 backdrop-blur-md ring-1 ring-white/60 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.55)]">
                <BookingFormCard />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (prefers-reduced-motion: reduce){
          [class*="transition-"]{ transition: none !important; }
          .translate-x-16{ transform: none !important; }
        }
      `}</style>
    </section>
  );
}