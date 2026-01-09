'use client';

import NotFoundUI from "@/components/error/NotFoundUI";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center  ">
      {/* <h1 className="text-6xl font-bold text-yellow-400">404</h1>

      <h2 className="mt-4 text-2xl font-semibold">Page Not Found</h2>

      <p className="mt-2 text-gray-400 text-center max-w-md">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-6 inline-flex items-center px-6 py-3 rounded-lg bg-yellow-400 text-gray-900 font-bold hover:bg-yellow-500 transition"
      >
        Go Back Home
      </Link> */}
      <NotFoundUI/>
    </div>
  );
}

// Optional: better SEO/title
export const metadata = {
  title: "Page Not Found - Finsbee",
  description: "The requested page does not exist.",
  robots: { index: false, follow: false },
};