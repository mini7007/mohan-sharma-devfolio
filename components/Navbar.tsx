"use client";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between transition-all duration-300",
        scrolled
          ? "bg-navy/80 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      <a
        href="#"
        className="font-display font-black text-lg md:text-xl bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
        style={{ fontFamily: "var(--font-syne)" }}
      >
        Dev Mohan
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-8" role="list">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-slate-400 hover:text-slate-100 text-sm tracking-wide transition-colors duration-200"
            >
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#contact"
            className="bg-gradient-to-r from-blue-500 to-violet-500 text-white text-sm font-semibold px-5 py-2 rounded-lg hover:-translate-y-0.5 transition-transform duration-200"
          >
            Hire Me
          </a>
        </li>
      </ul>

      {/* Mobile toggle */}
      <button
        className="md:hidden text-slate-400 hover:text-slate-100"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 glass border-b border-white/[0.08] py-4 px-6 flex flex-col gap-4 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-300 text-sm py-1"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-center bg-gradient-to-r from-blue-500 to-violet-500 text-white text-sm font-semibold px-5 py-2.5 rounded-lg"
            onClick={() => setMobileOpen(false)}
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
