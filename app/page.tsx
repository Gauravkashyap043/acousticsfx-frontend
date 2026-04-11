"use client";

import dynamic from "next/dynamic";
import HomeHero from "@/components/home/HomeHero";
import ServiceProvider from "@/components/home/ServiceProvider";
import AboutSection from "@/components/home/AboutSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import OurProduct from "@/components/home/OurProduct";
import VoicePlug from "@/components/home/VoicePlug";

/** Below-the-fold sections load after first paint to reduce initial JS and image decode work. */
const CaseStudies = dynamic(() => import("@/components/home/CaseStudies"));
const CreativeApproach = dynamic(() => import("@/components/home/CreativeApproach"));
const FAQSection = dynamic(() => import("@/components/home/Faq"));
const OurClients = dynamic(() => import("@/components/home/OurClients"));
const LatestBlogs = dynamic(() => import("@/components/home/LatestBlogs"));
const Testimonials = dynamic(() => import("@/components/home/Testimonials"));
const ConnectWithExperts = dynamic(() => import("@/components/home/ConnectWithExperts"));

export default function Home() {
  return (
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
  );
}