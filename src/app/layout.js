// // app/layout.js (Next.js 13 App Router)
// import { Lato } from 'next/font/google';
// import './globals.css';

// const lato = Lato({
//   weight: ['400', '700'],     // regular and bold
//   subsets: ['latin'],
//   variable: '--font-lato',    // CSS variable for tailwind
// });

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" className={lato.variable}>
//       <body>{children}</body>
//     </html>
//   );
// }
// app/layout.js (Next.js 13 App Router)
import { Lato } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/Investment/Navbar";

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={lato.variable}>
      <body className="relative min-h-screen">
        {/* Floating Navbar */}
        {/* <Navbar /> */}

        {/* Page content (behind navbar) */}
        <main className="relative z-0">{children}</main>
      </body>
    </html>
  );
}
