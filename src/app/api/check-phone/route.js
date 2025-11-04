import { NextResponse } from "next/server";

const ODOO = "https://dashboard.finsbee.com";
const ADMIN = {
  db: "finsbee",
  login: "finsbee@gmail.com",
  password: "Finsbee@123%4ujm",
};

async function getAdminSession() {
  const loginRes = await fetch(`${ODOO}/web/session/authenticate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ jsonrpc: "2.0", method: "call", params: ADMIN }),
  });

  if (!loginRes.ok) throw new Error(`Login failed: ${loginRes.status}`);
  const setCookie = loginRes.headers.get("set-cookie");
  if (!setCookie) throw new Error("No session cookie");
  return setCookie;
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { phone } = body;

    if (!phone) {
      return NextResponse.json(
        { exists: false, requiresRegistration: true },
        { status: 400 }
      );
    }

    const adminCookie = await getAdminSession();

    // Search for customer by phone
    const searchPayload = {
      jsonrpc: "2.0",
      method: "call",
      params: {
        model: "res.partner",
        method: "search_read",
        args: [[["phone", "=", phone]], ["id", "name", "email", "phone"]],
        kwargs: { limit: 1 },
      },
    };

    const searchRes = await fetch(`${ODOO}/web/dataset/call_kw`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Cookie: adminCookie },
      body: JSON.stringify(searchPayload),
    });

    const searchData = await searchRes.json();
    
    if (searchData.error) {
      console.error("Phone check error:", searchData.error);
      return NextResponse.json(
        { exists: false, requiresRegistration: true },
        { status: 200 }
      );
    }

    const existing = searchData.result?.[0];
    
    if (!existing) {
      return NextResponse.json(
        { exists: false, requiresRegistration: true },
        { status: 200 }
      );
    }

    // Check if customer needs registration (missing email)
    const needsRegistration = !existing.email || existing.email.trim() === "";
    
    return NextResponse.json({
      exists: true,
      requiresRegistration: needsRegistration,
      customerData: existing
    });

  } catch (err) {
    console.error("Phone check fatal error:", err);
    return NextResponse.json(
      { exists: false, requiresRegistration: true },
      { status: 200 }
    );
  }
}