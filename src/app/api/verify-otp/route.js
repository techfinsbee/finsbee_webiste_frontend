// import { NextApiRequest, NextApiResponse } from 'next';

// export default async function handler(req, res) {
//   if (req.method !== 'GET') {
//     return res.status(405).json({ error: 'Method not allowed' });
//   }

//   const apiKey = process.env.TWO_FACTOR_API_KEY || 'ab163828-7d8d-11f0-a562-0200cd936042';
//   const phoneNumber = req.query.phone || '+91';
//   const pin = req.query.pin || '';
//   const msisdn = phoneNumber.replace(/[^0-9]/g, '');
//   const requestId = req.query.requestId || ''; // Expect requestId from sendOtp

//   // Demo bypass (mimic Flutter's DEMO_MOBILE and DEMO_OTP)
//   if (msisdn === 'DEMO_MOBILE' && pin === 'DEMO_OTP') {
//     return res.status(200).json({
//       Status: 'Success',
//       Details: { name: msisdn, email: false, phone: msisdn },
//     });
//   }

//   if (!/^[0-9]{6}$/.test(pin)) {
//     return res.status(400).json({ error: 'Enter a valid 6-digit OTP' });
//   }
//   if (!requestId) {
//     return res.status(400).json({ error: 'Missing requestId. Please resend OTP.' });
//   }

//   const url = `https://2factor.in/API/V1/${apiKey}/SMS/VERIFY/${requestId}/${pin}`;

//   try {
//     const response = await fetch(url, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     const data = await response.text();
//     const jsonData = JSON.parse(data); // Parse the response

//     if (response.status === 200 && jsonData.Status === 'Success') {
//       // Simulate profile fetch (replace with actual backend call if needed)
//       const profile = {
//         name: msisdn,
//         email: false,
//         phone: msisdn,
//       };
//       res.status(200).json({ Status: 'Success', Details: profile });
//     } else {
//       res.status(400).json({ error: jsonData.Details || 'OTP verification failed' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to verify OTP', details: error.message });
//   }
// }


import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

    const phoneNumber = searchParams.get("phone") || "+91";
    const pin = searchParams.get("pin") || "";
    const requestId = searchParams.get("requestId") || "";

    const apiKey =
      process.env.TWO_FACTOR_API_KEY ||
      "ab163828-7d8d-11f0-a562-0200cd936042";

    const msisdn = phoneNumber.replace(/[^0-9]/g, ""); // Sanitize

    // 🔥 Demo bypass (same logic as your Flutter DEMO flow)
    if (msisdn === "DEMO_MOBILE" && pin === "DEMO_OTP") {
      return NextResponse.json({
        Status: "Success",
        Details: { name: msisdn, email: false, phone: msisdn },
      });
    }

    // Validate 6-digit OTP
    if (!/^[0-9]{6}$/.test(pin)) {
      return NextResponse.json(
        { error: "Enter a valid 6-digit OTP" },
        { status: 400 }
      );
    }

    if (!requestId) {
      return NextResponse.json(
        { error: "Missing requestId. Please resend OTP." },
        { status: 400 }
      );
    }

    const url = `https://2factor.in/API/V1/${apiKey}/SMS/VERIFY/${requestId}/${pin}`;

    const externalResponse = await fetch(url, { method: "GET" });
    const data = await externalResponse.text(); // 2Factor returns STRING
    let jsonData;

    try {
      jsonData = JSON.parse(data);
    } catch {
      return NextResponse.json(
        { error: "Invalid response from OTP provider" },
        { status: 500 }
      );
    }

    // Success
    if (externalResponse.status === 200 && jsonData.Status === "Success") {
      const profile = {
        name: msisdn,
        email: false,
        phone: msisdn,
      };

      return NextResponse.json({
        Status: "Success",
        Details: profile,
      });
    }

    // Failure
    return NextResponse.json(
      { error: jsonData.Details || "OTP verification failed" },
      { status: 400 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to verify OTP",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
