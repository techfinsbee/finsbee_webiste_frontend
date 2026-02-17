import { NextResponse } from "next/server";

const BACKEND =
  process.env.NEXT_PUBLIC_BACKEND_URL || "https://payday.finsbee.com";

export async function POST(req) {
  try {
    const body = await req.json();
    const { CustomerId } = body?.params || {};

    const cookieHeader = req.headers.get("cookie") || "";

    if (!cookieHeader.includes("session_id=")) {
      return NextResponse.json(
        {
          jsonrpc: "2.0",
          error: { code: 401, message: "No valid session" },
        },
        { status: 401 }
      );
    }

    if (!CustomerId) {
      return NextResponse.json(
        {
          jsonrpc: "2.0",
          error: { code: 400, message: "CustomerId required" },
        },
        { status: 400 }
      );
    }

    console.log("📊 Fetching Loan History for:", CustomerId);

    // ✅ CALL EXACT BACKEND API
    const response = await fetch(
      `${BACKEND}/api/customer/transaction-history`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Cookie: cookieHeader,
        },
        body: JSON.stringify({
          jsonrpc: "2.0",
          method: "call",
          params: {
            CustomerId: Number(CustomerId),
          },
        }),
      }
    );

    const data = await response.json();

    if (!response.ok || data.error) {
      console.error("Backend error:", data);
      return NextResponse.json(
        {
          jsonrpc: "2.0",
          result: [],
        },
        { status: 500 }
      );
    }

    return NextResponse.json(data);

  } catch (error) {
    console.error("Transaction History Error:", error);

    return NextResponse.json(
      {
        jsonrpc: "2.0",
        result: [],
      },
      { status: 500 }
    );
  }
}
