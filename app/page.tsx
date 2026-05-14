import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile Car Detailing Olathe KS | We Come to You | Titanium Detailing",
  description: "Professional mobile car detailing in Olathe, KS and Kansas City metro. Interior details from $180, ceramic coatings from $699. We come to you — book within 48 hours.",
};

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
