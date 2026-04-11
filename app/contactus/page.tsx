import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactFormSection from "@/components/contact/ContactFormSection";
import LocationsSection from "@/components/contact/LocationsSection";
import FAQSection from "@/components/home/Faq";
import TrustedBySection from "@/components/contact/TrustedBySection";
import ConnectWithExperts from "@/components/home/ConnectWithExperts";
import Testimonials from "@/components/home/Testimonials";
import SchemaMarkup from "@/components/SchemaMarkup";
import { SITE_URL } from "@/lib/site-url";
import { SEO_KEYWORDS_CONTACT } from "@/lib/seo-keywords";

export const metadata: Metadata = {
  title:
    "Contact FX Acoustics | Get a Free Acoustic Consultation",
  description:
    "Contact FX Acoustics for acoustic design support, product selection, and project quotes—fast responses for architects, AV teams, and facility owners across India.",
  keywords: SEO_KEYWORDS_CONTACT,
  alternates: {
    canonical: `${SITE_URL}/contactus`,
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact FX Acoustics",
  url: `${SITE_URL}/contactus`,
  description:
    "Contact FX Acoustics for acoustic consultations, product inquiries, and project support across India.",
  isPartOf: {
    "@type": "WebSite",
    name: "FX Acoustics",
    url: SITE_URL,
  },
};

export default function ContactPage() {
  return (
    <>
      <SchemaMarkup schema={contactPageSchema} />
      <ContactHero />
      <ContactFormSection />
      <LocationsSection />
      <FAQSection />
      <TrustedBySection />
      <Testimonials />
      <ConnectWithExperts />
    </>
  );
}
