
import { scrollToNoSnap } from "../../../utils/scrollToNoSnap";
// const ImageCTA = ({
//   src = "/get.svg",
//   label = "Get Consultant Now",
//   onClick,
// }) => (
//   <button
//     type="button"
//     onClick={onClick}
//     aria-label={label}
//     className="relative inline-flex items-center justify-center select-none
//                w-[210px] sm:w-[285px] h-[42px] sm:h-[58px]"
//   >
//     <img
//       src={src}
//       alt=""
//       className="absolute inset-0 w-full h-full object-contain pointer-events-none"
//       draggable="false"
//     />
//     <span className="sr-only">{label}</span>
//   </button>
// );

export default function SupportSection() {
  return (
    <section className="relative overflow-hidden min-h-[804px]">
      {/* Background image (doesn't block clicks) */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: 'url("/support.png")' }}
        aria-hidden={true}
      />
      {/* Purple overlay (doesn't block clicks) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(15,0,85,0.85) 0%, rgba(15,0,85,0.82) 45%, rgba(15,0,85,0.80) 100%)",
        }}
        aria-hidden={true}
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

            {/* underline bar */}
            <div className="mt-4 h-[10px] w-[295px] sm:w-[384px] bg-[#ffc73c] rounded-full" /> 
           
            

            {/* Custom image button → scroll to #booking without snap fighting */}
            <div className="mt-8">
              {/* <ImageCTA onClick={() => scrollToNoSnap("#booking")} /> */}
            </div>
          </div>

          {/* RIGHT: Contact card */}
          <div className="lg:justify-self-end w-full max-w-[560px]">
            <div className="rounded-xl border border-white/40 bg-white/5 backdrop-blur-md text-white divide-y divide-white/30">
              {/* Row 1 */}
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

              {/* Row 2 */}
              <div className="px-8 py-10">
                <div className="text-white/80 text-sm mb-2 text-center">Email</div>
                <a
                  href="mailto:support@finsbee.com"
                  className="block text-center text-2xl font-semibold hover:underline break-all"
                >
                  support@finsbee.com
                </a>
              </div>

              {/* Row 3 */}
              <div className="px-8 py-10">
                <div className="text-white/80 text-sm mb-2 text-center">Hours</div>
                <div className="text-center text-2xl font-semibold">
                  Mon–Sat, 10:00–19:00 (IST)
                </div>
              </div>

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
