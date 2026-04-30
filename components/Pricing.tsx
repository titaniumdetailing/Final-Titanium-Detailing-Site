"use client";

import { useState } from "react";
import Image from "next/image";

const packages = [
  {
    name: "Interior Detail",
    price: "Starting at $180",
    icon: <Image src="/sparkles.png" alt="sparkles" width={48} height={48} />,
    tagline: "Deep clean inside your vehicle",
    front: [
      "Full vacuum of seats, carpet & trunk",
      "Dashboard & console wipe-down",
      "Interior glass cleaning",
      "Air vent detailing",
    ],
    back: [
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
    icon: <Image src="/bubbles.png" alt="bubbles" width={48} height={48} />,
    tagline: "Restore your paint's brilliance",
    front: [
      "Hand wash & rinse",
      "Wheel & tire deep clean",
      "Exterior glass polish",
      "Tire dressing application",
    ],
    back: [
      "Paint sealant or wax applied",
      "Trim & rubber dressing applied",
      "Door jamb detail",
    ],
  },
  {
    name: "Full Premium Detail",
    price: "Starting at $280",
    icon: "🏆",
    tagline: "The complete head-to-toe treatment",
    front: [
      "Everything in Interior Detail",
      "Everything in Exterior Detail",
    ],
    back: [],
  },
  {
    name: "Headlight Restoration",
    price: "Starting at $70",
    icon: "💡",
    tagline: "Restore clarity & road visibility",
    front: [
      "Remove yellowing & oxidation",
      "Multi-stage sanding process",
      "Polish & clarity restoration",
      "UV sealant applied",
      "Both headlights included",
    ],
    back: [
      "Dramatically improves appearance",
      "Improves nighttime visibility",
      "Protects against future oxidation",
      "Safer & cleaner look",
      "Quick 1-hour service",
    ],
  },
  {
    name: "Engine Bay Cleaning",
    price: "Starting at $80",
    icon: "🔧",
    tagline: "Clean under the hood",
    front: [
      "Degrease engine bay surfaces",
      "Hand rinse & blow dry",
      "Plastic & rubber protectant",
      "Remove built-up grime & oil",
      "Safe for all engine types",
    ],
    back: [
      "Easier to spot leaks & issues",
      "Preserves rubber & plastic parts",
      "Improves resale value",
      "Professional finish under the hood",
      "Combined with any detail package",
    ],
  },
  {
    name: "Ceramic Coating",
    price: "Starting at $699",
    icon: <Image src="/shield.png" alt="shield" width={48} height={48} />,
    tagline: "Long-term paint protection and paint correction",
    front: [
      "Everything in Exterior Detail",
      "Full paint decontamination",
      "Multi-stage paint correction",
      "Professional-grade ceramic applied",
      "Up to 7-year protection",
      "Hydrophobic finish",
    ],
    back: [
      "UV & oxidation resistance",
      "Easier maintenance long-term",
      "High-gloss depth & clarity",
    ],
  },
];

export default function Pricing() {
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <section id="pricing" className="bg-sky py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <p className="text-brand uppercase tracking-[0.2em] text-sm font-medium mb-4">
            Our Packages
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark leading-snug">
            Transparent Pricing
          </h2>
        </div>
        <p className="text-center text-brand-dark/60 text-[16px] mb-14">
          Hover a card to see what&apos;s included
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <div
              key={pkg.name}
              className="flip-card relative h-96 cursor-pointer"
              style={{ perspective: "1000px" }}
              onMouseEnter={() => setFlipped(i)}
              onMouseLeave={() => setFlipped(null)}
              onClick={() => setFlipped(flipped === i ? null : i)}
            >
              <div
                className={`flip-card-inner relative w-full h-full ${flipped === i ? "flipped" : ""}`}
              >
                {/* Front */}
                <div className="flip-card-front absolute inset-0 bg-white rounded-xl border border-brand/10 shadow-sm p-6 flex flex-col justify-center items-center text-center">
                  <div className="text-5xl mb-4">{pkg.icon}</div>
                  <h3 className="font-serif text-xl font-bold text-brand-dark mb-1">
                    {pkg.name}
                  </h3>
                  <p className="text-brand text-xs mb-4">{pkg.tagline}</p>
                  <p className="font-semibold text-brand text-sm">{pkg.price}</p>
                </div>

                {/* Back */}
                <div className="flip-card-back absolute inset-0 bg-brand rounded-xl shadow-sm p-6 flex flex-col">
                  <h3 className="font-serif text-xl font-bold text-white mb-2">
                    What&apos;s Included
                  </h3>
                  <ul className="space-y-2 flex-1">
                    {[...pkg.front, ...pkg.back].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-white/85">
                        <span className="text-baby-blue mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#book"
                    className="mt-4 block text-center px-4 py-2.5 bg-white text-brand font-semibold text-sm rounded hover:bg-baby-blue hover:text-brand-dark transition-colors duration-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Book This Package
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-brand-dark/50 text-[20px] mt-10">
          Prices vary by vehicle size. Contact us for an exact quote.
        </p>
      </div>
    </section>
  );
}
