"use client";

import { useEffect } from "react";
import Cursor from "@/components/Cursor";
import Starfield from "@/components/Starfield";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import AIFeatures from "@/components/AIFeatures";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add("vis"), i * 60);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".fu").forEach((el) => obs.observe(el));

    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      const href = target.getAttribute("href");
      if (href?.startsWith("#") && href !== "#") {
        e.preventDefault();
        const id = href;
        document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", handleAnchorClick as any);
    });

    return () => {
      obs.disconnect();
      document.querySelectorAll('a[href^="#"]').forEach((a) => {
        a.removeEventListener("click", handleAnchorClick as any);
      });
    };
  }, []);

  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Cursor />
      <Starfield />
      <Navbar />
      <Hero />
      <Ticker />
      <Stats />
      <Services />
      <AIFeatures />
      <Projects />
      <Team />
      <Process />
      <CTA />
      <Footer />
    </main>
  );
}
