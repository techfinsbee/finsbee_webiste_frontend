import React, { useEffect, useRef, useState } from "react";

// -------------------- Tunables --------------------
const STAGE_H = 807;          // keep your stage height
const CARD_W = 648;
const CARD_H = 448;
const CARD_H_MOBILE = 420;    // slightly shorter on mobile
const CARD_TOP = 12;
const STACK_SPACING_X = 24;   // desktop: left offset between stacked (past) cards
const STACK_SPACING_Y = 20;   // mobile: upward offset between stacked (past) cards
const OFFSCREEN_VW = 28;      // desktop: how far the incoming card starts from the right
const OFFSCREEN_VH = 36;      // mobile: how far the incoming card starts from the bottom

// How faint should past cards be
const PAST_CONTENT_OPACITY = 0.45;

// Delay before a new card starts entering (fraction of its slice)
const PAUSE_FRAC = 0.38;

const STEPS = [
  { tag: "Understand your goals", tiny: "(call or visit)", text: "Housing, Education, Car, Emergency fund, Retirement, or Debt reduction." },
  { tag: "Map your current profile", tiny: "(income, credit, existing loans)", text: "We assess your eligibility and surface quick wins to strengthen your file." },
  { tag: "Build a clear action plan", tiny: "(offers, paperwork, timelines)", text: "Side-by-side comparisons and a step-by-step plan tailored to you." },
  { tag: "Execute & track", tiny: "(follow-ups, checks, improvements)", text: "We help you complete the journey and keep things on track over time." },
];

// Light → dark for the four steps
const CARD_COLORS = ["#fff6e1", "#ffe9be", "#ffd98e", "#f8c960"];

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;

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

function useGateSnap(hostRef) {
  useEffect(() => {
    const root = document.scrollingElement || document.documentElement;
    const prev = root.style.scrollSnapType;
    const enable = () => (root.style.scrollSnapType = "y mandatory");
    const disable = () => (root.style.scrollSnapType = "none");

    let alignedOnce = false;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stop exactly on this section the first time it appears
          if (!alignedOnce) {
            alignedOnce = true;
            entry.target.scrollIntoView({ behavior: "smooth", block: "start" });
          }
          // While HIW is visible, disable page snap so internal scroller works
          disable();
        } else {
          enable();
          alignedOnce = false;
        }
      },
      { threshold: 0.3 }
    );

    if (hostRef.current) io.observe(hostRef.current);
    return () => {
      io.disconnect();
      root.style.scrollSnapType = prev;
    };
  }, [hostRef]);
}

