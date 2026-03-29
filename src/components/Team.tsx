"use client";

import { useState } from "react";
import Modal from "./Modal";
import { Twitter, Linkedin, Github, Terminal } from "lucide-react";

export default function Team() {
  const [activeMember, setActiveMember] = useState<any>(null);

  const team = [
    {
      handle: "@rahul_404",
      name: "Rahul Verma",
      bio: "Full-stack lead. Next.js & Flutter expert. Writes the architecture docs at 2am and the code at 3am.",
      longBio: "A technical visionary with over 8 years of experience building scalable digital products. Rahul specializes in bridging the gap between high-level architectural design and low-level code optimization. He is obsessed with zero-latency interfaces and resilient distributed systems.",
      role: "FOUNDER",
      icon: "👨‍💻",
      styles: {
        visualBg: "radial-gradient(ellipse 80% 80% at 50% 50%,rgba(200,255,0,0.04),transparent)",
        hex: "linear-gradient(135deg,rgba(200,255,0,0.12),rgba(200,255,0,0.04))",
        handle: { color: "var(--lime)" },
        role: {}
      },
      skills: ["Next.js", "Flutter", "System Design"],
      fullSkills: ["React/Next.js 15", "Flutter/Dart", "Go/Rust Backend", "PostgreSQL", "Kubernetes"]
    },
    {
      handle: "@anika_404",
      name: "Anika Singh",
      bio: "UI/UX + Flutter widgets. She designs it then codes it herself. Clients always ask for more screens.",
      longBio: "Anika is a design-to-code pioneer. With a background in motion graphics and fine arts, she creates interfaces that don't just look scientific—they feel alive. Her focus is on micro-interactions and accessibility in cross-platform environments.",
      role: "DESIGN",
      icon: "👩‍🎨",
      styles: {
        visualBg: "radial-gradient(ellipse 80% 80% at 50% 50%,rgba(84,197,248,0.06),transparent)",
        hex: "linear-gradient(135deg,rgba(84,197,248,0.1),rgba(84,197,248,0.03))",
        handle: { color: "var(--flutter)" },
        role: { color: "var(--flutter)", borderColor: "rgba(84,197,248,0.3)", background: "rgba(84,197,248,0.08)" }
      },
      skills: ["Figma", "Flutter UI", "Animations"],
      fullSkills: ["UI/UX Strategy", "Framer Motion", "Flutter Advanced Widgets", "Lottie Animations", "Tailwind CSS"]
    },
    {
      handle: "@dev_404",
      name: "Dev Sharma",
      bio: "APIs, databases, Firebase architecture. Built backends serving 1M+ daily requests. Supabase certified.",
      longBio: "Dev is the engine room of 4O4. He specializes in high-throughput APIs and complex data modeling. Whether it's optimizing a SQL query or architecting a real-time event-driven system, Dev ensures the foundation is unbreakable.",
      role: "BACKEND",
      icon: "👨‍🔧",
      styles: {
        visualBg: "radial-gradient(ellipse 80% 80% at 50% 50%,rgba(0,212,255,0.05),transparent)",
        hex: "linear-gradient(135deg,rgba(0,212,255,0.08),rgba(0,212,255,0.02))",
        handle: { color: "var(--cyan)" },
        role: { color: "var(--cyan)", borderColor: "rgba(0,212,255,0.3)", background: "rgba(0,212,255,0.06)" }
      },
      skills: ["Node.js", "Firebase", "PostgreSQL"],
      fullSkills: ["Node.js/Express", "Firebase Architecture", "Supabase", "Redis/Caching", "Auth Systems"]
    },
    {
      handle: "@priya_404",
      name: "Priya Nair",
      bio: "Flutter specialist. BLoC, Riverpod, custom widget animations. Writes unit tests before features. Seriously.",
      longBio: "Priya brings rigorous engineering standards to mobile development. Her code is known for its extreme test coverage and modularity. She is a core contributor to several open-source Flutter packages and loves solving performance bottlenecks.",
      role: "FLUTTER",
      icon: "👩‍💻",
      styles: {
        visualBg: "radial-gradient(ellipse 80% 80% at 50% 50%,rgba(249,115,22,0.05),transparent)",
        hex: "linear-gradient(135deg,rgba(249,115,22,0.08),rgba(249,115,22,0.02))",
        handle: { color: "var(--orange)" },
        role: { color: "var(--orange)", borderColor: "rgba(249,115,22,0.3)", background: "rgba(249,115,22,0.06)" }
      },
      skills: ["Flutter", "BLoC", "Testing"],
      fullSkills: ["Flutter (iOS/Android/Web)", "State Management (BLoC/Riverpod)", "Platform Channels", "CI/CD for Mobile", "UI Testing"]
    }
  ];

  return (
    <>
      <section className="sec sec-dark" id="team">
        <div className="sec-tag font-mono">The Crew</div>
        <h2 className="sec-title fu font-orbitron">Meet <em>4O4</em></h2>
        <p className="sec-sub fu d1">Small. Focused. Lethal. Every person on this team ships.</p>
        <div className="team-grid">
          {team.map((t, i) => (
            <div 
              key={i} 
              className={`team-card fu d${i} cursor-pointer group hover:border-[#c8ff00]/30 transition-all`}
              onClick={() => setActiveMember(t)}
            >
              <div className="team-visual">
                <div className="team-visual-bg" style={{ background: t.styles.visualBg }}></div>
                <div className="team-hex" style={{ background: t.styles.hex }}>{t.icon}</div>
                <div className="team-card-overlay"></div>
                <div className="team-role-badge font-mono" style={t.styles.role}>{t.role}</div>
              </div>
              <div className="team-info">
                <div className="team-handle font-mono" style={t.styles.handle}>{t.handle}</div>
                <div className="team-name-txt">{t.name}</div>
                <div className="team-bio">{t.bio}</div>
                <div className="team-skills font-mono">
                  {t.skills.map((s, j) => (
                    <span key={j} className="t-sk">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Modal 
        isOpen={!!activeMember} 
        onClose={() => setActiveMember(null)} 
        title={activeMember?.handle || ""}
      >
        {activeMember && (
          <div className="space-y-8">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <h4 className="font-orbitron text-2xl font-bold text-[#e8f0ff]">{activeMember.name}</h4>
                <div className="font-mono text-xs uppercase tracking-widest text-[#c8ff00]">{activeMember.role}</div>
              </div>
              <div className="flex gap-2">
                <button className="rounded-full bg-white/5 p-3 transition-colors hover:bg-[#c8ff00]/10 hover:text-[#c8ff00]">
                  <Twitter className="h-5 w-5" />
                </button>
                <button className="rounded-full bg-white/5 p-3 transition-colors hover:bg-[#c8ff00]/10 hover:text-[#c8ff00]">
                  <Linkedin className="h-5 w-5" />
                </button>
                <button className="rounded-full bg-white/5 p-3 transition-colors hover:bg-[#c8ff00]/10 hover:text-[#c8ff00]">
                  <Github className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <h5 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Expertise Architecture</h5>
              <p className="text-lg leading-relaxed text-[#e8f0ff]/80">
                {activeMember.longBio}
              </p>
            </div>

            <div className="space-y-4">
              <h5 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Technical Arsenal</h5>
              <div className="flex flex-wrap gap-2">
                {activeMember.fullSkills.map((s: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-2 border border-[rgba(200,255,0,0.1)] bg-[rgba(200,255,0,0.02)] px-3 py-1.5 font-mono text-[10px] text-[#e8f0ff]">
                    <Terminal className="h-3 w-3 text-[#c8ff00]" />
                    {s}
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <button 
                className="w-full bg-[#c8ff00] py-4 font-mono text-sm font-bold uppercase tracking-[0.2em] text-black transition-all hover:bg-[#d8ff20] hover:shadow-[0_0_20px_rgba(200,255,0,0.4)]"
                onClick={() => setActiveMember(null)}
              >
                Close Protocol
              </button>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
