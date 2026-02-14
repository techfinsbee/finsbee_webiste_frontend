'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const API_KEY = "ab163828-7d8d-11f0-a562-0200cd936042";

export default function LoginPage() {
  const [mobile, setMobile] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const isValidMobile = (num) => /^[6-9]\d{9}$/.test(num.trim());


const sendOtp = async (msisdn) => {
  if (!API_KEY) throw new Error('2Factor API key missing.');

  // Clean standard format – no extra /OTP%20Verify or var1
  const url = `/twofactor/API/V1/${API_KEY}/SMS/+91${msisdn}/AUTOGEN/OTP%20Verify?var1=${msisdn}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);

  const data = await res.json();

  if (data?.Status === 'Success' && data?.Details) {
    return data.Details; // ← this is the session/request ID
  }

  throw new Error(data?.Details || data?.message || 'Failed to send OTP');
};

  const handleRequestOtp = async () => {
    const phone = mobile.trim();
    if (!isValidMobile(phone)) {
      setError('Please enter valid 10-digit mobile number');
      return;
    }

    setError('');
    setLoading(true);

    try {
      const requestId = await sendOtp(phone);
      toast.success('OTP sent!');
      router.push(`/verify-otp?phone=${phone}&rid=${requestId}`);
    } catch (err) {
      toast.error(err.message || 'Failed to send OTP');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #e3e9f3 0%, #f0f4f8 100%)' }}>
      <div style={{ width: '100%', maxWidth: '420px', padding: '32px', borderRadius: '24px', background: 'linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%)', boxShadow: '12px 12px 24px rgba(163,177,198,0.5), -12px -12px 24px #ffffff' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{ width: '80px', height: '80px', margin: '0 auto 16px', background: '#592eff', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="/fb-logo.png" alt="FinsBee" style={{ width: '64px', height: '64px', objectFit: 'contain' }} />
          </div>
          <p style={{ color: '#666', fontSize: '14px' }}>Welcome to FinsBee Partner</p>
        </div>

        <input
          type="tel"
          placeholder="Enter Mobile Number"
          value={mobile}
          onChange={(e) => { setMobile(e.target.value); setError(''); }}
          style={{ width: '100%', padding: '16px', fontSize: '16px', borderRadius: '16px', border: 'none', background: '#fff', boxShadow: 'inset 4px 4px 8px rgba(163,177,198,0.3), inset -4px -4px 8px #ffffff', outline: 'none', marginBottom: '16px' }}
        />

        {error && (
          <div style={{ padding: '12px', background: '#ffebee', borderRadius: '12px', marginBottom: '16px', color: '#c62828', fontSize: '14px', textAlign: 'center' }}>
            {error}
          </div>
        )}

        <button
          onClick={handleRequestOtp}
          disabled={loading}
          style={{ width: '100%', padding: '16px', fontSize: '16px', fontWeight: '600', color: 'white', background: loading ? '#a5b4fc' : '#592eff', borderRadius: '16px', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', boxShadow: '8px 8px 16px rgba(89,46,255,0.4), -8px -8px 16px #ffffff', transition: 'all 0.2s' }}
        >
          {loading ? 'Sending...' : 'Request OTP'}
        </button>

      </div>
    </div>
  );
}