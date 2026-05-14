"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Overview", href: "#what-is-detailing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Cities", href: "#cities" },
  { label: "Pricing", href: "/services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-brand">
      <div className="w-full pl-4 pr-8 h-[124px] flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 shrink-0">
          <img src="/logo.png" alt="Titanium Detailing logo" className="h-[80px] w-auto" />
          <span className="text-[18px] tracking-wide text-white" style={{ fontFamily: "var(--font-felix), serif" }}>
            Titanium Detailing
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white hover:text-white/70 text-xs font-medium tracking-widest uppercase transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#book"
            className="ml-1 px-4 py-1.5 bg-white text-brand font-semibold text-xs rounded hover:bg-baby-blue hover:text-brand-dark transition-colors duration-200 tracking-wide uppercase"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-brand-dark px-6 pt-4 pb-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-white text-base font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 px-5 py-2 bg-white text-brand font-semibold text-sm rounded text-center hover:bg-baby-blue transition-colors"
          >
            Book Now
          </a>
        </div>
      )}
    </header>
  );
}
