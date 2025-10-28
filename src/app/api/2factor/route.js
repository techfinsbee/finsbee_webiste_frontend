import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const path = searchParams.get("path");

    console.log("🧩 /api/2factor triggered");
    console.log("📦 Path received:", path);

    if (!path) {
      return NextResponse.json({ error: "Missing path parameter" }, { status: 400 });
    }

    const fullUrl = `https://2factor.in${path}`;
    console.log("🌍 Fetching from real 2Factor:", fullUrl);

    const response = await fetch(fullUrl, { method: "GET" });
    const text = await response.text();

    console.log("✅ Response received from 2Factor:", text.slice(0, 200));

    const res = new NextResponse(text, { status: response.status });
    res.headers.set("Access-Control-Allow-Origin", "*");
    res.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

    return res;
  } catch (err) {
    console.error("❌ Proxy Error:", err);
    return NextResponse.json({ error: err.message || "Internal Error" }, { status: 500 });
  }
}
