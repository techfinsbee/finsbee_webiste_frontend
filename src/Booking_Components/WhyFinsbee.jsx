'use client';

import { useEffect, useRef, useState } from "react";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 639px)"); // Tailwind 'sm' breakpoint
    const update = () => setIsMobile(mql.matches);
    update();
    if (mql.addEventListener) mql.addEventListener("change", update);
    else mql.addListener(update);
    return () => {
      if (mql.removeEventListener) mql.removeEventListener("change", update);
      else mql.removeListener(update);
    };
  }, []);
  return isMobile;
}

/** Single card */
function FeatureCard({
  iconSrc,
  title,
  desc,
  hoverImage,
  tint = "rgba(89,46,255,0.78)",
  phase = "idle", // 'idle' → show icon, 'hover' → overlay up
}) {
  const isHover = phase === "hover";
  return (
    // fill the column
    <div className="relative group h-full w-full">
      {/* default state (hide on hover/active) */}
      <div
        className="relative z-10 sm:w-[378px] w-full mx-auto text-center px-6 mt-28 transition-opacity duration-300 group-hover:opacity-0"
        style={{ opacity: isHover ? 0 : undefined }}
      >
        <span className="inline-grid place-items-center w-24 h-24 rounded-full bg-[#ffc73c] shadow">
          <img src={iconSrc} alt="" className="w-10 h-10 object-contain" />
        </span>
        <h4 className="text-xl font-semibold text-[#0f172a]">{title}</h4>
      </div>

      {/* hover overlay: full width on mobile, 378 on desktop */}
      <div
        className="absolute left-0 top-0 bottom-0 sm:w-[378px] w-full overflow-hidden pointer-events-none"
        aria-hidden
      >
        <div
          className={[
            "absolute inset-0",
            isHover ? "translate-y-0" : "translate-y-full",
            "group-hover:translate-y-0",
            "transition-transform duration-[520ms] ease-out will-change-transform",
          ].join(" ")}
          style={{
            backgroundImage: hoverImage
              ? `linear-gradient(${tint}, ${tint}), url("${hoverImage}")`
              : `linear-gradient(${tint}, ${tint})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 p-6 sm:p-8 flex items-end">
            <div className="text-white text-left max-w-[26ch]">
              <div className="text-sm font-medium opacity-90">{title}</div>
              <div className="mt-3 text-[28px] leading-[1.2] font-semibold">
                {desc}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Whole section */
export default function WhyFinsbeeHover({
  heading = "Why",
  subheading = "Finsbee?",
  quote = "Financial mistakes are expensive. Good advice pays for itself",
  items = [
    { iconSrc: "/booking/independent.png", title: "Independent Advice", desc: "We work for you, not the banks.", hoverImage: "/booking/advice.webp" },
    { iconSrc: "/booking/transparency.png", title: "Complete Transparency", desc: "No hidden charges or surprises.", hoverImage: "/booking/hidden-charge.webp" },
    { iconSrc: "/booking/client.png", title: "Tailored Recommendations", desc: " Every suggestion is based on your personal needs and goals.", hoverImage: "/booking/tailored-for-you.webp " },
    { iconSrc: "/booking/action.png", title: "Action-oriented", desc: " Your hard work deserves the right guidance.", hoverImage: "/booking/action-oriented.webp" },
  ],
}) {
  const isMobile = useIsMobile();
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState("idle"); // 'idle' (icon) → 'hover' (overlay)

  // timing (ms)
  const ICON_DELAY = 900;        // time showing icon before overlay
  const HOVER_DWELL = 1100;      // time to keep overlay visible
  const HOVER_ANIM = 520;        // CSS duration of overlay slide-up
  const RM = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Orchestrated autoplay on mobile only: show icon → overlay → next slide
  useEffect(() => {
    if (!isMobile || RM) return; // Desktop keeps original hover; reduced motion: do nothing
    let t1, t2;
    setPhase("idle");
    t1 = setTimeout(() => setPhase("hover"), ICON_DELAY);
    t2 = setTimeout(() => {
      setIndex((i) => (i + 1) % items.length);
    }, ICON_DELAY + HOVER_DWELL + HOVER_ANIM + 80); // small buffer after anim
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [index, isMobile, RM, items.length]);

  // Swipe navigation
  const startX = useRef(null);
  const onTouchStart = (e) => (startX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (startX.current == null) return;
    const dx = e.changedTouches[0].clientX - startX.current;
    if (Math.abs(dx) > 40) {
      setIndex((i) => (dx > 0 ? (i - 1 + items.length) % items.length : (i + 1) % items.length));
    }
    startX.current = null;
  };

  return (
    <section className="relative  overflow-hidden  pb-12 lg:pb-24">
      {/* section container */}
      <div className="mx-auto w-full max-w-[1512px] px-0  ">
        {/* heading block */}
        <div className="mx-auto w-[1140px]  grid place-content-center gap-8 text-center max-sm:w-full">
          <div>
            <h3 className="text-[24px] sm:text-[28px] font-semibold whitespace-nowrap">
              <span className="text-[#0f172a]">{heading}</span>{" "}
              <span className="text-[#592eff]">{subheading}</span>
            </h3>

            <div className="mx-auto mt-2 h-[3px] w-40 rounded-full bg-[#ffc73c]" />
          </div>
          <div className="inline-block rounded-md  border border-dashed border-black/25 px-4 py-2 text-[18px] text-black/70 max-sm:mx-6">
            “{quote}”
          </div>
        </div>

        {/* Cards */}
        {isMobile ? (
          // MOBILE: full-width autoplay carousel (icon first, then overlay)
          <div className="relative mt-12 h-[440px] overflow-hidden" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            <div
              className="flex h-full transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {items.map((it, i) => (
                <div key={i} className="min-w-full flex items-stretch justify-center">
                  <FeatureCard {...it} phase={i === index ? phase : "idle"} />
                </div>
              ))}
            </div>
            {/* dots */}
            <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
              {items.map((_, i) => (
                <span
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all duration-200 ${i === index ? "w-6 bg-[#ffc73c]" : "w-2 bg-black/20"}`}
                />
              ))}
            </div>
          </div>
        ) : (
          // DESKTOP: original 4-column hover grid
          <div className="mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 h-full lg:h-[440px]">
            {items.map((it, i) => (
              <div
                key={i}
                className={[
                  "relative h-full min-w-0 flex items-stretch",
                  // left divider on all but first
                  i > 0
                    ? "lg:before:content-[''] lg:before:absolute lg:before:left-0 lg:before:top-0 lg:before:bottom-16 lg:before:w-px lg:before:bg-black/15"
                    : "",
                ].join(" ")}
              >
                <FeatureCard {...it} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* no-motion respect */}
      <style>{`
        @media (prefers-reduced-motion: reduce){
          .group:hover .translate-y-full{ transform: none !important; }
          .group .translate-y-full{ transform: none !important; }
        }
      `}</style>
    </section>
  );
}