export default function HowItWorksScroll() {
  const hostRef = useRef(null);
  useGateSnap(hostRef);

  const isMobile = useIsMobile();
  const N = STEPS.length;

  const scrollerRef = useRef(null);
  const [g, setG] = useState(0); // global 0..1 progress within the internal scroller
  const [hoverIndex, setHoverIndex] = useState(null);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      const total = el.scrollHeight - el.clientHeight;
      setG(total > 0 ? clamp(el.scrollTop / total, 0, 1) : 0);
    };
    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // A helper to compute the “current stage” index respecting the pause.
  const slice = 1 / N;
  const pausedCutoffFor = (k) =>
    (k < N - 1 ? (k + 1) * slice + PAUSE_FRAC * slice : 1.0001);

  // Which stage are we in (who is the latest not-yet-past card)?
  const currentStageIdx = (() => {
    for (let k = 0; k < N; k++) {
      if (g < pausedCutoffFor(k)) return k;
    }
    return N - 1;
  })();

  const stepNumber = String(currentStageIdx + 1).padStart(2, "0");
  const brand = { purple: "#8b5cf6", purpleSoft: "#e9e5fb" };

  const handleWheel = (e) => {
    const el = scrollerRef.current;
    if (!el) return;
    const atTop = el.scrollTop <= 0;
    const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
    // Allow page to scroll only at edges
    if ((atTop && e.deltaY < 0) || (atBottom && e.deltaY > 0)) {
      window.scrollBy({ top: e.deltaY, left: 0, behavior: "auto" });
      e.preventDefault();
    }
  };

  return (
    <section
      ref={hostRef}
      className="relative bg-white"
      style={{
        minHeight: "100vh",
        scrollSnapAlign: "start",
        scrollSnapStop: "always",
      }}
    >
      <div
        ref={scrollerRef}
        onWheel={handleWheel}
        className="absolute inset-0 overflow-y-auto overscroll-y-contain"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
      >
        <style>{`[data-hiw]::-webkit-scrollbar{display:none}`}</style>

        {/* Internal scroll area to generate 0..1 progress */}
        <div data-hiw style={{ height: STAGE_H * N, position: "relative" }}>
          <div className="sticky top-0" style={{ height: STAGE_H }}>
            <div className="relative h-full max-w-6xl mx-auto px-6 lg:px-8">
              <div className="grid grid-rows-[auto,1fr] h-full">
                {/* Header */}
                <header className="pt-6 text-center">
                  <h3 className="text-[28px] sm:text-[32px] font-semibold">
                    How <span style={{ color: brand.purple }}>Finsbee Works?</span>
                  </h3>

                  <style>{`
                    @keyframes dot-blink {
                      0%, 100% { transform: scale(1); }
                      50% { transform: scale(1.15); }
                    }
                  `}</style>
                  <div className="mt-4 mx-auto max-w-[940px]">
                    <div className="relative h-[2px] rounded-full" style={{ backgroundColor: brand.purpleSoft }}>
                      <div className="absolute inset-0 flex items-center justify-between px-[2px]">
                        {Array.from({ length: N }).map((_, i) => {
                          const isBlink = hoverIndex === i;
                          const on = isBlink || i === currentStageIdx;
                          return (
                            <span
                              key={i}
                              className="block h-4 w-4 rounded-full"
                              style={{
                                backgroundColor: on ? brand.purple : brand.purpleSoft,
                                boxShadow: on ? `0 0 0 6px ${brand.purpleSoft}` : "none",
                                transition: "background-color 140ms linear, box-shadow 140ms linear",
                                animation: isBlink ? "dot-blink 1s ease-in-out infinite" : "none",
                              }}
                              aria-label={`Step ${i + 1}`}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </header>

                {/* Stage */}
                <main className="relative pt-6 flex items-start mt-20">
                  {/* Step number (hidden on mobile) */}
                  <div className="hidden sm:block mr-6 shrink-0 pt-10">
                    <div className="w-20 text-[54px] font-semibold text-black/85 text-center mt-28">
                      {stepNumber}
                    </div>
                  </div>

                  {/* Cards */}
                  <div className="relative flex-1 pt-6">
                    <div className="relative w-full max-w-[648px] mx-auto">
                      {STEPS.map((s, i) => {
                        // Natural slice boundaries
                        const start = i * slice;
                        const end = (i + 1) * slice;

                        // Entry is delayed (except the first card)
                        const enterAbs = i === 0 ? start : start + PAUSE_FRAC * slice;
                        const nextEnterAbs = i < N - 1 ? (i + 1) * slice + PAUSE_FRAC * slice : 1.0001;

                        // Phases
                        const isFuture = g < enterAbs;
                        const isActive = g >= enterAbs && g < nextEnterAbs;
                        const isPast   = g >= nextEnterAbs;

                        // While active:
                        // - If within its natural slice, slide in from offscreen.
                        // - After its slice ends (g > end) but before next card enters,
                        //   keep the card centered (effectiveLocal = 1).
                        let effectiveLocal = 0;
                        if (g <= end) {
                          const denom = Math.max(0.0001, end - enterAbs);
                          effectiveLocal = clamp((g - enterAbs) / denom, 0, 1);
                        } else {
                          effectiveLocal = 1; // hold centered during pause
                        }

                        // Distances
                        const slideVw = (1 - effectiveLocal) * OFFSCREEN_VW; // desktop right -> center
                        const slideVh = (1 - effectiveLocal) * OFFSCREEN_VH; // mobile  bottom -> center

                        // Past/stack interpolation (smooth glide)
                        const pastLocal = clamp((g - nextEnterAbs) / slice, 0, 1);

                        // How deep to stack compared to the latest stage
                        const stackDepth = Math.max(0, currentStageIdx - i + 1);
                        const stackDxFull = -STACK_SPACING_X * stackDepth;
                        const stackDyFull = -STACK_SPACING_Y * stackDepth;

                        const stackDx = lerp(0, stackDxFull, pastLocal);
                        const stackDy = lerp(0, stackDyFull, pastLocal);

                        // Pure scroll-driven transform (no transform easing)
                        const transform = isMobile
                          ? (isActive
                              ? `translateX(-50%) translateY(${slideVh}vh)`      // bottom -> center
                              : isPast
                                ? `translateX(-50%) translateY(${stackDy}px)`    // glide upward into stack
                                : `translateX(-50%) translateY(${OFFSCREEN_VH}vh)`)
                          : (isActive
                              ? `translateX(-50%) translateX(${slideVw}vw)`      // right -> center
                              : isPast
                                ? `translateX(-50%) translateX(${stackDx}px)`    // glide left into stack
                                : `translateX(-50%) translateX(${OFFSCREEN_VW}vw)`);

                        const zIndex = isActive ? 30 : isPast ? (10 + i) : 0;

                        return (
                          <div
                            key={i}
                            className="absolute rounded-2xl"
                            onMouseEnter={() => setHoverIndex(i)}
                            onMouseLeave={() => setHoverIndex(null)}
                            style={{
                              top: CARD_TOP,
                              left: "50%",
                              width: isMobile ? "min(92vw, 648px)" : CARD_W,
                              height: isMobile ? CARD_H_MOBILE : CARD_H,
                              backgroundColor: CARD_COLORS[i % CARD_COLORS.length],
                              transform,
                              opacity: isFuture ? 0 : 1,
                              zIndex,
                              boxShadow: "0 14px 26px rgba(0,0,0,0.18)",
                              // No transform easing — let scroll drive it
                              transition: "opacity 180ms linear",
                              willChange: "transform",
                              pointerEvents: isActive ? "auto" : "none",
                            }}
                            aria-hidden={!isActive}
                          >
                            {/* Content stays fully visible while active; faint when past */}
                            <div
                              className="px-8 pt-8"
                              style={{
                                opacity: isActive ? 1 : isPast ? PAST_CONTENT_OPACITY : 0,
                                transition: "opacity 180ms linear",
                              }}
                            >
                              <div className="inline-flex items-center rounded-full bg-white text-[14px] font-semibold px-4 py-2 shadow-sm">
                                {s.tag}
                              </div>
                              <div className="mt-2 text-[14px] text-black/70">{s.tiny}</div>
                              <p className="mt-4 text-[40px] leading-[1.2] text-black/80">{s.text}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>
          {/* end sticky */}
        </div>
      </div>
    </section>
  );
}
