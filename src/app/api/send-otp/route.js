import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.TWO_FACTOR_API_KEY || 'ab163828-7d8d-11f0-a562-0200cd936042';
  const phoneNumber = req.query.phone || '+91'; // Expect phone number as query param
  const msisdn = phoneNumber.replace(/[^0-9]/g, ''); // Sanitize phone number
  const url = `https://2factor.in/API/V1/${apiKey}/SMS/+91${msisdn}/AUTOGEN/Otp%20Verification?var1=${encodeURIComponent(msisdn)}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.text(); // 2factor.in returns text
    res.status(response.status).send(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to send OTP', details: error.message });
  }
}