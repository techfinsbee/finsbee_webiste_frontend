

import NotFoundUI from "@/components/error/NotFoundUI";


export default function NotFound() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center  ">
     
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