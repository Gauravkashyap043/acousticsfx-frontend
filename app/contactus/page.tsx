import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactFormSection from "@/components/contact/ContactFormSection";
import LocationsSection from "@/components/contact/LocationsSection";
import FAQSection from "@/components/home/Faq";
import TrustedBySection from "@/components/contact/TrustedBySection";
import ConnectWithExperts from "@/components/home/ConnectWithExperts";
import Testimonials from "@/components/home/Testimonials";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with FX Acoustics for acoustic consultations, product inquiries, and project support. Our experts are ready to help.",
};

export default function ContactPage() {
  return (
    <>
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
