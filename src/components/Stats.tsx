"use client";

export default function Stats() {
  return (
    <div className="stats-row font-mono">
      <div className="stat-cell fu">
        <div className="stat-big font-orbitron">50+</div>
        <div className="stat-lbl">Projects Shipped</div>
      </div>
      <div className="stat-cell fu d1">
        <div className="stat-big font-orbitron">∞</div>
        <div className="stat-lbl">Lines of Code</div>
      </div>
      <div className="stat-cell fu d2">
        <div className="stat-big font-orbitron">4.9★</div>
        <div className="stat-lbl">App Store Rating</div>
      </div>
      <div className="stat-cell fu d3">
        <div className="stat-big font-orbitron">0ms</div>
        <div className="stat-lbl">Excuses Per Sprint</div>
      </div>
    </div>
  );
}
