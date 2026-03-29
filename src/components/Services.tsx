"use client";

export default function Services() {
  return (
    <section className="sec sec-dark" id="services">
      <div className="sec-tag font-mono">What We Build</div>
      <h2 className="sec-title fu font-orbitron">Full-Stack. <em>No Gaps.</em></h2>
      <p className="sec-sub fu d1">From pixel-perfect Flutter apps to blazing Next.js platforms — Team 4O4 covers every layer of the stack.</p>

      <div className="svc-layout">
        <div className="svc-sidebar fu">
          <div className="svc-sidebar-title font-orbitron">Our Two Superpowers</div>
          <p>We specialize in two platforms and go deep — not shallow across ten technologies.</p>
          <div className="stack-duo font-mono">
            <div className="stack-block fu d1">
              <div className="stack-block-head sh-next">⬡ Next.js — Web</div>
              <div className="stack-block-desc">App Router, SSR/SSG, Edge Runtime, API Routes, Auth. Full-stack React that deploys in minutes.</div>
            </div>
            <div className="stack-block fu d2">
              <div className="stack-block-head sh-flutter">◆ Flutter — Mobile</div>
              <div className="stack-block-desc">One codebase, native iOS + Android. BLoC state, Firebase backend, App Store launch included.</div>
            </div>
          </div>
        </div>

        <div className="svc-grid">
          <div className="svc-card fu">
            <div className="svc-num font-mono">01</div>
            <span className="svc-icon">⬡</span>
            <div className="svc-name font-orbitron">Next.js Web Apps</div>
            <p className="svc-desc">SaaS platforms, dashboards, e-commerce, marketing sites. Server components, edge functions, perfect Lighthouse scores.</p>
            <div className="svc-pills font-mono">
              <span className="svc-pill lime">Next.js 15</span>
              <span className="svc-pill lime">TypeScript</span>
              <span className="svc-pill">React</span>
              <span className="svc-pill">Tailwind</span>
            </div>
          </div>
          <div className="svc-card fu d1">
            <div className="svc-num font-mono">02</div>
            <span className="svc-icon">◆</span>
            <div className="svc-name font-orbitron">Flutter Mobile Apps</div>
            <p className="svc-desc">Cross-platform apps with native performance. Smooth animations, offline support, 60fps guaranteed.</p>
            <div className="svc-pills font-mono">
              <span className="svc-pill fl">Flutter 3</span>
              <span className="svc-pill fl">Dart</span>
              <span className="svc-pill">BLoC</span>
              <span className="svc-pill">iOS + Android</span>
            </div>
          </div>
          <div className="svc-card fu d2">
            <div className="svc-num font-mono">03</div>
            <span className="svc-icon">🔥</span>
            <div className="svc-name font-orbitron">Firebase & Backend</div>
            <p className="svc-desc">Firestore, Auth, Cloud Functions, real-time listeners, push notifications. The full Firebase stack, architected correctly.</p>
            <div className="svc-pills font-mono">
              <span className="svc-pill">Firebase</span>
              <span className="svc-pill">Supabase</span>
              <span className="svc-pill">Node.js</span>
              <span className="svc-pill">PostgreSQL</span>
            </div>
          </div>
          <div className="svc-card fu d3">
            <div className="svc-num font-mono">04</div>
            <span className="svc-icon">🤖</span>
            <div className="svc-name font-orbitron">AI Integration</div>
            <p className="svc-desc">LLM-powered features inside your app or web platform. AI search, chat, generation, and recommendations — actually useful ones.</p>
            <div className="svc-pills font-mono">
              <span className="svc-pill">OpenAI</span>
              <span className="svc-pill">LangChain</span>
              <span className="svc-pill">RAG</span>
              <span className="svc-pill lime">AI Terminal</span>
            </div>
          </div>
          <div className="svc-card fu d4">
            <div className="svc-num font-mono">05</div>
            <span className="svc-icon">🎨</span>
            <div className="svc-name font-orbitron">UI/UX Design</div>
            <p className="svc-desc">Figma-to-code with zero gap. We design it, we build it — no designer/developer handoff breakdowns.</p>
            <div className="svc-pills font-mono">
              <span className="svc-pill">Figma</span>
              <span className="svc-pill">Prototyping</span>
              <span className="svc-pill">Design Systems</span>
            </div>
          </div>
          <div className="svc-card fu d5">
            <div className="svc-num font-mono">06</div>
            <span className="svc-icon">🚀</span>
            <div className="svc-name font-orbitron">Deploy & Publish</div>
            <p className="svc-desc">Vercel deployments, App Store submissions, CI/CD pipelines. We handle the full launch — not just the code.</p>
            <div className="svc-pills font-mono">
              <span className="svc-pill">Vercel</span>
              <span className="svc-pill">App Store</span>
              <span className="svc-pill">Play Store</span>
              <span className="svc-pill">GitHub Actions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
