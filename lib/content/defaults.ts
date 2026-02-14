/**
 * Fallback values when content API returns no value for a key (e.g. during load or missing key).
 * Must match current hardcoded copy; keep in sync with backend seed and keys.ts.
 */

import { HOME_HERO_FEATURE_BOXES_DEFAULT } from "./keys";

export const CONTENT_DEFAULTS: Record<string, string> = {
  "home.hero.title":
    "We take pride in building stylish and featured acoustic solution.",
  "home.hero.subtitle":
    "Our solutions are engineered for clarity, comfort, and visual harmony. Whether it's a studio, auditorium, or workspace, we bring together design precision and acoustic mastery to elevate every square foot.",
  "home.hero.backgroundImage": "/assets/home/background.png",
  "home.hero.featureBoxes": HOME_HERO_FEATURE_BOXES_DEFAULT,
  "home.ourProduct.heading": "Our Products",
  "home.ourProduct.subheading":
    "We Cut Through Noise to create architects that are thoughtful, timeless & Impactful.",
  "home.ourProduct.body":
    "Our inspired solutions have helped shape modern acoustic design. Alluring spaces, internationally recognised for their architectural elegance and exceptional sound management live here.",
  "home.ourProduct.ctaLabel": "VIEW ALL PRODUCTS →",
  "home.caseStudies.heading": "CASE STUDIES THAT \nINSPIRE US",
  "home.caseStudies.subheading":
    "A premium workspace faced disruptive noise and poor sound clarity. We designed and installed bespoke acoustic panels tailored to their architecture. The result: enhanced productivity, elegant aesthetics, and a healthier environment.",
  "home.caseStudies.ctaLabel": "VIEW ALL CASESTUDIES →",
  "home.latestBlogs.heading": "Our Latest Blogs",
  "home.latestBlogs.subheading":
    "A place to share knowledge about acoustic, noise & flooring solutions.",
  "home.latestBlogs.ctaLabel": "VIEW ALL BLOGS →",
  "home.whyChooseUs.icon1": "/assets/home/quaone.svg",
  "home.whyChooseUs.icon2": "/assets/home/quatwo.svg",
  "home.whyChooseUs.icon3": "/assets/home/quathr.svg",
  "home.whyChooseUs.icon4": "/assets/home/quafour.svg",
  "home.whyChooseUs.icon5": "/assets/home/quafive.svg",
  "home.whyChooseUs.icon6": "/assets/home/quasix.svg",
  "home.testimonials.logo1": "/assets/about/vmware.svg.svg",
  "home.testimonials.logo2": "/assets/about/Docusign-Testimonials-280-60-Baseline.svg.svg",
  "home.testimonials.logo3": "/assets/about/frog.svg.svg",
  "home.testimonials.logo4": "/assets/about/vmware.svg.svg",
  "about.hero.heading": "Partner in Future Readiness",
  "about.hero.subtitle":
    "Empowering tomorrow's spaces with acoustic solutions that blend precision, elegance, and performance.",
  "about.hero.backgroundImage":
    "/assets/about/empty-flat-interrior-with-elements-decoration 1 (1).png",
};
