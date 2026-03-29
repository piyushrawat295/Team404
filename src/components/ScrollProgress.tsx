"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[10000] h-1 origin-left bg-[#c8ff00] shadow-[0_0_10px_#c8ff00]"
      style={{ scaleX }}
    />
  );
}
