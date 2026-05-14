import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import localFont from "next/font/local";
import BookingModal from "@/components/BookingModal";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const felixTitling = localFont({
  src: "../public/fonts/FelixTitling.ttf",
  variable: "--font-felix",
});

export const metadata: Metadata = {
  title: "Mobile Detailing Olathe KS | Titanium Mobile Detailing",
  description:
    "Top-rated mobile auto detailing in Olathe, KS. We come to you for interior detailing, exterior detailing, ceramic coatings & more. Serving the Kansas City metro area.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${felixTitling.variable}`}>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18099504581" />
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-18099504581');
        `}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutoDealer",
          "@id": "https://www.titaniumdetailing.com",
          "name": "Titanium Mobile Detailing",
          "url": "https://www.titaniumdetailing.com",
          "telephone": "(913) 433-3867",
          "email": "jonathanzamora@titaniumdetailing.com",
          "description": "Professional mobile auto detailing in Olathe, KS and the Kansas City metro area. We come to you for interior detailing, exterior detailing, ceramic coating, headlight restoration, and engine bay cleaning.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Olathe",
            "addressRegion": "KS",
            "addressCountry": "US"
          },
          "areaServed": [
            { "@type": "City", "name": "Olathe" },
            { "@type": "City", "name": "Overland Park" },
            { "@type": "City", "name": "Lenexa" },
            { "@type": "City", "name": "Shawnee" },
            { "@type": "City", "name": "Kansas City" },
            { "@type": "City", "name": "Lee's Summit" },
            { "@type": "City", "name": "Blue Springs" },
            { "@type": "City", "name": "Independence" }
          ],
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
              "opens": "13:00",
              "closes": "21:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Saturday","Sunday"],
              "opens": "12:00",
              "closes": "21:00"
            }
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": "3",
            "bestRating": "5",
            "worstRating": "1"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Mobile Detailing Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Interior Detailing",
                  "description": "Professional mobile interior detailing including full vacuum, steam cleaning, leather conditioning, odor elimination, and UV protectant."
                },
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "price": "180",
                  "priceCurrency": "USD",
                  "minPrice": "180"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Exterior Detailing",
                  "description": "Professional mobile exterior detailing including hand wash, wheel and tire deep clean, paint sealant, trim dressing, and door jamb detail."
                },
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "price": "120",
                  "priceCurrency": "USD",
                  "minPrice": "120"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Full Premium Detail",
                  "description": "Complete head-to-toe mobile detailing combining full interior and exterior detail packages."
                },
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "price": "280",
                  "priceCurrency": "USD",
                  "minPrice": "280"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Ceramic Coating",
                  "description": "Professional ceramic coating with full paint decontamination and multi-stage paint correction. Up to 7-year protection with hydrophobic finish."
                },
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "price": "699",
                  "priceCurrency": "USD",
                  "minPrice": "699"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Headlight Restoration",
                  "description": "Mobile headlight restoration removing yellowing and oxidation through multi-stage sanding and polishing, finished with UV sealant."
                },
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "price": "70",
                  "priceCurrency": "USD",
                  "minPrice": "70"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Engine Bay Cleaning",
                  "description": "Professional engine bay cleaning including degreasing, hand rinse, blow dry, and plastic and rubber protectant. Safe for all engine types."
                },
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "price": "80",
                  "priceCurrency": "USD",
                  "minPrice": "80"
                }
              }
            ]
          }
        })}} />
      </head>
      <body className="min-h-screen antialiased">
        {children}
        <BookingModal />
      </body>
    </html>
  );
}
