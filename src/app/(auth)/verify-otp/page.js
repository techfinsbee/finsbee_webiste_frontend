// 'use client';

// import { useState, useEffect } from 'react';
// import { useSearchParams, useRouter } from 'next/navigation';
// import { toast } from 'react-toastify';
// import { setAuth } from '../../../lib/authStorage';

// const API_KEY = "ab163828-7d8d-11f0-a562-0200cd936042";

// export default function VerifyOtpPage() {
//   const searchParams = useSearchParams();
//   const router = useRouter();

//   const phone = searchParams.get('phone') || '';
//   const initialRid = searchParams.get('rid') || '';

//   const [otp, setOtp] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [requestId, setRequestId] = useState(initialRid);

//   useEffect(() => {
//     if (!phone || !requestId) {
//       toast.error('Invalid session. Start again.');
//       router.replace('/login');
//     }
//   }, [phone, requestId, router]);

//   const verifyOtp = async (rid, code) => {
//     // FIXED: use /twofactor/ prefix (matches your working send-otp rewrite)
//     const url = `/twofactor/API/V1/${API_KEY}/SMS/VERIFY/${rid}/${code}`;

//     const res = await fetch(url);

//     if (!res.ok) {
//       const text = await res.text();
//       console.error('Verify OTP failed:', res.status, text.substring(0, 300));
//       throw new Error(`Server responded with status ${res.status}`);
//     }

//     const data = await res.json();

//     if (data.Status === 'Success') return true;
//     throw new Error(data.Details || data.message || 'Invalid OTP');
//   };

//   const handleVerify = async () => {
//     if (!/^\d{6}$/.test(otp)) {
//       setError('Enter 6-digit OTP');
//       return;
//     }

//     setError('');
//     setLoading(true);

//     try {
//       await verifyOtp(requestId, otp);
//       toast.success('OTP verified!');

//       // Fake session for now (replace with real logic later)
//       const fakeAuth = {
//         sessionId: 'demo-session-' + Date.now(),
//         customerId: 'cust_' + phone,
//         phone: phone,
//         expiresAt: Date.now() + 86400000 * 7, // 7 days
//       };

//       setAuth(fakeAuth);
//       toast.success('Login successful');

//       // Redirect to investment page as you requested
//       router.push('/my-account');

//     } catch (err) {
//       console.error('Verification error:', err);
//       toast.error(err.message || 'Verification failed');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ minHeight: '100vh', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #e3e9f3 0%, #f0f4f8 100%)' }}>
//       <div style={{ width: '100%', maxWidth: '420px', padding: '32px', borderRadius: '24px', background: '#fff', boxShadow: '12px 12px 24px rgba(163,177,198,0.5), -12px -12px 24px #ffffff' }}>
        
//         <h2 style={{ textAlign: 'center', marginBottom: '8px', color: '#333' }}>Verify OTP</h2>
//         <p style={{ textAlign: 'center', color: '#666', marginBottom: '24px' }}>Sent to +91 {phone}</p>

//         <input
//           type="text"
//           maxLength={6}
//           placeholder="Enter 6-digit OTP"
//           value={otp}
//           onChange={(e) => { setOtp(e.target.value); setError(''); }}
//           style={{ width: '100%', padding: '16px', fontSize: '20px', textAlign: 'center', letterSpacing: '8px', borderRadius: '16px', border: 'none', background: '#f8f9ff', boxShadow: 'inset 4px 4px 8px rgba(163,177,198,0.3), inset -4px -4px 8px #ffffff', outline: 'none', marginBottom: '16px' }}
//         />

//         {error && <p style={{ color: '#c62828', textAlign: 'center', marginBottom: '16px' }}>{error}</p>}

//         <button
//           onClick={handleVerify}
//           disabled={loading || !otp.trim()}
//           style={{ width: '100%', padding: '16px', fontSize: '16px', fontWeight: '600', color: 'white', background: loading ? '#bbb' : '#592eff', borderRadius: '16px', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', boxShadow: '8px 8px 16px rgba(89,46,255,0.4), -8px -8px 16px #ffffff' }}
//         >
//           {loading ? 'Verifying...' : 'Verify & Login'}
//         </button>

//       </div>
//     </div>
//   );
// }

// app/(auth)/verify-otp/page.js
'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { setAuth } from '@/lib/authStorage';
import axios from 'axios';

const API_KEY = "ab163828-7d8d-11f0-a562-0200cd936042";

