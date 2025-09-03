// utils/scrollToNoSnap.js (or place near your components)
export function scrollToNoSnap(target) {
  const el = typeof target === "string" ? document.querySelector(target) : target;
  if (!el) return;

  const root = document.scrollingElement || document.documentElement;
  const prev = root.style.scrollSnapType;

  // Temporarily disable snap so smooth scroll can finish
  root.style.scrollSnapType = "none";

  el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });

  // Re-enable snap after the scroll settles
  const restore = () => {
    root.style.scrollSnapType = prev || "";
    window.removeEventListener("wheel", restore);
    window.removeEventListener("touchend", restore);
  };

  // Fallback timer + input events to restore
  setTimeout(restore, 700);
  window.addEventListener("wheel", restore, { once: true });
  window.addEventListener("touchend", restore, { once: true });
}
