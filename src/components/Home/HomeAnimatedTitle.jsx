import React from "react";
import "../AnimatedTitle.component.css";
const HomeAnimatedTitle = () => {
  return (
    <section id="mart">
      <div style={{ boxSizing: "border-box", filter: "drop-shadow(96px 96px 96px rgb(178, 255, 142)" }}>
        <div
          className="text-9xl font-bold flex justify-center gap-2 main-title"
          style={{
            borderRadius: "50%",
          }}
        >
          <span className="text-[#163312]">Mama</span>
          <span className="text-[#163312]">Mart</span>
        </div>
      </div>
    </section>
  );
};

export default HomeAnimatedTitle;
