import React from 'react';
import './AnimatedTitle.component.css'
const AnimatedTitle = () => {
  return (
    <section id="mart" >
    <div className="text-9xl font-bold flex justify-center gap-2 main-title">
      <span className="animate-color-change">Mama</span>
      <span className="animate-color-change">Mart</span>
    </div>
    </section>
  );
};

// Add the required styles for animation
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes colorChange {
    0% { color:rgb(230, 201, 164); }
    50% { color: #CD855F; }
    100% { color: #DEB887; }
  }

  .animate-color-change {
    animation: colorChange 2s infinite;
    color: #DEB887;
  }
`;
document.head.appendChild(styleSheet);

export default AnimatedTitle;