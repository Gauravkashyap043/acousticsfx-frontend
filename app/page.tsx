import Image from "next/image";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import HomeHero from "@/components/home/HomeHero";
import ServiceProvider from "@/components/home/ServiceProvider";
import AboutSection from "@/components/home/AboutSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import OurProduct from "@/components/home/OurProduct";
import CaseStudies from "@/components/home/CaseStudies";
import CreativeApproach from "@/components/home/CreativeApproach";
import FAQSection from "@/components/home/Faq";
import OurClients from "@/components/home/OurClients";
import LatestBlogs from "@/components/home/LatestBlogs";
import Testimonials from "@/components/home/Testimonials";
import ConnectWithExperts from "@/components/home/ConnectWithExperts";

export default function Home() {
  return (
    <>
      <Header />
      <HomeHero />
      <ServiceProvider />
      <AboutSection />
      <WhyChooseUs />
      <OurProduct />
      <CaseStudies />
      <CreativeApproach />
      <FAQSection />
      <OurClients />
      <LatestBlogs/>
      <Testimonials/>
      <ConnectWithExperts/>
      <Footer/>
    </>
  );
}
