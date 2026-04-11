import type { Metadata } from "next";
import dynamic from "next/dynamic";
import HomeHero from "@/components/home/HomeHero";
import ServiceProvider from "@/components/home/ServiceProvider";
import AboutSection from "@/components/home/AboutSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import OurProduct from "@/components/home/OurProduct";
import VoicePlug from "@/components/home/VoicePlug";
import SchemaMarkup from "@/components/SchemaMarkup";
import { SITE_URL } from "@/lib/site-url";
import { SEO_KEYWORDS_HOME } from "@/lib/seo-keywords";

/** Below-the-fold sections load after first paint to reduce initial JS and image decode work. */
const CaseStudies = dynamic(() => import("@/components/home/CaseStudies"));
const CreativeApproach = dynamic(() => import("@/components/home/CreativeApproach"));
const FAQSection = dynamic(() => import("@/components/home/Faq"));
const OurClients = dynamic(() => import("@/components/home/OurClients"));
const LatestBlogs = dynamic(() => import("@/components/home/LatestBlogs"));
const Testimonials = dynamic(() => import("@/components/home/Testimonials"));
const ConnectWithExperts = dynamic(() => import("@/components/home/ConnectWithExperts"));

export const metadata: Metadata = {
  title:
    "Premium Acoustic Panels & Soundproofing Solutions in India | FX Acoustics",
  description:
    "Discover NRC-certified acoustic panels, studio soundproofing, and hardwood flooring from FX Acoustics—trusted across India for offices, studios, auditoriums, and hospitality projects for 15+ years.",
  keywords: SEO_KEYWORDS_HOME,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Premium Acoustic Panels & Soundproofing Solutions in India | FX Acoustics",
    description: "Discover NRC-certified acoustic panels, studio soundproofing, and hardwood flooring from FX Acoustics—trusted across India for offices, studios, auditoriums, and hospitality projects for 15+ years.",
    url: SITE_URL,
    siteName: "FX Acoustics",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
  },
  verification: {
    google: "PASTE_YOUR_CODE_HERE",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "FX Acoustics",
  url: SITE_URL,
  description:
    "premium acoustic panels and soundproofing manufacturer India",
  serviceType: [
    "Acoustic Panels",
    "Soundproofing",
    "Hardwood Flooring",
    "Acoustic Treatment",
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  foundingDate: "2010",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "FX Acoustics",
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/products?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function Home() {
  return (
    <>
      <SchemaMarkup schema={localBusinessSchema} />
      <SchemaMarkup schema={websiteSchema} />
      <div className="overflow-x-hidden">
        <HomeHero />
        <VoicePlug />
        <ServiceProvider />
        <AboutSection />
        <WhyChooseUs />
        <OurProduct />
        <CaseStudies />
        <CreativeApproach />
        <FAQSection />
        <OurClients />
        <LatestBlogs />
        <Testimonials />
        <ConnectWithExperts />
      </div>
    </>
  );
}
