import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target;
      if (target) {
        const isClickable =
          target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") ||
          target.closest("a") ||
          window.getComputedStyle(target).cursor === "pointer";
        setIsPointer(isClickable);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed z-[100] hidden md:block transition-all duration-150 ease-out`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%) scale(${isPointer ? 1.6 : 1})`,
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div
        className={`rounded-full border transition-all duration-300 ${
          isPointer
            ? "border-gold bg-gold/15 w-8 h-8"
            : "border-ink/60 bg-ink/5 w-4 h-4"
        }`}
      />
    </div>
  );
}
