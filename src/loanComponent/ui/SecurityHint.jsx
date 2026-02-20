// export function SecurityHint() {
//   return (
//     <div className="flex items-center justify-center gap-2 text-[#9C9C9C] text-[14px] my-6">
//       <span>🔒</span>
//       <span>Finsbee keeps your data safe</span>
//     </div>
//   );
// }


"use client";

export function SecurityHint() {
  return (
    <div
      className="
        w-[236px]
        h-[24px]
        flex items-center justify-center
        gap-[6px]
        px-[10px]
        py-[4px]
        mb-2
        mx-auto
      "
    >
      {/* ICON */}
      <img
        src="/loan/security-user.svg"   
        alt="Secure"
        className="w-[18px] h-[18px] object-contain"
      />

      {/* TEXT */}
      <span className="text-[16px] text-[#8C8C8C] font-normal  whitespace-nowrap">
        Finsbee keeps your data safe
      </span>
    </div>
  );
}
