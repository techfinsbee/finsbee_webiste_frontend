// // const KEY = 'auth:v1';

// // export function setAuth(auth) {
// //   if (typeof window === 'undefined') return;
// //   localStorage.setItem(KEY, JSON.stringify(auth));
// // }

// // export function getAuth() {
// //   if (typeof window === 'undefined') return null;
// //   try {
// //     const raw = localStorage.getItem(KEY);
// //     return raw ? JSON.parse(raw) : null;
// //   } catch {
// //     return null;
// //   }
// // }

// // export function clearAuth() {
// //   if (typeof window === 'undefined') return;
// //   localStorage.removeItem(KEY);
// // }

// // export function isAuthValid(auth) {
// //   return !!auth?.sessionId && (!auth.expiresAt || Date.now() < auth.expiresAt);
// // }

// const KEY = "auth:v1";
// const COOKIE_KEY = "auth_session";

// /* =========================
//    SAVE AUTH (localStorage + cookie)
// ========================= */
// export function setAuth(auth) {
//   if (typeof window === "undefined") return;

//   const authString = JSON.stringify(auth);

//   // Save to localStorage (for client UI)
//   localStorage.setItem(KEY, authString);

//   // Save to cookie (for middleware)
//   document.cookie = `${COOKIE_KEY}=${authString}; path=/; max-age=${60 * 60 * 24}`;
// }

// /* =========================
//    GET AUTH (client only)
// ========================= */
// export function getAuth() {
//   if (typeof window === "undefined") return null;

//   try {
//     const raw = localStorage.getItem(KEY);
//     return raw ? JSON.parse(raw) : null;
//   } catch {
//     return null;
//   }
// }

// /* =========================
//    CLEAR AUTH
// ========================= */
// export function clearAuth() {
//   if (typeof window === "undefined") return;

//   localStorage.removeItem(KEY);

//   // Remove cookie
//   document.cookie = `${COOKIE_KEY}=; path=/; max-age=0`;
// }

// /* =========================
//    VALIDATE AUTH
// ========================= */
// export function isAuthValid(auth) {
//   return (
//     !!auth?.sessionId &&
//     (!auth?.expiresAt || Date.now() < auth.expiresAt)
//   );
// }



// const KEY = "auth:v1";
// const COOKIE_KEY = "auth_session";

// /* =========================
//    SAVE AUTH (localStorage + cookie)
// ========================= */
// export function setAuth(auth) {
//   if (typeof window === "undefined") return;

//   const authString = JSON.stringify(auth);

//   // Save to localStorage (for client UI)
//   localStorage.setItem(KEY, authString);

//   // Save to cookie (for middleware)
//   document.cookie = `${COOKIE_KEY}=${authString}; path=/; max-age=${60 * 60 * 24}`;
// }

// /* =========================
//    GET AUTH (client only)
// ========================= */
// export function getAuth() {
//   if (typeof window === "undefined") return null;

//   try {
//     const raw = localStorage.getItem(KEY);
//     return raw ? JSON.parse(raw) : null;
//   } catch {
//     return null;
//   }
// }

// /* =========================
//    CLEAR AUTH
// ========================= */
// export function clearAuth() {
//   if (typeof window === "undefined") return;

//   localStorage.removeItem(KEY);

//   // Remove cookie
//   document.cookie = `${COOKIE_KEY}=; path=/; max-age=0`;
// }

// /* =========================
//    VALIDATE AUTH
// ========================= */
// export function isAuthValid(auth) {
//   return (
//     !!auth?.customerId &&
//     (!auth?.expiresAt || Date.now() < auth.expiresAt)
//   );
// }



const KEY = "auth:v1";
const COOKIE_KEY = "auth_session";

/* =========================
   SAVE AUTH (localStorage + cookie)
========================= */
export function setAuth(auth) {
  if (typeof window === "undefined") return;

  const authString = JSON.stringify(auth);

  // Save to localStorage (for client UI)
  localStorage.setItem(KEY, authString);

  // Save to cookie (for middleware)
  document.cookie = `${COOKIE_KEY}=${authString}; path=/; max-age=${60 * 60 * 24}`;
}

/* =========================
   GET AUTH (client only)
========================= */
export function getAuth() {
  if (typeof window === "undefined") return null;

  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

/* =========================
   CLEAR AUTH
========================= */
export function clearAuth() {
  if (typeof window === "undefined") return;

  localStorage.removeItem(KEY);

  // Remove cookie
  document.cookie = `${COOKIE_KEY}=; path=/; max-age=0`;
}

/* =========================
   VALIDATE AUTH (CLIENT ONLY)
========================= */
export function isAuthValid(auth) {
  return (
    !!auth?.customerId &&   // 🔥 important change
    (!auth?.expiresAt || Date.now() < auth.expiresAt)
  );
}
