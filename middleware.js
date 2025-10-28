import { NextResponse } from "next/server";

export async function middleware(req) {
  const url = req.nextUrl.clone();
  const fullUrl = url.href;

  // Log all requests so we can see what passes through
  console.log("🛰️ Middleware running for:", fullUrl);

  // Detect if request is going to 2factor.in
  if (fullUrl.includes("2factor.in/API/V1")) {
    console.log("🚀 Intercepting 2Factor OTP API call:", fullUrl);

    // Extract API path after the domain
    const apiPath = fullUrl.split("https://2factor.in")[1];
    console.log("➡️ Rewriting to internal API:", `/api/2factor?path=${apiPath}`);

    url.pathname = "/api/2factor";
    url.searchParams.set("path", apiPath);

    // Rewrite so Next.js handles it internally
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

// Ensure it runs for all paths
export const config = {
  matcher: ["/:path*"],
};
