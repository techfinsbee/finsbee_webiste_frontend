// import { NextResponse } from "next/server";

// export async function middleware(req) {
//   const url = req.nextUrl.clone();
//   const fullUrl = url.href;

//   console.log("🛰️ Middleware running for:", fullUrl);

//   // ✅ Handle preflight CORS OPTIONS requests globally
//   if (req.method === "OPTIONS") {
//     const res = new NextResponse(null, { status: 204 });
//     res.headers.set("Access-Control-Allow-Origin", "*");
//     res.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
//     res.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
//     return res;
//   }

//   // ✅ Add CORS headers for all /api routes
//   if (url.pathname.startsWith("/api/")) {
//     const res = NextResponse.next();
//     res.headers.set("Access-Control-Allow-Origin", "*");
//     res.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
//     res.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
//     return res;
//   }

//   // 🚀 Intercept direct calls to 2Factor API
//   if (fullUrl.includes("2factor.in/API/V1")) {
//     console.log("🚀 Intercepting 2Factor OTP API call:", fullUrl);

//     // Extract API path after the domain
//     const apiPath = fullUrl.split("https://2factor.in")[1];
//     console.log("➡️ Rewriting to internal API:", `/api/2factor?path=${apiPath}`);

//     url.pathname = "/api/2factor";
//     url.searchParams.set("path", apiPath);

//     return NextResponse.rewrite(url);
//   }

//   // Default fallback
//   return NextResponse.next();
// }

// // ✅ Ensure middleware runs for all paths
// export const config = {
//   matcher: ["/:path*"],
// };



// middleware.js (root of project)
import { NextResponse } from "next/server";
import { isAuthValid } from "@/lib/authStorage";

export async function middleware(req) {
  const url = req.nextUrl.clone();
  const pathname = url.pathname;
  const fullUrl = url.href;

  console.log("🛰️ Middleware running for:", fullUrl);

  // ────────────────────────────────────────────────
  // 1. Handle CORS preflight (OPTIONS) – unchanged
  // ────────────────────────────────────────────────
  if (req.method === "OPTIONS") {
    const res = new NextResponse(null, { status: 204 });
    res.headers.set("Access-Control-Allow-Origin", "*");
    res.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, OPTIONS");
    res.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Session-Id");
    return res;
  }

  // ────────────────────────────────────────────────
  // 2. Add CORS headers for all /api routes – unchanged
  // ────────────────────────────────────────────────
  if (pathname.startsWith("/api/")) {
    const res = NextResponse.next();
    res.headers.set("Access-Control-Allow-Origin", "*");
    res.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, OPTIONS");
    res.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Session-Id");
    return res;
  }

  // ────────────────────────────────────────────────
  // 3. Keep your 2factor proxy rewrite – unchanged
  // ────────────────────────────────────────────────
  if (fullUrl.includes("2factor.in/API/V1")) {
    console.log("🚀 Intercepting 2Factor OTP API call:", fullUrl);

    const apiPath = fullUrl.split("https://2factor.in")[1] || "";
    console.log("➡️ Rewriting to internal API:", `/api/2factor?path=${apiPath}`);

    url.pathname = "/api/2factor";
    url.searchParams.set("path", apiPath);

    return NextResponse.rewrite(url);
  }

  // ────────────────────────────────────────────────
  // 4. Protected & public routes
  // ────────────────────────────────────────────────
  const publicPaths = [
    "/",
    "/login",
    "/verify-otp",
    "/register",
    "/_next",           // Next.js assets
    "/api",             // API routes already handled
    "/favicon.ico",
  ];

  const protectedPaths = [
    "/my-account",
    "/dashboard",       // add more protected routes here if needed
    // "/profile",
    // "/investment",
  ];

  const isPublic = publicPaths.some(p => pathname === p || pathname.startsWith(p));
  const isProtected = protectedPaths.some(p => pathname === p || pathname.startsWith(p));

  // Skip auth check for public paths and static files
  if (isPublic && !isProtected) {
    return NextResponse.next();
  }

  // ────────────────────────────────────────────────
  // 5. Read auth from cookie (set after successful login)
  // ────────────────────────────────────────────────
  let auth = null;
  const authCookie = req.cookies.get("auth_session")?.value;

  if (authCookie) {
    try {
      auth = JSON.parse(authCookie);
    } catch (e) {
      console.warn("Invalid auth cookie:", e);
    }
  }

  const isLoggedIn = isAuthValid(auth);

  // ────────────────────────────────────────────────
  // 6. Protection logic
  // ────────────────────────────────────────────────
  if (isProtected && !isLoggedIn) {
    console.log(`↪️ Redirecting unauthenticated user from ${pathname} → /login`);
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("redirect", pathname); // optional: remember destination
    return NextResponse.redirect(loginUrl);
  }

  // Redirect logged-in users AWAY from auth pages
  if (isLoggedIn && (pathname === "/login" || pathname === "/verify-otp" || pathname === "/register")) {
    console.log(`↪️ Redirecting logged-in user from ${pathname} → /my-account`);
    return NextResponse.redirect(new URL("/my-account", req.url));
  }

  // All good — continue to the page
  return NextResponse.next();
}

// Run middleware only on relevant paths (better performance)
export const config = {
  matcher: [
    "/my-account/:path*",
    "/dashboard/:path*",
    "/login",
    "/verify-otp",
    "/register",
    "/((?!_next/static|_next/image|favicon.ico).*)", // everything else
  ],
};