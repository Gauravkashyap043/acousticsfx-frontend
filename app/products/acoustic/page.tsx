import type { Metadata } from "next";
import ProductHero from "@/components/products/ProductHero";
import AwardsSection from "@/components/products/AwardsSection";
import AcousticSolutions from "@/components/products/AcousticSolutions";
import AcousticWhyChooseUs from "@/components/products/AcousticWhyChooseUs";
import StoryInnovation from "@/components/about/StoryInnovation";
import TrustedBySection from "@/components/contact/TrustedBySection";
import LatestBlogs from "@/components/home/LatestBlogs";
import Testimonials from "@/components/home/Testimonials";
import ConnectWithExperts from "@/components/home/ConnectWithExperts";

export const metadata: Metadata = {
  title: "Acoustic Solutions",
  description:
    "Browse our complete range of acoustic solutions — wood panels, fabric panels, baffles, clouds, and wood wool panels for every space.",
};

export default function AcousticPage() {
  return (
    <>
      <ProductHero />
      <AwardsSection />
      <AcousticSolutions />
      <StoryInnovation />
      <AcousticWhyChooseUs />
      <TrustedBySection />
      <LatestBlogs />
      <Testimonials />
      <ConnectWithExperts />
    </>
  );
}
