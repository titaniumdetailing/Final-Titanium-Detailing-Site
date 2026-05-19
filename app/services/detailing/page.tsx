import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import DetailingCards from "@/components/DetailingCards";

export const metadata = {
  title: "Interior & Exterior Car Detailing Olathe KS | Titanium Mobile Detailing",
  description: "Interior detailing from $180, exterior from $120, full detail from $280. Professional mobile car detailing in Olathe, Overland Park & Kansas City metro. We come to you.",
};

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
            <DetailingCards />
          </div>
        </section>
      </main>
      <br />
      <Contact />
      <Footer />
    </>
  );
}
