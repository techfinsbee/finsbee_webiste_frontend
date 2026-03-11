// "use client";
// export default function ThankYouPage() {
//   return (
//     <div className="min-h-screen bg-[#FAFAFA] flex flex-col items-center justify-center px-6 py-12">
//       <div className="bg-white rounded-2xl shadow-xl p-10 max-w-lg w-full text-center border border-yellow-100">
//         <div className="mb-8">
//           <img
//             src="/form_page/quality.png"
//             alt="Success"
//             className="mx-auto h-32 sm:h-40"
//           />
//         </div>

//         <h1 className="text-3xl sm:text-4xl font-bold text-[#183153] mb-5">
//           Application Submitted Successfully!
//         </h1>

//         <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
//           Thank you for choosing Finsbee.<br />
//           Our team will reach out to you shortly to discuss your loan options and next steps.
//         </p>

//         <div className="text-sm text-gray-600 mb-10">
//           <p>You will receive updates on your registered mobile number and email.</p>
//         </div>

//         <button
//           onClick={() => window.location.href = "/"}
//           className="bg-yellow-400 hover:bg-yellow-500 text-[#183153] font-bold py-3 px-10 rounded-lg shadow-lg transition text-lg"
//         >
//           Back to Home
//         </button>
//       </div>
//     </div>
//   );
// }

 "use client";
import { useRouter } from "next/navigation";

 export default function Finsbeethankyou() {
 const router = useRouter();
  return (
     <div
      className="min-h-screen w-full flex flex-col items-center justify-center relative bg-cover bg-center"
      style={{ backgroundImage: "url('/booking/planbg.png')" }}
    >

      {/* Logo */}
      <div className="absolute top-6 left-10 ">
        <img
          src="/FinsbeeLogo.svg"
          alt="finsbee"
          className="h-16 bg-[#592EEF] rounded-xl p-2"
        />
      </div>

      {/* Back Button */}
       <div
        onClick={() => router.back()}
        className="absolute top-24 left-12 flex items-center gap-2 text-[#f59e0b] cursor-pointer"
      >
        <span className="text-xl">←</span>
        <span>Back</span>
      </div>
    <div className="flex flex-col items-center w-full max-w-lg py-12 px-8 bg-transparent">
      
      <div className="mb-8">
        <img
          src="/form_page/quality.png"
          alt="Application Submitted"
          className="mx-auto h-50"
        />
      </div>

      <div className="text-center text-xl text-[#183153] font-medium">
        <div>Your application has been submitted successfully!</div>

        <div className="mt-5">
          Our team will reach out to you shortly
          <br />
          to discuss your loan options.
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-600">
        <p>Thank you for choosing Finsbee for your financial needs.</p>
      </div>

    </div>
    </div>
  );
}