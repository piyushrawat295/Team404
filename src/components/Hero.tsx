"use client";

import Particles from "./Particles";
import Link from "next/link";
import { useState } from "react";
import Modal from "./Modal";
import ContactForm from "./ContactForm";

export default function Hero() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <section className="hero">
        <div className="hero-atmosphere"></div>
        <div className="hero-grid"></div>
        <Particles />

        <div className="hero-inner">
          {/* LEFT */}
          <div className="hero-left">
            <div className="hero-label">
              <div className="hero-label-line"></div>
              <span className="font-mono">Antigravity Dev Collective · Est. 2023</span>
            </div>
            <h1 className="hero-title font-orbitron">
              <span className="t1">WE ARE</span>
              <span className="t2">TEAM 4O4</span>
              <span className="t3 font-mono">// not found in ordinary</span>
            </h1>
            <p className="hero-desc">
              A crew that builds <em className="pill pill-next font-mono">⬡ Next.js</em> web platforms and
              <em className="pill pill-flutter font-mono">◆ Flutter</em> apps with precision, speed, and
              a zero-excuses delivery culture. Powered by an AI terminal that never sleeps.
            </p>
            <div className="hero-btns font-mono">
              <Link href="#work" className="btn-lime">View Our Work</Link>
              <button 
                onClick={() => setIsContactOpen(true)}
                className="btn-ghost"
              >
                Start a Project →
              </button>
            </div>
            <div className="hero-tech font-mono">
              <div className="tech-badge"><span className="tb-dot" style={{ background: "#fff" }}></span>Next.js 15</div>
              <div className="tech-badge"><span className="tb-dot" style={{ background: "var(--flutter)" }}></span>Flutter 3</div>
              <div className="tech-badge"><span className="tb-dot" style={{ background: "var(--lime)" }}></span>Dart</div>
              <div className="tech-badge"><span className="tb-dot" style={{ background: "#f97316" }}></span>Firebase</div>
              <div className="tech-badge"><span className="tb-dot" style={{ background: "var(--cyan)" }}></span>Node.js</div>
              <div className="tech-badge"><span className="tb-dot" style={{ background: "#a855f7" }}></span>Supabase</div>
            </div>
          </div>

          {/* RIGHT — ANTIGRAVITY AI TERMINAL */}
          <div className="hero-right">
            <div className="terminal-container">
              {/* Orbit rings */}
              <div className="orbit-ring orbit-ring-1">
                <div 
                  className="orbit-node node-lime" 
                  style={{ transform: "translate(-50%,-50%) rotate(0deg) translateX(250px)", animation: "orbitNode1 20s linear infinite" }}
                ></div>
              </div>
              <div className="orbit-ring orbit-ring-2">
                <div 
                  className="orbit-node node-flutter" 
                  style={{ transform: "translate(-50%,-50%) rotate(0deg) translateX(190px)", animation: "orbitNode2 14s linear infinite reverse" }}
                ></div>
              </div>

              {/* MAIN TERMINAL */}
              <div className="ag-terminal">
                <div className="term-bar">
                  <div className="term-dots">
                    <div className="td td1"></div>
                    <div className="td td2"></div>
                    <div className="td td3"></div>
                  </div>
                  <div className="term-title font-mono">
                    ANTIGRAVITY AI TERMINAL v2.4
                  </div>
                  <div className="term-badge font-mono">LIVE</div>
                </div>

                <div className="term-body font-mono" id="termBody">
                  <div className="t-line"><span className="t-ps1-root">root@4o4</span><span className="t-dim">:~$</span>&nbsp;<span className="t-cmd">./antigravity --init --team="4O4"</span></div>
                  <span className="t-out">Booting Antigravity AI Core...</span>
                  <div className="t-progress"><div className="t-progress-fill" style={{ width: "100%" }}></div></div>
                  <span className="t-ok">✓ AI consciousness loaded · nodes: 847</span>
                  <br />
                  <div className="t-line"><span className="t-ps1">❯</span>&nbsp;<span className="t-cmd">ai generate --platform=web --stack=nextjs</span></div>
                  <span className="t-ai"><span className="t-ai-label">AI ›› </span>Scaffolding Next.js 15 + App Router...</span>
                  <span className="t-ok">✓ /app/layout.tsx</span>
                  <span className="t-ok">✓ /app/(dashboard)/page.tsx</span>
                  <span className="t-ok">✓ API routes · middleware · auth</span>
                  <br />
                  <div className="t-line"><span className="t-ps1">❯</span>&nbsp;<span className="t-cmd">ai generate --platform=mobile --stack=flutter</span></div>
                  <span className="t-fl">◆ Flutter project initialized</span>
                  <span className="t-fl">◆ lib/main.dart · BLoC architecture</span>
                  <span className="t-fl">◆ iOS + Android targets ready</span>
                  <br />
                  <div className="t-line"><span className="t-ps1">❯</span>&nbsp;<span className="t-cmd">ai deploy --env=production</span></div>
                  <div className="ai-thinking">
                    <span className="t-ai-label">AI ›› </span>Thinking
                    <div className="think-dots"><span>.</span><span>.</span><span>.</span></div>
                  </div>
                  <div className="t-progress"><div className="t-progress-fill" style={{ width: "88%" }}></div></div>
                  <span className="t-ok">✓ Web → Vercel · https://client-app.vercel.app</span>
                  <span className="t-ok">✓ App → Play Store · App Store</span>
                  <div className="t-line" style={{ marginTop: ".5rem" }}><span className="t-ps1">❯</span>&nbsp;<span className="t-cursor-block"></span></div>
                </div>

                <div className="term-status">
                  <div className="ts-left">
                    <div className="ts-item font-mono"><span className="status-dot-inline" style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--lime)", display: "inline-block", marginRight: 5 }}></span>WEB: LIVE</div>
                    <div className="ts-item font-mono"><span className="status-dot-inline" style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--flutter)", display: "inline-block", marginRight: 5 }}></span>APP: DEPLOYED</div>
                    <div className="ts-item font-mono">CPU: 12%</div>
                  </div>
                  <div className="ts-right">
                    <div className="ts-mode font-mono">ANTIGRAVITY MODE</div>
                  </div>
                </div>
              </div>

              {/* Floating mini cards */}
              <div className="term-float-card fc-ai font-mono">
                <div className="fc-label">AI Status</div>
                <div className="fc-val cyan">ACTIVE</div>
                <div className="fc-sub">847 nodes online</div>
              </div>
              <div className="term-float-card fc-deploy font-mono">
                <div className="fc-label">Last Deploy</div>
                <div className="fc-val">3 min ago</div>
                <div className="fc-sub">✓ prod · zero downtime</div>
              </div>
              <div className="term-float-card fc-flutter font-mono">
                <div className="fc-label">Flutter Build</div>
                <div className="fc-val blue">v3.27.0</div>
                <div className="fc-sub">iOS + Android ✓</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
        title="Initialize Project Protocol"
      >
        <ContactForm />
      </Modal>
    </>
  );
}
