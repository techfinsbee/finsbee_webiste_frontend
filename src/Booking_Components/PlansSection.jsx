"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap"; // Import GSAP
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

/* Global helpers: hide mobile scrollbar + bullet styling */
const ExtraStyles = () => (
  <style>{`
    .no-scrollbar::-webkit-scrollbar{display:none}
    .no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}
    .bullet{position:relative;padding-left:14px;line-height:1.45}
    .bullet::before{
      content:"";position:absolute;left:0;top:0.68em;transform:translateY(-50%);
      width:6px;height:6px;border-radius:9999px;background:currentColor;
    }
    .ease-smooth{transition-timing-function:cubic-bezier(.22,.61,.36,1)}
  `}</style>
);

const plans = [
  {
    id: "quick",
    price: "₹99",
    title: "Quick Advice Call",
    sub: "15 minutes · Google Meet",
    booking: "same day or within 24 hours.",
    slots:
      "Slots are available between 10:00 AM – 7:00 PM IST (Mon–Sat). Example slots: 10:00 · 10:15 · 10:30 · … · 6:45 PM",
    bestFor:
      "Quick doubts, comparing offers, understanding terms and next steps.",
    hover: {
      headline: "What you get",
      points: [
        "Direct answers to specific questions on loans, insurance, or investments",
        "Quick comparison of loan offers (processing fees, prepayment, foreclosure, hidden charges)",
        "EMI estimates and repayment strategy suggestions",
        "Clarity on term insurance, health insurance coverage basics, and mutual fund categories",
        "A 1-page action summary sent by WhatsApp/email after the call",
      ],
      cta: "Book Quick Call",
    },
    animateFrom: "left",
  },
  {
    id: "home",
    price: "₹399",
    badge: "Most Popular",
    title: "Home-Visit",
    sub: "Financial consultation at your doorstep. One-on-one at your location",
    booking: "11:00 AM – 6:00 PM IST (Mon–Sat).",
    slots: "Home visits are available at selected locations (Delhi,Noida,Gurugram).",
    bestFor:
      "In-depth discussions, paperwork clarity, and building a plan you can execute.",
    hover: {
      headline: "Included",
      points: [
        "A complete review of your financial profile (income, obligations, credit history)",
        "Personalized recommendations for loans, insurance, and investments aligned to your goals",
        "Document review + a practical document checklist",
        "A custom plan (PDF) with next steps, lender shortlists, and policy/portfolio suggestions",
        "Option to include a family decision-maker in the discussion",
      ],
      cta: "Schedule Visit",
    },
    animateFrom: "center",
  },
  {
    id: "premium",
    price: "₹599",
    title: "Premium Monthly Support",
    sub: "Calls + follow-ups · Home visits",
    booking: "same day or within 24 hours.",
    slots: null,
    bestFor:
      "Ongoing guidance, improving credit score and loan eligibility, and maintaining a healthy financial plan year-round.",
    hover: {
      headline: "Monthly perks",
      points: [
        "Scheduled strategy sessions across the month (phone/Meet)",
        "Priority check-ins on WhatsApp/email between sessions",
        "Home visits as needed (within service area)",
        "Personalized loan & insurance recommendations with periodic review",
        "Credit score (CIBIL) improvement roadmap and lender-readiness checklist",
        "Quarterly portfolio/coverage check (mutual funds, term, health)",
        "Access to curated resources: EMI planner, debt-reduction plan, and goal tracker",
      ],
      cta: "Start Premium",
    },
    animateFrom: "right",
  },
];

function Divider({ featured }) {
  return (
    <div className={featured ? "h-px bg-white/20 my-4" : "h-px bg-black/10 my-4"} />
  );
}

