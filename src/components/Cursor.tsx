"use client";

import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const curRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ mx: 0, my: 0, cx: 0, cy: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      pos.current.mx = e.clientX;
      pos.current.my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    const animate = () => {
      pos.current.cx += (pos.current.mx - pos.current.cx) * 0.1;
      pos.current.cy += (pos.current.my - pos.current.cy) * 0.1;

      if (curRef.current) {
        curRef.current.style.left = `${pos.current.cx}px`;
        curRef.current.style.top = `${pos.current.cy}px`;
      }
      requestAnimationFrame(animate);
    };

    const handleMouseDown = () => {
      const burst = document.createElement("div");
      burst.className = "cur-burst";
      burst.style.left = `${pos.current.mx}px`;
      burst.style.top = `${pos.current.my}px`;
      document.body.appendChild(burst);
      setTimeout(() => burst.remove(), 600);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    const animId = requestAnimationFrame(animate);

    const refreshIteractives = () => {
      const interactiveElements = document.querySelectorAll(
        "a, button, .svc-card, .proj-card, .team-card, .ai-feat, .proc-step, .stat-cell, .nav-logo, .nav-cta"
      );
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
      });
    };

    refreshIteractives();
    // Re-run periodically to catch dynamic elements if any
    const interval = setInterval(refreshIteractives, 2000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      cancelAnimationFrame(animId);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div 
        id="cur" 
        className={isHovering ? "fill" : ""}
        ref={curRef}
        style={{ 
          width: isHovering ? '28px' : '40px', 
          height: isHovering ? '28px' : '40px', 
          transition: 'width 0.4s cubic-bezier(0.23,1,0.32,1), height 0.4s cubic-bezier(0.23,1,0.32,1)'
        }}
      >
        <style jsx>{`
          #cur::after {
            inset: -5px !important;
          }
        `}</style>
      </div>
      <div 
        id="cur-dot" 
        ref={dotRef}
        style={{ 
          width: isHovering ? '0px' : '18px', 
          height: isHovering ? '0px' : '18px',
          opacity: isHovering ? 0 : 1,
          transition: 'width 0.2s, height 0.2s, opacity 0.2s'
        }}
      ></div>
    </>
  );
}
