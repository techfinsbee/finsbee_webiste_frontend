export default function StatusCard({ children }) {
  return (
    <div className="flex justify-center mt-12 px-4">
      <div
        className="
          w-full max-w-[820px]
          bg-white
          rounded-[32px]
          shadow-[0_40px_100px_rgba(0,0,0,0.08)]
          px-10 py-20
          text-center
        "
      >
        {children}
      </div>
    </div>
  );
}
