"use client";

import Link from "next/link";
import { useState } from "react";
import Modal from "./Modal";
import ContactForm from "./ContactForm";

export default function CTA() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <section className="cta-section" id="contact">
        <div className="cta-bg-orb"></div>
        <div className="cta-404 font-orbitron">4O4</div>
        <h2 className="cta-title fu font-orbitron">
          Got an Idea?
          <span className="outline">We'll Build It.</span>
        </h2>
        <p className="cta-sub fu d1">Next.js web platform, Flutter app, or both — Team 4O4 ships it. First call is free. Let's see what we can defy together.</p>
        <div className="cta-actions fu d2 font-mono">
          <button 
            onClick={() => setIsContactOpen(true)}
            className="btn-lime"
          >
            Email Team 4O4
          </button>
          <Link href="#work" className="btn-ghost">Browse Our Work</Link>
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
