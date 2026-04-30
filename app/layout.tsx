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
  title: "Titanium Mobile Detailing | Premium Auto Detailing",
  description:
    "Professional mobile auto detailing services brought directly to your door. Interior, exterior, full detail & ceramic coatings.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${felixTitling.variable}`}>
      <body className="min-h-screen antialiased">
        {children}
        <BookingModal />
      </body>
    </html>
  );
}
