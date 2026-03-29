"use client";

import { useEffect, useRef } from "react";

export default function Particles() {
  const containerRef = useRef<HTMLDivElement>(null);
  const colors = ["#c8ff00", "#00d4ff", "#54c5f8", "#ffffff", "#a855f7"];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const spawnParticle = () => {
      const p = document.createElement("div");
      p.className = "ag-particle";
      const size = Math.random() * 5 + 2;
      const x = Math.random() * 100;
      const drift = (Math.random() - 0.5) * 200;
      const dur = Math.random() * 8 + 6;
      const delay = Math.random() * 6;
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      p.style.background = color;
      p.style.left = `${x}%`;
      p.style.bottom = "0";
      p.style.setProperty("--drift", `${drift}px`);
      p.style.animationDuration = `${dur}s`;
      p.style.animationDelay = `${delay}s`;
      p.style.boxShadow = `0 0 ${size * 2}px ${color}`;
      
      container.appendChild(p);
      setTimeout(() => p.remove(), (dur + delay) * 1000);
    };

    for (let i = 0; i < 30; i++) spawnParticle();
    const interval = setInterval(spawnParticle, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      id="ag-particles"
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 2,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    ></div>
  );
}
