import { NextResponse } from "next/server";

// ✅ Handle login/session authentication proxy
export async function POST(req) {
  try {
    // 1️⃣ Parse target URL from query param
    const target = req.nextUrl.searchParams.get("target");
    if (!target) {
      return NextResponse.json({ error: "Missing target URL" }, { status: 400 });
    }

    // 2️⃣ Forward request to Odoo dashboard
    const body = await req.text();
    const response = await fetch(target, {
      method: "POST",
      headers: {
        "Content-Type": req.headers.get("Content-Type") || "application/json",
      },
      body,
    });

    // 3️⃣ Read data + cookie from Odoo
    const data = await response.text();
    const setCookie = response.headers.get("set-cookie");

    // 4️⃣ Prepare response
    const res = new NextResponse(data, {
      status: response.status,
      headers: {
        "Content-Type": response.headers.get("content-type") || "application/json",
        "Access-Control-Allow-Origin": req.headers.get("origin") || "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Expose-Headers": "Set-Cookie",
      },
    });

    // 5️⃣ Forward Odoo session cookie to browser
    if (setCookie) {
      res.headers.set("Set-Cookie", setCookie);
      console.log("🍪 Session cookie forwarded:", setCookie);
    } else {
      console.warn("⚠️ No session cookie received from Odoo.");
    }

    return res;
  } catch (err) {
    console.error("❌ Session Proxy Error:", err);
    return NextResponse.json({ error: "Failed to authenticate" }, { status: 500 });
  }
}

// ✅ Preflight CORS handler
export async function OPTIONS() {
  const res = new NextResponse(null, { status: 204 });
  res.headers.set("Access-Control-Allow-Origin", "*");
  res.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.headers.set("Access-Control-Allow-Credentials", "true");
  return res;
}
