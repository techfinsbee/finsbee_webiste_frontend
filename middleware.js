import { NextResponse } from "next/server";

export async function middleware(req) {
  const url = req.nextUrl.clone();
  const fullUrl = url.href;

  console.log("🛰️ Middleware running for:", fullUrl);

  // ✅ Handle preflight CORS OPTIONS requests globally
  if (req.method === "OPTIONS") {
    const res = new NextResponse(null, { status: 204 });
    res.headers.set("Access-Control-Allow-Origin", "*");
    res.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
    return res;
  }

  // ✅ Add CORS headers for all /api routes
  if (url.pathname.startsWith("/api/")) {
    const res = NextResponse.next();
    res.headers.set("Access-Control-Allow-Origin", "*");
    res.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
    return res;
  }

  // 🚀 Intercept direct calls to 2Factor API
  if (fullUrl.includes("2factor.in/API/V1")) {
    console.log("🚀 Intercepting 2Factor OTP API call:", fullUrl);

    // Extract API path after the domain
    const apiPath = fullUrl.split("https://2factor.in")[1];
    console.log("➡️ Rewriting to internal API:", `/api/2factor?path=${apiPath}`);

    url.pathname = "/api/2factor";
    url.searchParams.set("path", apiPath);

    return NextResponse.rewrite(url);
  }

  // Default fallback
  return NextResponse.next();
}

// ✅ Ensure middleware runs for all paths
export const config = {
  matcher: ["/:path*"],
};
