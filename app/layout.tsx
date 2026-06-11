import type { Metadata } from "next";
import { Outfit, Lato } from "next/font/google";
import { preload } from "react-dom";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "My ESA Therapist – ESA Evaluations by Licensed Professionals",
  description:
    "Connect with U.S. licensed mental health professionals for ESA evaluation conducted through secure telehealth and aligned with federal housing guidelines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  preload("/images/hero-person-pet-care.jpg", {
    as: "image",
    fetchPriority: "high",
  });

  return (
    <html lang="en" className={`${outfit.variable} ${lato.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:shadow-lg"
          style={{ color: "#134C5F" }}
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
