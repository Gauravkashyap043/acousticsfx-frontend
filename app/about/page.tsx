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

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about FX Acoustics Inc. — our story, mission, values, and commitment to crafting premium acoustic solutions that transform spaces.",
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
