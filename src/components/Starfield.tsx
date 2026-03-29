"use client";

import { useEffect, useRef } from "react";

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let stars: any[] = [];
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    for (let i = 0; i < 220; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.2 + 0.2,
        o: Math.random() * 0.7 + 0.1,
        s: Math.random() * 0.3 + 0.05,
        drift: Math.random() * 0.5 - 0.25,
      });
    }

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((s) => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 255, 200, ${s.o})`;
        ctx.fill();
        s.o += Math.sin(Date.now() * 0.001 * s.s) * 0.005;
        s.x += s.drift * 0.08;
        if (s.x > canvas.width) s.x = 0;
        if (s.x < 0) s.x = canvas.width;
      });
      requestAnimationFrame(drawStars);
    };

    const animId = requestAnimationFrame(drawStars);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animId);
    };
  }, []);

  return <canvas id="starfield" ref={canvasRef}></canvas>;
}
