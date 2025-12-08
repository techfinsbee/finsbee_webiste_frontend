// import { NextApiRequest, NextApiResponse } from 'next/server';

// export default async function handler(req, res) {
//   if (req.method !== 'GET') {
//     return res.status(405).json({ error: 'Method not allowed' });
//   }

//   const apiKey = process.env.TWO_FACTOR_API_KEY || 'ab163828-7d8d-11f0-a562-0200cd936042';
//   const phoneNumber = req.query.phone || '+91'; // Expect phone number as query param
//   const msisdn = phoneNumber.replace(/[^0-9]/g, ''); // Sanitize phone number
//   const url = `https://2factor.in/API/V1/${apiKey}/SMS/+91${msisdn}/AUTOGEN/Otp%20Verification?var1=${encodeURIComponent(msisdn)}`;

//   try {
//     const response = await fetch(url, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     const data = await response.text(); // 2factor.in returns text
//     res.status(response.status).send(data);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to send OTP', details: error.message });
//   }
// }


import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    // Read search params: /api/send-otp?phone=9911223344
    const { searchParams } = new URL(request.url);
    const phone = searchParams.get("phone");

    if (!phone) {
      return NextResponse.json(
        { success: false, error: "Phone number is required" },
        { status: 400 }
      );
    }

    const apiKey =
      process.env.TWO_FACTOR_API_KEY ||
      "ab163828-7d8d-11f0-a562-0200cd936042";

    const msisdn = phone.replace(/[^0-9]/g, ""); // sanitize input

    const url = `https://2factor.in/API/V1/${apiKey}/SMS/+91${msisdn}/AUTOGEN/Otp%20Verification?var1=${encodeURIComponent(
      msisdn
    )}`;

    const externalResponse = await fetch(url, { method: "GET" });

    const data = await externalResponse.text(); // 2factor returns TEXT

    return new NextResponse(data, {
      status: externalResponse.status,
      headers: { "Content-Type": "text/plain" },
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to send OTP",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
