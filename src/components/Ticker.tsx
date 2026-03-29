"use client";

export default function Ticker() {
  const items = [
    "Next.js 15", "Flutter 3", "Dart", "Firebase", "AI Terminal",
    "iOS Apps", "Android Apps", "Web Platforms", "REST APIs",
    "Team 4O4", "Antigravity", "Supabase"
  ];

  return (
    <div className="ticker font-mono">
      <div className="ticker-inner">
        {items.concat(items).map((item, i) => (
          <span key={i} className="tick">{item}</span>
        ))}
      </div>
    </div>
  );
}
