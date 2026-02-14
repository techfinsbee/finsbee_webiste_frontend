const KEY = 'auth:v1';

export function setAuth(auth) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(KEY, JSON.stringify(auth));
}

export function getAuth() {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function clearAuth() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(KEY);
}

export function isAuthValid(auth) {
  return !!auth?.sessionId && (!auth.expiresAt || Date.now() < auth.expiresAt);
}