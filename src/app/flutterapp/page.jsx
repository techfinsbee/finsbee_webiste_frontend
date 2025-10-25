// "use client";
// import React, { useEffect } from "react";

// export default function FlutterAppPage() {
//   useEffect(() => {
//     // Redirect to the Flutter build’s index.html
//     window.location.href = "/flutterapp/index.html";
//   }, []);

//   return (
//     <div className="flex justify-center items-center h-screen text-white">
//       Loading Flutter Web App...
//     </div>
//   );
// }

import { redirect } from 'next/navigation';

export default function FlutterApp() {
  redirect('/flutterapp/index.html');
}