"use client";

import { useEffect, useState } from "react";

const images = ["/hero-first.jpg", "/hero9.jpg", "/hero7.jpg", "/hero2new.jpg", "/hero3.jpg", "/hero4.jpg", "/hero5.jpg", "/hero6.jpg", "/hero8.jpg", "/hero10.jpg"];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark"
    >
      {/* Crossfading background images */}
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: i === current ? 1 : 0, transition: "opacity 3000ms ease-in-out" }}
        />
      ))}

      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-brand-dark/50 pointer-events-none z-10" />


      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center pt-24">
<h1 className="font-serif text-3xl md:text-7xl font-bold text-white leading-tight mb-6" style={{ marginTop: "40px" }}>
          Mobile Car Detailing <br />
          <span className="text-white italic">Olathe, KS</span>
        </h1>

        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          We bring a showroom-quality detail straight to your driveway in Olathe, KS and the Kansas City metro area. No appointments to drive to — just flawless results wherever you are.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center" style={{ marginTop: "40px" }}>
          <a
            href="#book"
            className="inline-block px-8 py-4 bg-white text-brand-dark font-semibold rounded hover:bg-baby-blue transition-colors duration-300 text-base tracking-wide"
          >
            Book Your Detail
          </a>
          <a
            href="#pricing"
            className="inline-block px-8 py-4 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-brand-dark transition-colors duration-300 text-base tracking-wide"
          >
            View Pricing
          </a>
        </div>

        {/* Quick stats bar */}
        <div className="mt-8 grid grid-cols-3 gap-6 max-w-xl mx-auto border-t border-white/20 pt-10">
          {[
            { value: "500+", label: "Hours Detailed" },
            { value: "5★", label: "Avg. Rating" },
            { value: "10+", label: "Cities Served" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-serif text-3xl font-bold text-white">{s.value}</div>
              <div className="text-white/60 text-sm mt-1 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-1 opacity-50 z-20">
        <div className="w-px h-10 bg-white animate-pulse" />
        <span className="text-xs text-white tracking-widest uppercase">Scroll</span>
      </div>
    </section>
  );
}
