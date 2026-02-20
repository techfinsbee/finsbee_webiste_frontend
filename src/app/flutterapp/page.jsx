


// "use client";
// import { useEffect } from "react";

// export default function FlutterApp() {
//   useEffect(() => {
//     window.location.href = "/flutterapp/index.html";
//   }, []);

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h2>Loading Flutter App...</h2>
//     </div>
//   );
// }


"use client";

export default function FlutterApp() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <iframe
        src="/flutterapp/index.html"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
      />
    </div>
  );
}
