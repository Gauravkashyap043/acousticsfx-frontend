import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import StatsSection from "@/components/about/StatsSection";
import AboutContent from "@/components/about/AboutContent";
import FoundationSection from "@/components/about/FoundationSection";
import ValuesSection from "@/components/about/ValuesSection";
import StoryInnovation from "@/components/about/StoryInnovation";
import FounderSection from "@/components/about/FounderSection";
import ApplicationsSection from "@/components/shared/ApplicationsSection";
import TrustedBySection from "@/components/contact/TrustedBySection";
import LatestBlogs from "@/components/home/LatestBlogs";
import Testimonials from "@/components/home/Testimonials";
import ConnectWithExperts from "@/components/home/ConnectWithExperts";
import { SITE_URL } from "@/lib/site-url";
import { SEO_KEYWORDS_ABOUT } from "@/lib/seo-keywords";

export const metadata: Metadata = {
  title:
    "About FX Acoustics | 15+ Years of Acoustic Engineering Excellence",
  description:
    "Meet FX Acoustics—India’s trusted acoustic panels and soundproofing partner with 15+ years of engineering-led design, manufacturing rigor, and turnkey delivery for premium spaces.",
  keywords: SEO_KEYWORDS_ABOUT,
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StatsSection />
      <AboutContent />
      <FoundationSection />
      <ValuesSection />
      <StoryInnovation />
      <FounderSection />
      <ApplicationsSection />
      <TrustedBySection />
      <LatestBlogs />
      <Testimonials />
      <ConnectWithExperts />
    </>
  );
}
