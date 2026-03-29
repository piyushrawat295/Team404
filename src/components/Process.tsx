"use client";

export default function Process() {
  const steps = [
    { n: "01", title: "Discovery", desc: "Free 45-min call. We map your idea, users, tech constraints, and timeline. Antigravity AI pre-analyzes your brief." },
    { n: "02", title: "Design Sprint", desc: "Figma mockups for web + app in 3 days. You approve the look before a line of code exists." },
    { n: "03", title: "Build & Ship", desc: "2-week sprints. Weekly demo builds on TestFlight + Vercel previews. GitHub access included always." },
    { n: "04", title: "Launch & Monitor", desc: "Full deployment handled — Vercel + App Stores. Antigravity AI monitors post-launch. 60-day support included." }
  ];

  return (
    <section className="sec" id="process">
      <div className="sec-tag font-mono">How We Work</div>
      <h2 className="sec-title fu font-orbitron">Orbit, Build, <em>Launch.</em></h2>
      <p className="sec-sub fu d1">Four phases. Zero ambiguity. The 4O4 way.</p>
      <div className="proc-row">
        {steps.map((s, i) => (
          <div key={i} className={`proc-step fu d${i}`}>
            <div className="proc-n font-mono">{s.n}</div>
            <div className="proc-title">{s.title}</div>
            <p className="proc-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
