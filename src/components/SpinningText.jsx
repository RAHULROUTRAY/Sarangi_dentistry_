import React from 'react';
import { motion } from "framer-motion";

export function SpinningText({ children, className = "", duration = 15, radius = 5 }) {
  const letters = children.split("");

  return (
    <motion.div
      className={`relative flex items-center justify-center ${className}`}
      animate={{ rotate: 360 }}
      transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
      style={{ width: `${radius * 2}rem`, height: `${radius * 2}rem` }}
    >
      {letters.map((char, i) => (
        <span
          key={i}
          className="absolute top-0 flex flex-col items-center select-none text-[#03966a] font-bold uppercase tracking-[0.2em] text-sm md:text-base"
          style={{
            height: `${radius * 2}rem`,
            left: "50%",
            transform: `translateX(-50%) rotate(${i * (360 / letters.length)}deg)`,
            transformOrigin: "center center",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </motion.div>
  );
}

export function SpinningTextBasic() {
  return (
    <SpinningText radius={4.5} duration={12}>
      shine more • care more • smile more • 
    </SpinningText>
  );
}
