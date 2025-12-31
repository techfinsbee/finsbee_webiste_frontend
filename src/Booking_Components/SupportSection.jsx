'use client';

export default function SupportSection() {
  // Function to handle smooth scroll without snap fighting
  const scrollToNoSnap = (targetId) => {
    const element = document.querySelector(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative overflow-hidden min-h-[804px]">
      {/* Background image (doesn't block clicks) */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: 'url("/booking/contact_bg.webp")' }}
    
        aria-hidden="true"
      />
      {/* Purple overlay (doesn't block clicks) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, rgba(15,0,85,0.85) 0%, rgba(15,0,85,0.82) 45%, rgba(15,0,85,0.80) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 mt-20 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-4 items-center">
          {/* LEFT: Headline + CTA */}
          <div className="mt-8 text-white">
            <h2 className="font-semibold leading-tight text-[36px] sm:text-[48px] lg:text-[64px]">
              Let’s <span className="text-[#ffc73c]">connect</span>
              <br />
              and collaborate
            </h2>

            {/* Underline bar */}
            <div className="mt-4 h-[10px] w-[295px] sm:w-[384px] bg-[#ffc73c] rounded-full" />

            {/* Custom image button → scroll to #booking */}
            <div className="mt-8">
              <button
                onClick={() => scrollToNoSnap('#booking')}
                className="text-white font-semibold"
                aria-label="Scroll to booking section"
              >
                {/* Replace with your ImageCTA component or image */}
                <span>Contact Us</span>
              </button>
            </div>
          </div>

          {/* RIGHT: Contact card */}
          <div className="lg:justify-self-end w-full max-w-[560px]">
            <div className="rounded-xl border border-white/40 bg-white/5 backdrop-blur-md text-white divide-y divide-white/30">
              {/* Row 1: WhatsApp/Call */}
              <div className="px-8 py-10">
                <div className="text-white/80 text-sm mb-2 text-center">
                  WhatsApp/ Call
                </div>
                <a
                  href="tel:+919876543210"
                  className="block text-center text-2xl font-semibold hover:underline"
                >
                  +91 98765 43210
                </a>
              </div>

              {/* Row 2: Email */}
              <div className="px-8 py-10">
                <div className="text-white/80 text-sm mb-2 text-center">Email</div>
                <a
                  href="mailto:support@finsbee.com"
                  className="block text-center text-2xl font-semibold hover:underline break-all"
                >
                  support@finsbee.com
                </a>
              </div>

              {/* Row 3: Hours */}
              <div className="px-8 py-10">
                <div className="text-white/80 text-sm mb-2 text-center">Hours</div>
                <div className="text-center text-2xl font-semibold">
                  Mon–Sat, 10:00–19:00 (IST)
                </div>
              </div>

              {/* Row 4: Locations */}
              <div className="px-8 py-10">
                <div className="text-white/80 text-sm mb-2 text-center">Locations</div>
                <div className="text-center text-2xl font-semibold">
                  Delhi · Noida · Gurugram
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}