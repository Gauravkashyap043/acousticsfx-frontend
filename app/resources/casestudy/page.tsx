import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import CaseStudyListClient from "./CaseStudyListClient";
import { SITE_URL } from "@/lib/site-url";
import { SEO_KEYWORDS_CASE_STUDIES } from "@/lib/seo-keywords";

export const metadata: Metadata = {
  title:
    "Acoustic Project Case Studies | FX Acoustics Portfolio",
  description:
    "Explore FX Acoustics case studies—offices, studios, auditoriums, and hospitality spaces across India with measured acoustic outcomes and premium finishes.",
  keywords: SEO_KEYWORDS_CASE_STUDIES,
  alternates: {
    canonical: `${SITE_URL}/resources/casestudy`,
  },
};

export default function CaseStudyListPage() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 sm:pt-10 pb-2">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Resources", href: "/resources" },
            { name: "Case Studies", href: "/resources/casestudy" },
          ]}
        />
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-4 tracking-tight">
          Acoustic Project Case Studies
        </h1>
        <p className="mt-3 text-gray-600 max-w-3xl text-base sm:text-lg">
          Real-world projects showcasing precision acoustic design, installation,
          and measurable sound improvements for Indian workplaces and venues.
        </p>
      </section>
      <CaseStudyListClient />
    </>
  );
}
