import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Other Services | Titanium Mobile Detailing",
  description: "Ceramic coating, headlight restoration, and engine bay cleaning. Mobile detailing services in Olathe, KS and Kansas City metro area.",
};

const services = [
  {
    name: "Ceramic Coating",
    price: "Starting at $699",
    tagline: "Long-term paint protection and paint correction",
    icon: "🛡️",
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

export default function OtherServices() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-sky pt-[124px]">
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <a href="/services" className="text-brand text-sm hover:underline mb-4 inline-block">
                ← Back to Services
              </a>
              <p className="text-brand uppercase tracking-[0.2em] text-sm font-medium mb-4">
                Specialized Treatments
              </p>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark leading-snug">
                Other Services
              </h1>
              <p className="text-brand-dark/60 text-base mt-4">
                Prices vary by vehicle size. Contact us for an exact quote.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((s) => (
                <div key={s.name} className="bg-white rounded-xl border border-brand/10 shadow-sm p-8 flex flex-col">
                  <div className="text-5xl mb-4">{s.icon}</div>
                  <h2 className="font-serif text-xl font-bold text-brand-dark mb-1">{s.name}</h2>
                  <p className="text-brand text-xs mb-2">{s.tagline}</p>
                  <p className="font-semibold text-brand text-sm mb-6">{s.price}</p>
                  <ul className="space-y-2 flex-1 mb-8">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-brand-dark/70">
                        <span className="text-brand mt-0.5">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#book"
                    className="block text-center px-4 py-2.5 bg-brand text-white font-semibold text-sm rounded hover:bg-brand-dark transition-colors duration-200"
                  >
                    Book This Service
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
