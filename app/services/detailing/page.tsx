import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Interior & Exterior Car Detailing Olathe KS | Titanium Mobile Detailing",
  description: "Interior detailing from $180, exterior from $120, full detail from $280. Professional mobile car detailing in Olathe, Overland Park & Kansas City metro. We come to you.",
};

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

export default function DetailingServices() {
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
                Detailing Packages
              </p>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark leading-snug">
                Detailing Services
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
                  <ul className="space-y-2 mb-6">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-brand-dark/70">
                        <span className="text-brand mt-0.5">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <p className="text-brand-dark/60 text-sm leading-relaxed mb-8 flex-1">{s.description}</p>
                  <a
                    href="#book"
                    className="block text-center px-4 py-2.5 bg-brand text-white font-semibold text-sm rounded hover:bg-brand-dark transition-colors duration-200"
                  >
                    Book This Package
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <br />
      <Contact />
      <Footer />
    </>
  );
}
