import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import OtherCards from "@/components/OtherCards";

export const metadata = {
  title: "Ceramic Coating & Headlight Restoration Olathe KS | Titanium Detailing",
  description: "Ceramic coating from $699, headlight restoration from $70, engine bay cleaning from $80. Mobile detailing specialists serving Olathe, KS and the Kansas City metro area.",
};

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
            <OtherCards />
          </div>
        </section>
      </main>
      <br />
      <Contact />
      <Footer />
    </>
  );
}