function PlanCard({
  price,
  badge,
  title,
  sub,
  booking,
  slots,
  bestFor,
  hover,
  featured = false,
  className = "",
  innerRef,
}) {
  const isFeatured = featured || !!badge;
  const baseBg = isFeatured ? "bg-[#592eff]" : "bg-white";
  const baseText = isFeatured ? "text-white" : "text-black";

  return (
    <div
      ref={innerRef}
      className={[
        "plan-card w-[84vw] max-w-[360px] md:w-[353px] h-[580px] shrink-0 group relative rounded-2xl",
        "border border-purple-500/20 overflow-visible",
        baseBg,
        baseText,
        "px-6 sm:px-7 pb-6 sm:pb-7 pt-10",
        "shadow-[0_10px_30px_-10px_rgba(0,0,0,0.25)]",
        "transition-all duration-300 ease-smooth",
        className,
      ].join(" ")}
    >
      {badge && (
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 z-30">
          <div className="relative">
            <span
              aria-hidden
              className="absolute left-1/2 -bottom-2 -translate-x-1/2 h-2 w-24 rounded-full bg-black/25 opacity-30 blur-md"
            />
            <span className="inline-flex items-center rounded-full bg-[#ffc73c] text-black text-xs font-semibold px-3 py-1 shadow-[0_6px_18px_rgba(0,0,0,0.25)] ring-1 ring-black/5">
              {badge}
            </span>
          </div>
        </div>
      )}

      {!isFeatured && (
        <div
          aria-hidden
          className="absolute inset-0 rounded-2xl z-[1] origin-bottom scale-y-0 bg-[#FFD98E] transition-transform duration-300 ease-smooth group-hover:scale-y-100"
        />
      )}

      {/* DEFAULT CONTENT */}
      <div className="relative z-10 mb-10 space-y-4 transition-all duration-[420ms] ease-smooth group-hover:opacity-0 group-hover:translate-y-2">
        <div className={isFeatured ? "text-white/90" : "text-black/80"}>
          <span className="mr-1">Only@</span>
          <span className="font-semibold text-[32px]">{price}</span>
        </div>

        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className={isFeatured ? "text-white/90" : "text-black/70"}>{sub}</p>
        </div>

        <Divider featured={isFeatured} />

        <div className="space-y-3 text-sm">
          <div>
            <div className="font-medium">Booking Window:</div>
            <p className={isFeatured ? "text-white/90" : "text-black/70"}>{booking}</p>
          </div>

          {slots && (
            <>
              <Divider featured={isFeatured} />
              <div>
                <div className="font-medium">Available Slots:</div>
                <p className={isFeatured ? "text-white/90" : "text-black/70"}>{slots}</p>
              </div>
            </>
          )}

          {bestFor && (
            <>
              <Divider featured={isFeatured} />
              <div>
                <div className="font-medium">Best for:</div>
                <p className={isFeatured ? "text-white/90" : "text-black/70"}>{bestFor}</p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* HOVER CONTENT */}
      <div
        className={[
          "absolute inset-0 rounded-2xl z-20 flex flex-col justify-end",
          "px-6 sm:px-7 pb-6 sm:pb-7 pt-10",
          "opacity-0 translate-y-3 pointer-events-none",
          "transition-all duration-[420ms] ease-smooth",
          "group-hover:opacity-100 group-hover:translate-y-0 mb-20 group-hover:pointer-events-auto",
          isFeatured ? "text-white" : "text-black",
        ].join(" ")}
      >
        <h3 className="text-2xl font-semibold">{hover.headline}</h3>
        <ul className="mt-3 space-y-2 text-sm">
          {hover.points.map((p) => (
            <li key={p} className="bullet">
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function PlansSection({
  bgImage = "/booking/planbg.png",
  overlay = "linear-gradient(0deg, rgba(255,255,255,0.45), rgba(255,255,255,0.45))",
  overlayOpacity = 1,
  bgFit = "cover",
  bgPosition = "center top",
}) {
  const mobileTrackRef = useRef(null);
  const desktopRef = useRef(null);

  useEffect(() => {
    const isDesktop =
      typeof window !== "undefined" &&
      window.matchMedia("(min-width: 768px)").matches;
    if (!isDesktop) return;

    const scope = desktopRef.current;
    if (!scope) return;

    const left = scope.querySelector('[data-animate="left"]');
    const center = scope.querySelector('[data-animate="center"]');
    const right = scope.querySelector('[data-animate="right"]');
    const ease = "power3.out";

    if (left) {
      gsap.fromTo(
        left,
        { x: -60, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.6,
          ease,
          immediateRender: false,
          scrollTrigger: { trigger: left, start: "top 92%", once: true },
        }
      );
    }
    if (center) {
      gsap.fromTo(
        center,
        { y: 16, autoAlpha: 1 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.6,
          ease,
          immediateRender: false,
          scrollTrigger: { trigger: center, start: "top 94%", once: true },
        }
      );
    }
    if (right) {
      gsap.fromTo(
        right,
        { x: 60, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.6,
          ease,
          immediateRender: false,
          scrollTrigger: { trigger: right, start: "top 92%", once: true },
        }
      );
    }
  }, []);

  useEffect(() => {
    const isMobile =
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 767px)").matches;
    if (!isMobile) return;

    const track = mobileTrackRef.current;
    if (!track) return;

    const slides = Array.from(track.querySelectorAll(".plan-card"));
    if (!slides.length) return;

    let idx = 0;
    const go = (i) => {
      const el = slides[i];
      if (!el) return;
      track.scrollTo({
        left: el.offsetLeft - track.offsetLeft,
        behavior: "smooth",
      });
    };

    const timer = setInterval(() => {
      idx = (idx + 1) % slides.length;
      go(idx);
    }, 2600);

    const pause = () => clearInterval(timer);
    track.addEventListener("touchstart", pause, { passive: true });
    track.addEventListener("mousedown", pause);

    return () => {
      clearInterval(timer);
      track.removeEventListener("touchstart", pause);
      track.removeEventListener("mousedown", pause);
    };
  }, []);

  return (
    <section id="plans" className="relative z-0">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage: `url("${bgImage}")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: bgPosition,
            backgroundSize:
              bgFit === "actual"
                ? "auto"
                : bgFit === "contain"
                ? "contain"
                : "cover",
          }}
        />
        {overlayOpacity > 0 && (
          <div
            aria-hidden
            className="absolute inset-0"
            style={{ background: overlay, opacity: overlayOpacity }}
          />
        )}
      </div>

      <ExtraStyles />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-black">
            <span className="relative inline-block mx-auto">
              Our{" "}
              <a href="#plans" className="text-[#592eff] no-underline">
                Plans
              </a>
              <span
                aria-hidden
                className="block mx-auto mt-2 w-[169px] h-0 border-b-[4px] border-[#ffc73c]"
              />
            </span>
          </h2>
        </div>

        <div className="md:hidden -mx-4">
          <div
            ref={mobileTrackRef}
            className="flex gap-4 px-4 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth"
          >
            {plans.map((p) => (
              <PlanCard
                key={p.id}
                {...p}
                className="snap-center"
                featured={!!p.badge}
              />
            ))}
          </div>
        </div>

        <div
          ref={desktopRef}
          className="hidden md:flex justify-center gap-5 lg:gap-7"
        >
          {plans.map((p) => (
            <PlanCard
              key={p.id}
              {...p}
              featured={!!p.badge}
              innerRef={(el) =>
                el && el.setAttribute("data-animate", p.animateFrom)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}