export default function VerifyOtpPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const phone = searchParams.get('phone') || '';
  const initialRid = searchParams.get('rid') || '';

  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [requestId, setRequestId] = useState(initialRid);

  useEffect(() => {
    if (!phone || !requestId) {
      toast.error('Invalid session. Start again.');
      router.replace('/login');
    }
  }, [phone, requestId, router]);

  const verifyOtp = async (rid, code) => {
    const url = `/twofactor/API/V1/${API_KEY}/SMS/VERIFY/${rid}/${code}`;
    const res = await fetch(url);

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`2Factor error: ${res.status} - ${text.substring(0, 100)}`);
    }

    const data = await res.json();

    if (data.Status === 'Success') return true;
    throw new Error(data.Details || data.message || 'Invalid OTP');
  };

  const createOrGetCustomer = async () => {
    try {
      const payload = {
        jsonrpc: "2.0",
        method: "call",
        params: {
          name: `User ${phone}`,           // ← give a valid name (backend may require it)
          phone: phone,                    // ← 7458974965 (no +91)
          source_id:"finsbee-website"
        }
      };

      console.log("Sending to /api/create/customer:", payload); // debug

      const response = await axios.post("/api/create/customer", payload, {
        headers: { 'Content-Type': 'application/json' }
      });

      const result = response.data?.result?.[0];

      if (!result || !result.CustomerId) {
        throw new Error(result?.message || "No CustomerId returned");
      }

      console.log("Customer created:", result); // debug

      return {
        customerId: result.CustomerId,
        sessionId: result.session_id || `session-${Date.now()}`,
        message: result.message || ''
      };
    } catch (err) {
      console.error("Customer API error:", err.response?.data || err.message);
      throw new Error(
        err.response?.data?.error?.message ||
        err.message ||
        "Failed to create/get customer"
      );
    }
  };

  const handleVerify = async () => {
    if (!/^\d{6}$/.test(otp)) {
      setError('Enter 6-digit OTP');
      return;
    }

    setError('');
    setLoading(true);

    try {
      // 1. Verify OTP
      await verifyOtp(requestId, otp);
      toast.success('OTP verified!');

      // 2. Create or get customer (now with clean phone)
      const { customerId, sessionId, message } = await createOrGetCustomer();

      // 3. Save session
      const auth = {
        sessionId,
        customerId,
        phone,
        expiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000,
      };

      setAuth(auth);

    //   // 4. Save CustomerId for /my-account
    //   localStorage.setItem("originalCustomerId", String(customerId));
    // Set cookie for middleware (non-httpOnly for simplicity)
  document.cookie = `auth_session=${JSON.stringify(auth)}; path=/; max-age=${7*24*60*60}; SameSite=Lax`;

  localStorage.setItem("originalCustomerId", String(customerId));


      toast.success(message.includes("already exist") ? 'Welcome back!' : 'Account created!');

      // 5. Go to My Account
      router.push('/my-account');

    } catch (err) {
      console.error('Full login error:', err);
      toast.error(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #e3e9f3 0%, #f0f4f8 100%)' }}>
      <div style={{ width: '100%', maxWidth: '420px', padding: '32px', borderRadius: '24px', background: '#fff', boxShadow: '12px 12px 24px rgba(163,177,198,0.5), -12px -12px 24px #ffffff' }}>
        
        <h2 style={{ textAlign: 'center', marginBottom: '8px', color: '#333' }}>Verify OTP</h2>
        <p style={{ textAlign: 'center', color: '#666', marginBottom: '24px' }}>Sent to +91 {phone}</p>

        <input
          type="text"
          maxLength={6}
          placeholder="Enter 6-digit OTP"
          value={otp}
          onChange={(e) => { setOtp(e.target.value); setError(''); }}
          style={{ width: '100%', padding: '16px', fontSize: '20px', textAlign: 'center', letterSpacing: '8px', borderRadius: '16px', border: 'none', background: '#f8f9ff', boxShadow: 'inset 4px 4px 8px rgba(163,177,198,0.3), inset -4px -4px 8px #ffffff', outline: 'none', marginBottom: '16px' }}
        />

        {error && <p style={{ color: '#c62828', textAlign: 'center', marginBottom: '16px' }}>{error}</p>}

        <button
          onClick={handleVerify}
          disabled={loading || !otp.trim()}
          style={{ width: '100%', padding: '16px', fontSize: '16px', fontWeight: '600', color: 'white', background: loading ? '#bbb' : '#592eff', borderRadius: '16px', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', boxShadow: '8px 8px 16px rgba(89,46,255,0.4), -8px -8px 16px #ffffff' }}
        >
          {loading ? 'Verifying...' : 'Verify & Login'}
        </button>

      </div>
    </div>
  );
}