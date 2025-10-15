'use client';

import { useEffect, useState, useRef } from 'react';
import PlansSection from './PlansSection';
import BookingHero from './BookingHero';
import HowItWorksScroll from './HowItWorkSection';
import WhyFinsbeeHover from './WhyFinsbee';
import FaqSection from './FaqSection';
import SupportSection from './SupportSection';


/* ========= Rotating Gold Text ========= */
function RotatingGoldText({ items, delay = 2200, className = '' }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % items.length), delay);
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

/* ========= Snap Gating for Section ========= */
function useGateSnapForSection(sectionId) {
  useEffect(() => {
    const root = document.scrollingElement || document.documentElement;

    const prev = root.style.scrollSnapType;
    const enable = () => { root.style.scrollSnapType = 'y mandatory'; };
    const disable = () => { root.style.scrollSnapType = 'none'; };

    enable();

    const el = document.getElementById(sectionId);
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) disable();
        else enable();
      },
      { threshold: [0.2, 0.5, 0.8] }
    );

    obs.observe(el);
    return () => {
      obs.disconnect();
      root.style.scrollSnapType = prev;
    };
  }, [sectionId]);
}

/* ========= Tiny CSS (Shimmer + Fade) ========= */
const GoldTextStyles = () => (
  <style>{`
    .animated-gold-text {
      background-image: linear-gradient(90deg, #ffc73c 100%, #fff1a6 100%, #ffc73c 100%);
      background-size: 200% 100%;
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      animation: gold-run 2.8s linear infinite;
      white-space: nowrap;
    }
    @keyframes gold-run {
      0% { background-position: 0% 50%; }
      100% { background-position: -200% 50%; }
    }
    .fade-in { animation: fadeIn 0.55s ease both; }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }
  `}</style>
);

/* ========= Image-Skinned Buttons ========= */
const ImgButtonShell = ({ src, as = 'button', className = '', style, children, ...rest }) => {
  const Comp = as;
  return (
    <Comp
      {...rest}
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ aspectRatio: style?.aspectRatio, ...style }}
    >
      <img
        src={src}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-contain pointer-events-none"
        draggable="false"
      />
      <span className="relative z-10">{children}</span>
    </Comp>
  );
};

const TextLinkButton = ({ href = '/' }) => (
  <ImgButtonShell
    as="a"
    href={href}
    src="/booking/text-button.svg"
    className="w-[130px] sm:w-[155px]"
    style={{ aspectRatio: '155/26' }}
  />
);

const PrimaryButton = ({ children, ...props }) => (
  <ImgButtonShell
    as="button"
    src="/booking/primary-button.svg"
    className="w-[210px] sm:w-[285px]"
    style={{ aspectRatio: '285/58' }}
    {...props}
  >
    {children ? <span className="text-black text-sm sm:text-base font-medium px-3">{children}</span> : null}
  </ImgButtonShell>
);

/* ========= Scroll to Booking ========= */
function goToBooking() {
  const el = document.getElementById('booking');
  if (!el) {
    window.location.hash = '#booking';
    return;
  }

  const root = document.scrollingElement || document.documentElement;
  const prevSnap = root.style.scrollSnapType;
  root.style.scrollSnapType = 'none';

  el.scrollIntoView({ behavior: 'smooth', block: 'start' });

  setTimeout(() => {
    root.style.scrollSnapType = prevSnap || '';
  }, 700);

  setTimeout(() => {
    const firstFocusable = el.querySelector(
      'input, select, textarea, button, [tabindex]:not([tabindex="-1"])'
    );
    firstFocusable?.focus({ preventScroll: true });
  }, 750);
}

