import { NextResponse } from "next/server";

export async function OPTIONS() {
  const res = new NextResponse(null, { status: 204 });
  res.headers.set("Access-Control-Allow-Origin", "*");
  res.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  return res;
}

export async function POST(req) {
  try {
    const body = await req.json();

    const response = await fetch("https://dashboard.finsbee.com/web/session/authenticate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    const cookie = response.headers.get("set-cookie");

    const res = NextResponse.json(data);
    if (cookie) {
      res.headers.set("Set-Cookie", cookie);
      console.log("🍪 Forwarding session cookie:", cookie);
    }

    res.headers.set("Access-Control-Allow-Origin", req.headers.get("origin") || "*");
    res.headers.set("Access-Control-Allow-Credentials", "true");

    return res;
  } catch (err) {
    console.error("Session Authenticate Error:", err);
    return NextResponse.json({ error: "Failed to authenticate" }, { status: 500 });
  }
}
