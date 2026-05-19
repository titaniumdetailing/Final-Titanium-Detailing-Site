"use client";

import { useState } from "react";
import Image from "next/image";

const services = [
  {
    name: "Ceramic Coating",
    price: "Starting at $699",
    tagline: "Long-term paint protection and paint correction",
    icon: <Image src="/shield.png" alt="shield" width={48} height={48} />,
    description: "Titanium Mobile Detailing offers professional ceramic coating in Olathe, KS and the Kansas City metro area — one of the most effective ways to protect your car's paint for years to come. Unlike wax or sealant, ceramic coating bonds directly to your clear coat, creating a hydrophobic, UV-resistant barrier that repels dirt, water, and oxidation for up to 7 years. Every ceramic coating service includes full paint decontamination and multi-stage paint correction before application, so your vehicle's finish looks flawless from day one — with no drop-off required.",
    features: [
      "Everything in Exterior Detail",
      "Full paint decontamination",
      "Multi-stage paint correction",
      "Professional-grade ceramic applied",
      "Up to 7-year protection",
      "Hydrophobic finish",
      "UV & oxidation resistance",
      "Easier maintenance long-term",
      "High-gloss depth & clarity",
    ],
  },
  {
    name: "Headlight Restoration",
    price: "Starting at $70",
    tagline: "Restore clarity & road visibility",
    icon: "💡",
    description: "Yellowed or foggy headlights aren't just an eyesore — they reduce nighttime visibility and hurt your car's resale value. Titanium Mobile Detailing's headlight restoration service in Olathe, KS removes oxidation and UV damage through a professional multi-stage sanding and polishing process, finishing with a UV sealant to keep lenses clear long-term. Starting at just $70, our mobile headlight restoration comes to you anywhere in Olathe, Overland Park, Lenexa, Shawnee, and the greater Kansas City metro area — with most appointments available within 48 hours.",
    features: [
      "Remove yellowing & oxidation",
      "Multi-stage sanding process",
      "Polish & clarity restoration",
      "UV sealant applied",
      "Both headlights included",
      "Dramatically improves appearance",
      "Improves nighttime visibility",
      "Protects against future oxidation",
      "Quick 1-hour service",
    ],
  },
  {
    name: "Engine Bay Cleaning",
    price: "Starting at $80",
    tagline: "Clean under the hood",
    icon: "🔧",
    description: "A clean engine bay isn't just about looks — it makes it easier to spot leaks, preserves rubber and plastic components, and adds to your vehicle's resale value. Titanium Mobile Detailing offers professional engine bay cleaning in Olathe, KS and across the Kansas City metro area, using safe degreasing and hand-rinse techniques suitable for all engine types. Add it to any detail package or book it as a standalone service — we come to you in Olathe, Overland Park, Lenexa, Shawnee, and surrounding areas.",
    features: [
      "Degrease engine bay surfaces",
      "Hand rinse & blow dry",
      "Plastic & rubber protectant",
      "Remove built-up grime & oil",
      "Safe for all engine types",
      "Easier to spot leaks & issues",
      "Preserves rubber & plastic parts",
      "Improves resale value",
      "Can be combined with any detail package",
    ],
  },
];

export default function OtherCards() {
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
              Book This Service
            </a>
          </div>
        );
      })}
    </div>
  );
}
