"use client";

export default function AIFeatures() {
  return (
    <section className="ai-section" id="ai">
      <div className="ai-bg"></div>
      <div className="ai-grid-lines"></div>
      <div className="ai-inner">
        <div className="fu">
          <div className="sec-tag font-mono">AI Terminal</div>
          <h2 className="sec-title font-orbitron">Antigravity<br /><em>AI Core</em></h2>
          <p style={{ fontSize: ".98rem", color: "var(--dim)", lineHeight: 1.8, maxWidth: "480px", marginBottom: ".5rem" }}>
            Our internal AI terminal isn't just a gimmick — it's the engine behind how we architect, scaffold, review, and deploy projects. Code that defies ordinary gravity.
          </p>
          <div className="ai-features">
            <div className="ai-feat fu d1">
              <span className="ai-feat-icon">⚡</span>
              <div>
                <div className="ai-feat-title">AI-Assisted Scaffolding</div>
                <div className="ai-feat-desc">Generate full Next.js app skeletons or Flutter project structures in seconds. Consistent architecture every time.</div>
              </div>
            </div>
            <div className="ai-feat fu d2">
              <span className="ai-feat-icon">🔍</span>
              <div>
                <div className="ai-feat-title">Intelligent Code Review</div>
                <div className="ai-feat-desc">Every PR runs through our AI reviewer — catching bugs, performance issues, and anti-patterns before humans even look.</div>
              </div>
            </div>
            <div className="ai-feat fu d3">
              <span className="ai-feat-icon">🌐</span>
              <div>
                <div className="ai-feat-title">Zero-Gravity Deployment</div>
                <div className="ai-feat-desc">One command deploys to Vercel (web), Play Store, and App Store simultaneously with AI-generated release notes.</div>
              </div>
            </div>
            <div className="ai-feat fu d4">
              <span className="ai-feat-icon">📡</span>
              <div>
                <div className="ai-feat-title">Live Project Telemetry</div>
                <div className="ai-feat-desc">Real-time monitoring with AI anomaly detection. Know about issues before your users do.</div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Terminal 2 */}
        <div className="fu d2">
          <div className="ai-terminal2 font-mono">
            <div className="at2-header">
              <div className="td td1"></div><div className="td td2"></div><div className="td td3"></div>
              <span className="at2-header-title">antigravity-ai · project-review</span>
            </div>
            <div className="at2-body">
              <div className="ai-line type-anim"><span className="ai-u">antigravity</span><span className="ai-r"> › </span><span className="ai-s">analyze --repo="client/app"</span></div>
              <div className="ai-line ai-r type-anim type-anim2">Scanning 847 files...</div>
              <div className="ai-line ai-r type-anim type-anim3">Running static analysis...</div>
              <div className="ai-line ai-g">✓ Flutter: 0 critical issues</div>
              <div className="ai-line ai-g">✓ Next.js: bundle size optimal</div>
              <div className="ai-line ai-o">⚠ 2 performance suggestions</div>
              <br />
              <div className="ai-line"><span className="ai-u">antigravity</span><span className="ai-r"> › </span><span className="ai-s">suggest --type=performance</span></div>
              <div className="ai-line ai-r"><span className="ai-u">AI ›</span> Found image optimization opportunity</div>
              <div className="ai-line ai-r"><span className="ai-u">AI ›</span> Recommend: next/image + lazy load</div>
              <div className="ai-line ai-r"><span className="ai-u">AI ›</span> Est. LCP improvement: ~340ms</div>
              <div className="ai-line ai-g">✓ Auto-fix applied to 3 files</div>
              <br />
              <div className="ai-line"><span className="ai-u">antigravity</span><span className="ai-r"> › </span><span className="ai-s">deploy --all --env=prod</span></div>
              <div className="ai-line ai-r">Deploying web → Vercel...</div>
              <div className="ai-line ai-r">Building Flutter → iOS, Android...</div>
              <div className="ai-line ai-g">✓ Web live: client-app.vercel.app</div>
              <div className="ai-line ai-g">✓ iOS submitted to App Store</div>
              <div className="ai-line ai-g">✓ Android uploaded to Play Store</div>
              <br />
              <div className="ai-line"><span className="ai-u">antigravity</span><span className="ai-r"> › </span><span style={{ color: "var(--lime)" }}>_</span><span className="t-cursor-block" style={{ width: "7px", height: "12px" }}></span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
