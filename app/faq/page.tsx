"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggle = (key: string) => setOpenIndex(openIndex === key ? null : key);

  const categories = [
    {
      title: "General Questions",
      icon: "💬",
      items: [
        {
          q: "What is mobile detailing?",
          a: "Mobile detailing means we come to you — your home, workplace, or anywhere else that's convenient. You don't need to drive anywhere or sit in a waiting room. We bring all the equipment and supplies needed to deliver a professional-grade detail right at your location.",
        },
        {
          q: "What areas do you serve?",
          a: "We serve Olathe, Overland Park, Lenexa, Shawnee, Kansas City, Lee's Summit, Blue Springs, and Independence. If you're unsure whether we cover your area, give us a call at (913) 433-3867 and we'll let you know.",
        },
        {
          q: "How long does a detail take?",
          a: "It depends on the service and vehicle size. An exterior detail typically takes 1.5–2 hours, an interior detail 2–3 hours, and a full premium detail 4–5 hours. Ceramic coating can take a full day due to paint correction and curing time.",
        },
        {
          q: "Do I need to be home during the detail?",
          a: "No — as long as we have access to your vehicle and a water source nearby, you're free to carry on with your day. Many of our clients are at work while we detail their car in the driveway.",
        },
        {
          q: "What do you need from me before the appointment?",
          a: "Just a clean space around the vehicle, access to an outdoor water spigot, and a power outlet if available. We handle everything else.",
        },
      ],
    },
    {
      title: "Pricing & Booking",
      icon: "💳",
      items: [
        {
          q: "How much does detailing cost?",
          a: "Our pricing starts at $120 for an exterior detail, $180 for an interior detail, $280 for a full premium detail, $70 for headlight restoration, $80 for engine bay cleaning, and $699 for ceramic coating. Prices may vary based on vehicle size and condition.",
        },
        {
          q: "How do I book an appointment?",
          a: "You can book directly through our website using the 'Book Now' button, by calling us at (913) 433-3867, or by texting us. Most appointments are available within 48 hours.",
        },
        {
          q: "Do you require a deposit?",
          a: "For standard detail packages, no deposit is required. For ceramic coating services, we may require a deposit at booking due to the time involved. We'll confirm this when you book.",
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept all major credit and debit cards, cash, and digital payments through Square. Payment is collected at the time of service.",
        },
        {
          q: "Do prices change based on vehicle size?",
          a: "Yes — larger vehicles like SUVs, trucks, and vans typically cost more than sedans due to the additional time and product required. All prices listed are starting prices. We'll give you an exact quote before confirming your appointment.",
        },
      ],
    },
    {
      title: "Our Services",
      icon: "🚗",
      items: [
        {
          q: "What's the difference between interior and exterior detailing?",
          a: "Interior detailing focuses on cleaning and restoring the inside of your vehicle — vacuuming, steam cleaning, leather conditioning, and odor elimination. Exterior detailing focuses on the outside — hand washing, paint sealant, wheel cleaning, and trim dressing. Our Full Premium Detail combines both.",
        },
        {
          q: "How long does ceramic coating last?",
          a: "Our professional-grade ceramic coating lasts up to 7 years with proper maintenance. It creates a hydrophobic, UV-resistant barrier that protects your paint from dirt, water, oxidation, and light scratches.",
        },
        {
          q: "Do you do paint correction?",
          a: "Yes — multi-stage paint correction is included with every ceramic coating package. This removes swirl marks, light scratches, and oxidation before the ceramic is applied so your finish looks flawless.",
        },
        {
          q: "Can you remove bad odors from my car?",
          a: "Yes. Our interior detail includes odor elimination treatment that targets pet odors, smoke, food smells, and general musty odors. For severe cases, we may recommend an ozone treatment as an add-on.",
        },
        {
          q: "Can I add services to my booking?",
          a: "Absolutely. Engine bay cleaning and headlight restoration can be added to any detail package. Just mention it when booking and we'll include it in your quote.",
        },
      ],
    },
    {
      title: "Ceramic Coating",
      icon: "🛡️",
      items: [
        {
          q: "Is ceramic coating worth it?",
          a: "For most vehicle owners, yes. Ceramic coating eliminates the need for regular waxing, makes your car much easier to clean, and protects your paint from UV damage and oxidation for years. It's especially worth it if you plan to keep your vehicle long-term or want to maintain its resale value.",
        },
        {
          q: "How do I care for my car after ceramic coating?",
          a: "Avoid washing your vehicle for at least 7 days after the coating is applied. After that, hand washing is recommended over automatic car washes. We'll give you a full aftercare guide at the time of service.",
        },
        {
          q: "Does ceramic coating prevent scratches?",
          a: "Ceramic coating adds a layer of scratch resistance but it is not scratch-proof. It helps protect against light swirl marks and minor abrasions, but deep scratches from rocks or keys can still penetrate.",
        },
      ],
    },
    {
      title: "Contact & Support",
      icon: "📞",
      items: [
        {
          q: "How do I get in touch with you?",
          a: "You can reach us by phone or text at (913) 433-3867, by email at jonathanzamora@titaniumdetailing.com, or through the contact form on our website. We typically respond within a few hours.",
        },
        {
          q: "What are your hours?",
          a: "We operate Monday through Friday from 1pm to 9pm, and Saturday through Sunday from 12pm to 9pm.",
        },
        {
          q: "What if I'm not happy with the service?",
          a: "Your satisfaction is guaranteed. If you're not happy with any part of your detail, contact us within 24 hours and we'll make it right — no questions asked.",
        },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-sky pt-[124px]">
        {/* Hero */}
        <section className="bg-brand py-20 px-6 text-center">
          <p className="text-white/60 uppercase tracking-[0.2em] text-sm font-medium mb-4">
            Got Questions?
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Everything you need to know about Titanium Mobile Detailing — our services, pricing, booking, and more.
          </p>
        </section>

        {/* FAQ Accordion */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto space-y-12">
            {categories.map((cat) => (
              <div key={cat.title}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{cat.icon}</span>
                  <h2 className="font-serif text-2xl font-bold text-brand-dark">{cat.title}</h2>
                </div>
                <div className="space-y-3">
                  {cat.items.map((item, i) => {
                    const key = `${cat.title}-${i}`;
                    const isOpen = openIndex === key;
                    return (
                      <div
                        key={key}
                        className="bg-white rounded-xl border border-brand/10 shadow-sm overflow-hidden"
                      >
                        <button
                          onClick={() => toggle(key)}
                          className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-sky/40 transition-colors duration-200"
                          aria-expanded={isOpen}
                        >
                          <span className="font-semibold text-brand-dark text-sm md:text-base">{item.q}</span>
                          <span
                            className={`text-brand text-xl font-light shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                          >
                            +
                          </span>
                        </button>
                        <div
                          className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                        >
                          <p className="px-6 pb-6 text-brand-dark/65 text-sm leading-relaxed">
                            {item.a}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Still need help */}
        <section className="py-16 px-6 bg-baby-blue">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold text-brand-dark mb-4">Still Have Questions?</h2>
            <p className="text-brand-dark/65 text-base mb-10 max-w-xl mx-auto">
              Can't find what you're looking for? Reach out directly — we're happy to help.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              <div className="bg-white rounded-xl p-6 border border-brand/10 shadow-sm text-center">
                <div className="text-3xl mb-3">📞</div>
                <p className="font-semibold text-brand-dark text-sm mb-1">Call or Text</p>
                <p className="text-brand text-sm">(913) 433-3867</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-brand/10 shadow-sm text-center">
                <div className="text-3xl mb-3">✉️</div>
                <p className="font-semibold text-brand-dark text-sm mb-1">Email Us</p>
                <p className="text-brand text-sm break-all">jonathanzamora@titaniumdetailing.com</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-brand/10 shadow-sm text-center">
                <div className="text-3xl mb-3">🕐</div>
                <p className="font-semibold text-brand-dark text-sm mb-1">Hours</p>
                <p className="text-brand text-sm">Mon–Fri: 1pm–9pm</p>
                <p className="text-brand text-sm">Sat–Sun: 12pm–9pm</p>
              </div>
            </div>
            <a
              href="#book"
              className="inline-block px-8 py-4 bg-brand text-white font-semibold rounded hover:bg-brand-dark transition-colors duration-200 text-base"
            >
              Book Your Detail Today
            </a>
          </div>
        </section>
      </main>
      <Contact />
      <Footer />
    </>
  );
}
