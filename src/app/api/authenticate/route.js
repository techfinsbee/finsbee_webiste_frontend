// // For App Router: app/api/authenticate/route.js
// import { NextResponse } from 'next/server';

// export async function POST(request) {
//   try {
//     const { someData } = await request.json(); // Adjust based on your auth logic
//     // Simulate authentication (replace with real backend call if needed)
//     const sessionId = 'your-session-id'; // Generate or fetch from your backend
//     const customerId = 'your-customer-id';

//     const response = NextResponse.json({ message: 'Authenticated', customerId });
//     response.cookies.set('sessionId', sessionId, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === 'production', // Secure in production (HTTPS)
//       sameSite: 'lax',
//       path: '/',
//     });
//     response.cookies.set('customerId', customerId, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === 'production',
//       sameSite: 'lax',
//       path: '/',
//     });
//     return response;
//   } catch (error) {
//     return NextResponse.json({ error: 'Authentication failed' }, { status: 500 });
//   }
// }

import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // Parse incoming request
    const body = await request.json();

    // Validate required fields (example)
    if (!body?.phone && !body?.email) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing required authentication fields",
        },
        { status: 400 }
      );
    }

    // ⚠ Replace below with real authentication logic
    const sessionId = crypto.randomUUID(); // More secure than hard-coded
    const customerId = "generated-customer-id"; // Replace with DB or API value

    // Build response
    const response = NextResponse.json({
      success: true,
      message: "Authenticated successfully",
      customerId,
    });

    // Set secure cookies
    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    };

    response.cookies.set("sessionId", sessionId, cookieOptions);
    response.cookies.set("customerId", customerId, cookieOptions);

    return response;
  } catch (error) {
    console.error("AUTH ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Authentication failed",
        error: error?.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}
