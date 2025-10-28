

// import { redirect } from 'next/navigation';

// export default function FlutterApp() {
//   redirect('/flutterapp/index.html');
// }

"use client";
import { useEffect } from "react";

export default function FlutterApp() {
  useEffect(() => {
    window.location.href = "/flutterapp/index.html";
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Loading Flutter App...</h2>
    </div>
  );
}
