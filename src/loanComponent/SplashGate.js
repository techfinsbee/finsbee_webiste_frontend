'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getAuth, isAuthValid } from '../lib/authStorage';

export default function SplashGate({ children }) {
  const [ready, setReady] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const auth = getAuth();
    if (!isAuthValid(auth)) {
      // optional: router.replace('/auth/login');
    }
    setReady(true);
  }, [router]);

  if (!ready) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #e3e9f3 0%, #f0f4f8 100%)' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '16px', background: '#592eff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
            <img src="/fb-logo.png" alt="Logo" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
          </div>
          <div style={{ width: '24px', height: '24px', border: '3px solid #592eff', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite', margin: '0 auto' }} />
          <p style={{ marginTop: '12px', color: '#333', fontSize: '14px' }}>Loading...</p>
        </div>
      </div>
    );
  }

  return children;
}