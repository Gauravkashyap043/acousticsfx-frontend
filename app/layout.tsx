import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {
  Poppins,
  Playfair_Display,
  Work_Sans,
  Inter,
  Plus_Jakarta_Sans,
  Manrope,
  Lato,
} from "next/font/google";
import { Toaster } from "sonner";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import "./globals.css";

/* ================= Geist ================= */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* ================= Poppins ================= */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

/* ================= Playfair Display ================= */
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
});

/* ================= Work Sans ================= */
const worksans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-worksans",
  display: "swap",
});

/* ================= Inter ================= */
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

/* ================= Plus Jakarta Sans ================= */
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-plusjakarta",
  display: "swap",
});

/* ================= Manrope ================= */
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

/* ================= Lato ================= */
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "FX Acoustics — Premium Acoustic Solutions & Panels",
    template: "%s | FX Acoustics",
  },
  description:
    "FX Acoustics Inc. is a premium manufacturer of high-performance acoustic panels, wood acoustic solutions, fabric panels, baffles & clouds. Transforming spaces with elegant sound control.",
  keywords: [
    "acoustic panels",
    "wood acoustic panel",
    "fabric acoustic panel",
    "sound proofing",
    "acoustic solutions",
    "FX Acoustics",
    "NRC certified panels",
    "acoustic interiors",
  ],
  openGraph: {
    title: "FX Acoustics — Premium Acoustic Solutions & Panels",
    description:
      "Premium manufacturer of high-performance acoustic panels. From NRC-certified panels to turnkey acoustic interiors.",
    type: "website",
    locale: "en_US",
    siteName: "FX Acoustics",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${poppins.variable}
          ${playfair.variable}
          ${worksans.variable}
          ${inter.variable}
          ${plusJakarta.variable}
          ${manrope.variable}
          ${lato.variable}
          antialiased
        `}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster position="bottom-right" richColors closeButton />
      </body>
    </html>
  );
}
