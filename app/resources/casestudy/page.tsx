import type { Metadata } from "next";
import CaseStudySection from "@/components/resources/CaseStudySection";
import Testimonials from "@/components/home/Testimonials";
import ConnectWithExperts from "@/components/home/ConnectWithExperts";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Explore real-world acoustic transformation projects by FX Acoustics — from corporate offices to hospitality spaces.",
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* First Case Study - White background */}
      <CaseStudySection
        image="/assets/product/product-hero.png"
        bgColor="white"
        reverse={false}
      />

      {/* Second Case Study - Light blue background */}
      <CaseStudySection
        image="/assets/product/product-card-1.png"
        bgColor="light-blue"
        reverse={true}
      />

      {/* Third Case Study - White background */}
      <CaseStudySection
        image="/assets/product/product-card-6.png"
        bgColor="white"
        reverse={false}
      />

      {/* Testimonials */}
      <Testimonials />

      {/* Connect With Experts */}
      <ConnectWithExperts />
    </>
  );
}
