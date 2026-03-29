"use client";

import { Send } from "lucide-react";

export default function ContactForm() {
  return (
    <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div className="space-y-3">
          <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#c8ff00]/60">
            Full Name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full border-b border-[rgba(200,255,0,0.1)] bg-transparent py-4 font-mono text-base text-[#e8f0ff] outline-none transition-all focus:border-[#c8ff00] focus:pl-2"
          />
        </div>
        <div className="space-y-3">
          <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#c8ff00]/60">
            Email Address
          </label>
          <input
            type="email"
            placeholder="john@example.com"
            className="w-full border-b border-[rgba(200,255,0,0.1)] bg-transparent py-4 font-mono text-base text-[#e8f0ff] outline-none transition-all focus:border-[#c8ff00] focus:pl-2"
          />
        </div>
      </div>

      <div className="space-y-3">
        <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#c8ff00]/60">
          Project Type
        </label>
        <select className="w-full border-b border-[rgba(200,255,0,0.1)] bg-transparent py-4 font-mono text-base text-[#e8f0ff] outline-none transition-all focus:border-[#c8ff00] focus:pl-2">
          <option className="bg-[#080d18]">Next.js Web Platform</option>
          <option className="bg-[#080d18]">Flutter Mobile App</option>
          <option className="bg-[#080d18]">AI Integration</option>
          <option className="bg-[#080d18]">Full Stack Overhaul</option>
        </select>
      </div>

      <div className="space-y-3">
        <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#c8ff00]/60">
          Message
        </label>
        <textarea
          rows={5}
          placeholder="Tell us about your project..."
          className="w-full resize-none border-b border-[rgba(200,255,0,0.1)] bg-transparent py-4 font-mono text-base text-[#e8f0ff] outline-none transition-all focus:border-[#c8ff00] focus:pl-2"
        ></textarea>
      </div>

      <button
        type="submit"
        className="group mt-4 flex items-center justify-center gap-3 rounded-none bg-[#c8ff00] px-10 py-5 font-mono text-sm font-bold uppercase tracking-[0.2em] text-black transition-all hover:bg-[#d8ff20] hover:shadow-[0_0_30px_rgba(200,255,0,0.5)] active:scale-95"
      >
        Send Signal <Send className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </button>
    </form>
  );
}
