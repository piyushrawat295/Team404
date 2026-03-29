"use client";

import { useState } from "react";
import Modal from "./Modal";
import { ExternalLink, Github, Layers } from "lucide-react";

export default function Projects() {
  const [activeProject, setActiveProject] = useState<any>(null);

  const projects = [
    {
      num: "01",
      name: "PulseTrack Fitness",
      desc: "Health tracking app with real-time workout data, wearable sync, and AI-powered recommendations. 50K+ downloads.",
      longDesc: "A comprehensive health ecosystem that bridges the gap between wearable data and actionable insights. Built with a reactive Flutter frontend and a robust Node.js backend, PulseTrack processes millions of data points daily to provide personalized fitness coaching.",
      stack: ["Flutter", "Firebase", "Node.js", "Google Fit API", "HealthKit"],
      tags: [{ name: "Flutter", class: "fl" }, { name: "Firebase", class: "" }, { name: "4.9★", class: "" }]
    },
    {
      num: "02",
      name: "Vendly Commerce",
      desc: "Full-stack e-commerce platform with Next.js storefront, CMS, real-time inventory, and Flutter merchant app.",
      longDesc: "A multi-platform commerce solution designed for scale. Vendly features a lightning-fast Next.js 15 storefront for customers and a high-performance Flutter app for merchants to manage inventory and orders in real-time.",
      stack: ["Next.js 15", "Flutter", "Supabase", "Stripe", "Tailwind CSS"],
      tags: [{ name: "Next.js", class: "nx" }, { name: "Flutter", class: "fl" }, { name: "Supabase", class: "" }]
    },
    {
      num: "03",
      name: "FinFlow Banking",
      desc: "Fintech mobile app with real-time transactions, biometric auth, UPI integration. PCI-DSS compliant.",
      longDesc: "Security-first banking experience. FinFlow leverages advanced biometric authentication and a distributed microservices architecture to ensure sub-second transaction times with zero downtime.",
      stack: ["Flutter", "Dart", "Redis", "PostgreSQL", "AWS"],
      tags: [{ name: "Flutter", class: "fl" }, { name: "Node.js", class: "" }, { name: "Live", class: "lime" }]
    },
    {
      num: "04",
      name: "Edukate Platform",
      desc: "EdTech SaaS built on Next.js 15. Video streaming, live classes, AI quiz generation. 10K+ students.",
      longDesc: "Modernizing education with AI. Edukate provides a seamless learning environment where video content is supplemented by AI-generated quizzes and real-time collaboration tools for students and teachers.",
      stack: ["Next.js", "TypeScript", "OpenAI API", "Mux Video", "Prisma"],
      tags: [{ name: "Next.js", class: "nx" }, { name: "TypeScript", class: "" }, { name: "AI", class: "" }]
    },
    {
      num: "05",
      name: "LogiDash Delivery",
      desc: "Logistics platform — Next.js admin dashboard + Flutter driver app. Live tracking, Google Maps, push notifications.",
      longDesc: "Complete logistics visibility. LogiDash optimizes delivery routes using machine learning and provides real-time GPS tracking for both fleet managers and end-customers.",
      stack: ["Next.js", "Flutter", "Google Maps API", "Socket.io", "MongoDB"],
      tags: [{ name: "Next.js", class: "nx" }, { name: "Flutter", class: "fl" }, { name: "Maps API", class: "" }]
    },
    {
      num: "06",
      name: "Nexus AI Chat",
      desc: "AI-powered customer support platform with LLM backend, Flutter mobile client, and Next.js web dashboard.",
      longDesc: "The future of customer support. Nexus integrates deeply with existing knowledge bases to provide instant, accurate responses while seamlessly handing off complex queries to human agents when necessary.",
      stack: ["Next.js", "Flutter", "LangChain", "Pinecone", "Python"],
      tags: [{ name: "Next.js", class: "nx" }, { name: "Flutter", class: "fl" }, { name: "AI", class: "lime" }]
    }
  ];

  return (
    <>
      <section className="sec" id="work">
        <div className="sec-tag font-mono">Selected Work</div>
        <h2 className="sec-title fu font-orbitron">Shipped &amp; <em>Scaling</em></h2>
        <p className="sec-sub fu d1">Real projects. Real users. Built with Next.js, Flutter, and zero shortcuts.</p>
        <div className="proj-grid">
          {projects.map((p, i) => (
            <div 
              key={i} 
              className={`proj-card fu d${i} cursor-pointer group`}
              onClick={() => setActiveProject(p)}
            >
              <div className="proj-num font-mono">{p.num} /</div>
              <div className="proj-arrow transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</div>
              <div className="proj-name font-orbitron group-hover:text-[#c8ff00] transition-colors">{p.name}</div>
              <p className="proj-desc">{p.desc}</p>
              <div className="proj-tags font-mono">
                {p.tags.map((t, j) => (
                  <span key={j} className={`proj-tag ${t.class}`}>{t.name}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Modal 
        isOpen={!!activeProject} 
        onClose={() => setActiveProject(null)} 
        title={activeProject?.name || ""}
      >
        {activeProject && (
          <div className="space-y-8">
            <div className="space-y-4">
              <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#c8ff00]">Mission Brief</h4>
              <p className="text-lg leading-relaxed text-[#e8f0ff]/80">
                {activeProject.longDesc}
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#c8ff00]">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {activeProject.stack.map((item: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-2 border border-[rgba(200,255,0,0.1)] bg-[rgba(200,255,0,0.02)] px-3 py-1.5 font-mono text-[10px] text-[#e8f0ff]">
                    <Layers className="h-3 w-3 text-[#c8ff00]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <button className="flex items-center gap-2 bg-[#c8ff00] px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest text-black transition-all hover:bg-[#d8ff20] hover:shadow-[0_0_15px_rgba(200,255,0,0.3)]">
                Live Preview <ExternalLink className="h-4 w-4" />
              </button>
              <button className="flex items-center gap-2 border border-[rgba(200,255,0,0.2)] bg-transparent px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest text-[#e8f0ff] transition-all hover:border-[#c8ff00] hover:text-[#c8ff00]">
                Case Study <Github className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
