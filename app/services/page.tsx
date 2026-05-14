import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata = {
  title: "Services | Titanium Mobile Detailing",
  description: "Explore our detailing packages and additional services for mobile car detailing in Olathe, KS and the Kansas City metro area.",
};

export default function Services() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-sky pt-[124px]">
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-brand uppercase tracking-[0.2em] text-sm font-medium mb-4">
                What We Offer
              </p>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark leading-snug">
                Our Services
              </h1>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {/* Detailing Services */}
              <a
                href="/services/detailing"
                className="group bg-white rounded-xl border border-brand/10 shadow-sm overflow-hidden flex flex-col items-center text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-full h-64 relative mb-6">
                  <Image src="/hero-first.jpg" alt="Car detailing" fill className="object-cover" />
                </div>
                <div className="px-10 pb-10 flex flex-col items-center">
                <h2 className="font-serif text-2xl font-bold text-brand-dark mb-3">
                  Detailing Services
                </h2>
                <p className="text-brand-dark/60 text-sm leading-relaxed mb-6">
                  Interior, exterior, and full premium detail packages. Professional hand detailing delivered to your door.
                </p>
                <span className="mt-auto px-6 py-3 bg-brand text-white font-semibold text-sm rounded hover:bg-brand-dark transition-colors duration-200">
                  View Packages
                </span>
                </div>
              </a>

              {/* Other Services */}
              <a
                href="/services/other"
                className="group bg-white rounded-xl border border-brand/10 shadow-sm overflow-hidden flex flex-col items-center text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-full h-64 relative mb-6">
                  <Image src="/polish.jpg" alt="Other detailing services" fill className="object-cover" />
                </div>
                <div className="px-10 pb-10 flex flex-col items-center">
                <h2 className="font-serif text-2xl font-bold text-brand-dark mb-3">
                  Other Services
                </h2>
                <p className="text-brand-dark/60 text-sm leading-relaxed mb-6">
                  Ceramic coating, headlight restoration, and engine bay cleaning. Specialized treatments for your vehicle.
                </p>
                <span className="mt-auto px-6 py-3 bg-brand text-white font-semibold text-sm rounded hover:bg-brand-dark transition-colors duration-200">
                  View Services
                </span>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