/* ========= Hero Section ========= */
function ConsultantHero() {
  return (
    <section className="relative min-h-screen overflow-visible">
      <style>{`
        @media screen and (max-width: 620px) {
          html, body {
            padding-top: 0px !important;
          }
        }
      `}</style>
      <GoldTextStyles />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/booking/background.jpg")' }}
        aria-hidden="true"
      />
      <div className="absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="flex items-center justify-between">
          <span className="hidden sm:inline-block">
            <TextLinkButton href="/" />
          </span>
          <PrimaryButton onClick={goToBooking} />
        </div>

        <div className="relative pb-24 lg:pb-28 -mb-24 lg:-mb-28">
          <div className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="text-white mb-0 lg:mb-28">
              <h1 className="font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.2] sm:leading-[1.2] lg:leading-[1.15]">
                <span className="block">Behind every</span>
                <span className="block mt-2 sm:mt-3">rupee you earn is</span>
                <span className="block mt-2 sm:mt-3">
                  <RotatingGoldText
                    items={['your hard work', 'your time', 'your family\'s hopes']}
                    delay={2200}
                  />
                </span>
              </h1>
              <p className="mt-6 text-[32px] text-white/90 max-w-xl">
                We’ll protect it like our own–
              </p>
              <p className="mt-1 text-[24px] text-white/80 max-w-xl">
                Buy our plan today and secure every rupee you’ve worked for
              </p>
            </div>

            <div className="relative mt-10">
              <div
                className="
                  ml-auto w-full max-w-[436px] rounded-[28px] overflow-hidden bg-white shadow-xl
                  ring-1 ring-black/5 translate-y-8 lg:translate-y-12 relative z-20
                "
              >
                <img
                  src="/booking/main.svg"
                  alt="Happy customers talking with consultant"
                  className="w-[436px] h-[630px] object-cover"
                />
              </div>

              {/* Badges */}
              <div className="absolute -left-4 mt-28 top-16 z-30 ml-0 sm:ml-40 sm:-left-10">
                <div className="flex items-center gap-3 rounded-2xl bg-white/50 backdrop-blur px-8 py-6 shadow-lg border border-black/5">
                  <div className="flex -space-x-2">
                    <img src="/booking/av1.svg" alt="" className="w-8 h-8 rounded-full object-cover ring-2 ring-white" />
                    <img src="/booking/av2.svg" alt="" className="w-8 h-8 rounded-full object-cover ring-2 ring-white" />
                    <img src="/booking/av3.svg" alt="" className="w-8 h-8 rounded-full object-cover ring-2 ring-white" />
                  </div>
                  <div className="leading-tight">
                    <div className="text-[#592eff] font-semibold text-sm">2k+</div>
                    <div className="text-black/70 text-[12px]">Already Benefit</div>
                  </div>
                </div>
              </div>

              <div className="absolute right-0 mb-32 sm:-right-6 bottom-6 z-30">
                <div className="rounded-2xl bg-white/50 backdrop-blur px-8 py-6 shadow-lg border border-black/5">
                  <div className="text-[#592eff] font-semibold text-sm">99%</div>
                  <div className="text-black/70 text-[12px] -mt-0.5">Customer Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========= Enable Viewport Snap ========= */
function useEnableViewportSnap(type = 'y mandatory') {
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const scroller = document.scrollingElement || html;

    const prevHtml = html.style.scrollSnapType;
    const prevBody = body.style.scrollSnapType;
    const prevScroller = scroller.style.scrollSnapType;

    html.style.scrollSnapType = type;
    body.style.scrollSnapType = type;
    scroller.style.scrollSnapType = type;

    return () => {
      html.style.scrollSnapType = prevHtml;
      body.style.scrollSnapType = prevBody;
      scroller.style.scrollSnapType = prevScroller;
    };
  }, [type]);
}

/* ========= Main Component ========= */
export default function ConsultantLandingPage() {
  useGateSnapForSection('hiw-snap');

  return (
    <main className="snap-y snap-mandatory">
      <section className="snap-start">
        <ConsultantHero />
      </section>

      <section className="snap-start">
        <PlansSection/>
      </section>

      <section id="booking" className="snap-start">
        <BookingHero/>
      </section>

      <section
        id="hiw-snap"
        className="snap-start"
        style={{
          minHeight: '100vh',
          overscrollBehaviorY: 'contain',
          position: 'relative',
        }}
      >
        <HowItWorksScroll/>
      </section>

      <section className="snap-start">
        <WhyFinsbeeHover/>
      </section>

      <section className="snap-start">
        <FaqSection/>
      </section>
      <section className="snap-start">
       <SupportSection/>
      </section>

      
    </main>
  );
}