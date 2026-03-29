"use client";

import Link from "next/link";
import { useState } from "react";
import Modal from "./Modal";
import ContactForm from "./ContactForm";

export default function Navbar() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <nav>
        <Link href="/" className="nav-logo">
          <div className="logo-mark">
            <div className="logo-hex"></div>
            <span className="logo-inner font-orbitron">4O4</span>
          </div>
          <div>
            <div className="logo-text font-orbitron"><span data-text="TEAM 4O4">TEAM 4O4</span></div>
            <div className="logo-sub font-mono">Dev Collective</div>
          </div>
        </Link>

        <ul className="nav-links font-mono">
          <li><Link href="#services"><span data-text="Services">Services</span></Link></li>
          <li><Link href="#ai"><span data-text="AI Terminal">AI Terminal</span></Link></li>
          <li><Link href="#work"><span data-text="Work">Work</span></Link></li>
          <li><Link href="#team"><span data-text="Team">Team</span></Link></li>
          <li><Link href="#process"><span data-text="Process">Process</span></Link></li>
        </ul>

        <div className="nav-status">
          <div className="status-pill font-mono">
            <span className="status-dot"></span>AVAILABLE
          </div>
          <button 
            onClick={() => setIsContactOpen(true)}
            className="nav-cta font-mono"
          >
            <span data-text="Hire 4O4">Hire 4O4</span>
          </button>
        </div>
      </nav>

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
