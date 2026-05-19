"use client";

import { useState } from "react";

const services = [
  {
    name: "Interior Detail",
    price: "Starting at $180",
    tagline: "Deep clean inside your vehicle",
    icon: "🪣",
    description: "Titanium Mobile Detailing offers professional interior car detailing in Olathe, KS and the Kansas City metro area — coming directly to your driveway, home, or workplace. Our mobile interior detailing service goes far beyond a standard car wash or vacuum. Using steam cleaning, leather conditioning, shampoo treatment, and odor elimination, we restore your cabin to a near-factory finish. If you've been searching for interior detailing near me in Olathe, Overland Park, Lenexa, or Shawnee — we come to you.",
    features: [
      "Full vacuum of seats, carpet & trunk",
      "Dashboard & console wipe-down",
      "Interior glass cleaning",
      "Air vent detailing",
      "Steam cleaning of fabric or leather",
      "Odor elimination treatment",
      "UV protectant on all plastics",
      "Shampoo of carpets & floor mats",
      "Leather conditioning (if applicable)",
    ],
  },
  {
    name: "Exterior Detail",
    price: "Starting at $120",
    tagline: "Restore your paint's brilliance",
    icon: "🫧",
    description: "Titanium Mobile Detailing provides professional exterior car detailing in Olathe, KS and across the Kansas City metro area — no driving required. Our mobile exterior detailing service includes a hand car wash, wheel and tire deep clean, paint sealant, and trim dressing using professional-grade products safe for all paint types. Whether you need a one-time exterior detail or regular auto detailing near me in Overland Park, Lenexa, Shawnee, or Kansas City — we bring the detail shop straight to your driveway.",
    features: [
      "Hand wash & rinse",
      "Wheel & tire deep clean",
      "Exterior glass polish",
      "Tire dressing application",
      "Paint sealant or wax applied",
      "Trim & rubber dressing applied",
      "Door jamb detail",
    ],
  },
  {
    name: "Full Premium Detail",
    price: "Starting at $280",
    tagline: "The complete head-to-toe treatment",
    icon: "🏆",
    description: "The Full Premium Detail is our most complete mobile car detailing package — combining a full interior detail and full exterior detail into one head-to-toe transformation. Ideal for seasonal deep cleans, pre-sale prep, or anyone who wants the best auto detailing service available in Olathe, KS. If you're searching for a full detail near me in the Kansas City metro area — including Overland Park, Lenexa, Shawnee, or Olathe — Titanium Detailing will come to you, typically within 48 hours.",
    features: [
      "Everything in Interior Detail",
      "Everything in Exterior Detail",
    ],
  },
];

export default function DetailingCards() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((s, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={s.name} className="bg-white rounded-xl border border-brand/10 shadow-sm p-8 flex flex-col">
            <div className="text-5xl mb-4">{s.icon}</div>
            <h2 className="font-serif text-xl font-bold text-brand-dark mb-1">{s.name}</h2>
            <p className="text-brand text-xs mb-2">{s.tagline}</p>
            <p className="font-semibold text-brand text-sm mb-4">{s.price}</p>
            <button
              onClick={() => toggle(i)}
              className="flex items-center justify-between w-full text-sm font-semibold text-brand-dark border border-brand/20 rounded px-4 py-2.5 mb-4 hover:bg-sky/40 transition-colors duration-200"
              aria-expanded={isOpen}
            >
              <span>What&apos;s Included</span>
              <svg className={`w-4 h-4 text-brand transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[600px] opacity-100 mb-4" : "max-h-0 opacity-0"}`}>
              <ul className="space-y-2 mb-4">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-brand-dark/70">
                    <span className="text-brand mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <p className="text-brand-dark/60 text-sm leading-relaxed">{s.description}</p>
            </div>
            <a
              href="#book"
              className="mt-auto block text-center px-4 py-2.5 bg-brand text-white font-semibold text-sm rounded hover:bg-brand-dark transition-colors duration-200"
            >
              Book This Package
            </a>
          </div>
        );
      })}
    </div>
  );
}
