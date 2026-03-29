"use client";

import { useState } from "react";
import Modal from "./Modal";
import { Twitter, Linkedin, Github, Terminal } from "lucide-react";

export default function Team() {
  const [activeMember, setActiveMember] = useState<any>(null);

  const team = [
    {
      handle: "@piyush_404",
      name: "Piyush Rawat",
      bio: "Full-stack architect. Expert in Next.js, Node.js, and high-performance cloud systems. Building the foundation of 4O4.",
      longBio: "Piyush is a full-stack visionary dedicated to building scalable digital ecosystems. With extensive experience in modern web technologies and cloud infrastructure, he bridges the gap between complex backend logic and seamless frontend experiences. He is obsessed with performance optimization and architectural integrity.",
      role: "FULL STACK",
      icon: "👨‍💻",
      styles: {
        visualBg: "radial-gradient(ellipse 80% 80% at 50% 50%,rgba(200,255,0,0.04),transparent)",
        hex: "linear-gradient(135deg,rgba(200,255,0,0.12),rgba(200,255,0,0.04))",
        handle: { color: "var(--lime)" },
        role: {}
      },
      skills: ["Next.js", "Node.js", "System Design"],
      fullSkills: ["React/Next.js 15", "Node.js/Express", "Go/Rust Backend", "PostgreSQL/Supabase", "AWS/Cloud Architecture"]
    },
    {
      handle: "@sarthak_404",
      name: "Sarthak Kumar",
      bio: "Mobile experience specialist. Expert in Flutter and cross-platform UI/UX. Turning pixel-perfect designs into high-performance apps.",
      longBio: "Sarthak is a master of mobile interfaces. With a deep understanding of Flutter and cross-platform architecture, he creates apps that feel native and perform flawlessly. His focus is on delivering high-fidelity user experiences through custom animations and efficient state management.",
      role: "MOBILE APP",
      icon: "📱",
      styles: {
        visualBg: "radial-gradient(ellipse 80% 80% at 50% 50%,rgba(84,197,248,0.06),transparent)",
        hex: "linear-gradient(135deg,rgba(84,197,248,0.1),rgba(84,197,248,0.03))",
        handle: { color: "var(--flutter)" },
        role: { color: "var(--flutter)", borderColor: "rgba(84,197,248,0.3)", background: "rgba(84,197,248,0.08)" }
      },
      skills: ["Flutter", "Dart", "UI/UX"],
      fullSkills: ["Flutter (iOS/Android/Web)", "Riverpod/Provider", "Custom Animations", "Firebase Integration", "Figma to Code"]
    },
    {
      handle: "@harsh_404",
      name: "Harsh Raj",
      bio: "Mobile engineer. Expert in Flutter, custom widget logic, and state management. Ensuring 4O4's apps are robust and scalable.",
      longBio: "Harsh brings rigorous software engineering principles to mobile development. He specializes in building robust, testable, and maintainable cross-platform applications using Flutter. His expertise in BLoC and complex state management ensures that even the most feature-rich apps remain responsive and reliable.",
      role: "MOBILE APP",
      icon: "⚙️",
      styles: {
        visualBg: "radial-gradient(ellipse 80% 80% at 50% 50%,rgba(249,115,22,0.05),transparent)",
        hex: "linear-gradient(135deg,rgba(249,115,22,0.08),rgba(249,115,22,0.02))",
        handle: { color: "var(--orange)" },
        role: { color: "var(--orange)", borderColor: "rgba(249,115,22,0.3)", background: "rgba(249,115,22,0.06)" }
      },
      skills: ["Flutter", "BLoC", "Testing"],
      fullSkills: ["Flutter/Dart", "State Management (BLoC/Riverpod)", "Platform Channels", "CI/CD for Mobile", "Unit & Integration Testing"]
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
