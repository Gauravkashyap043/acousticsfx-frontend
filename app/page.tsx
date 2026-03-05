"use client";

import { motion } from "framer-motion";

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

const upAnimation = {
  hidden: {
    opacity: 0,
    y: 120,
    scale: 0.96
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const downAnimation = {
  hidden: {
    opacity: 0,
    y: -120,
    scale: 0.96
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function Home() {
  return (
    <div style={{ overflowX: "hidden", width: "100%" }}>

      <motion.div
        variants={upAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        <HomeHero />
      </motion.div>

      <motion.div
        variants={downAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        <ServiceProvider />
      </motion.div>

      <motion.div
        variants={upAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        <AboutSection />
      </motion.div>

      <motion.div
        variants={downAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        <WhyChooseUs />
      </motion.div>

      <motion.div
        variants={upAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        <OurProduct />
      </motion.div>

      <motion.div
        variants={downAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        <CaseStudies />
      </motion.div>

      <motion.div
        variants={upAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        <CreativeApproach />
      </motion.div>

      <motion.div
        variants={downAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        <FAQSection />
      </motion.div>

      <motion.div
        variants={upAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        <OurClients />
      </motion.div>

      <motion.div
        variants={downAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        <LatestBlogs />
      </motion.div>

      <motion.div
        variants={upAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        <Testimonials />
      </motion.div>

      <motion.div
        variants={downAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        <ConnectWithExperts />
      </motion.div>

    </div>
  );
}