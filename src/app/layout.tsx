import type { Metadata } from "next";
import { Orbitron, JetBrains_Mono, Outfit } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Team 4O4 — Antigravity Dev Collective",
  description: "Next.js web platforms and Flutter apps with precision and speed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${jetbrainsMono.variable} ${outfit.variable} antialiased font-outfit bg-[#020304] text-[#e8f0ff] cursor-none`}
      >
        {children}
      </body>
    </html>
  );
}
