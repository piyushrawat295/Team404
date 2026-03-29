"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer-brand">
        <Link href="/" className="nav-logo" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="logo-mark">
            <div className="logo-hex"></div>
            <span className="logo-inner font-orbitron">4O4</span>
          </div>
          <div>
            <div className="logo-text font-orbitron" style={{ fontSize: ".8rem" }}>TEAM 4O4</div>
            <div className="logo-sub font-mono">Dev Collective</div>
          </div>
        </Link>
        <span className="footer-copy font-mono">© 2025 Team 4O4. All rights reserved.</span>
      </div>
      <ul className="footer-links">
        <li><Link href="#">Privacy</Link></li>
        <li><Link href="#">Terms</Link></li>
        <li><Link href="#">Blog</Link></li>
      </ul>
      <div className="footer-socials font-mono">
        <Link href="#" className="soc">GH</Link>
        <Link href="#" className="soc">𝕏</Link>
        <Link href="#" className="soc">in</Link>
        <Link href="#" className="soc">ig</Link>
      </div>
    </footer>
  );
}
