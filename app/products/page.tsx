import type { Metadata } from "next";
import ProductHero from "@/components/products/ProductHero";
import AwardsSection from "@/components/products/AwardsSection";
import AcousticSolutions from "@/components/products/AcousticSolutions";
import CaseStudies from "@/components/products/CaseStudies";
import OurPromise from "@/components/products/OurPromise";
import ApplicationsSection from "@/components/shared/ApplicationsSection";
import TrustedBySection from "@/components/contact/TrustedBySection";
import LatestBlogs from "@/components/home/LatestBlogs";
import Testimonials from "@/components/home/Testimonials";
import ConnectWithExperts from "@/components/home/ConnectWithExperts";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore our full range of acoustic solutions — wood panels, fabric panels, baffles & clouds, wood wool panels, and more. NRC-certified quality.",
};

export default function ProductsPage() {
  return (
    <>
      <ProductHero />
      <AwardsSection />
      <AcousticSolutions />
      <CaseStudies />
      <OurPromise />
      <ApplicationsSection />
      <TrustedBySection />
      <LatestBlogs />
      <Testimonials />
      <ConnectWithExperts />
    </>
  );
}
