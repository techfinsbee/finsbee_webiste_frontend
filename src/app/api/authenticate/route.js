// For App Router: app/api/authenticate/route.js
import { NextResponse } from 'next';

export async function POST(request) {
  try {
    const { someData } = await request.json(); // Adjust based on your auth logic
    // Simulate authentication (replace with real backend call if needed)
    const sessionId = 'your-session-id'; // Generate or fetch from your backend
    const customerId = 'your-customer-id';

    const response = NextResponse.json({ message: 'Authenticated', customerId });
    response.cookies.set('sessionId', sessionId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Secure in production (HTTPS)
      sameSite: 'lax',
      path: '/',
    });
    response.cookies.set('customerId', customerId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
    });
    return response;
  } catch (error) {
    return NextResponse.json({ error: 'Authentication failed' }, { status: 500 });
  }
}