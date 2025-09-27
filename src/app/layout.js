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
import { Lato } from 'next/font/google';
import './globals.css';
// import { Header } from './Investment/Navbar';
import { Navbar } from '@/Investment/Navbar';


const lato = Lato({
  weight: ['400', '700'],     // regular and bold
  subsets: ['latin'],
  variable: '--font-lato',    // CSS variable for tailwind
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={lato.variable}>
      <body className="flex flex-col min-h-screen">
        {/* Shared Header */}
        <Navbar/>

        {/* Page content */}
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
