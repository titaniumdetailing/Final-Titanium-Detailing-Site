import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatIsDetailing from "@/components/WhatIsDetailing";
import Testimonials from "@/components/Testimonials";
import OurCities from "@/components/OurCities";
import Pricing from "@/components/Pricing";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatIsDetailing />
        <Testimonials />
        <OurCities />
        <Pricing />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
