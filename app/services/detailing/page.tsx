import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Detailing Services | Titanium Mobile Detailing",
  description: "Interior detailing, exterior detailing, and full premium detail packages. Mobile car detailing in Olathe, KS and Kansas City metro area.",
};

const services = [
  {
    name: "Interior Detail",
    price: "Starting at $180",
    tagline: "Deep clean inside your vehicle",
    icon: "🪣",
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
                    Book This Package
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
