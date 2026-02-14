/**
 * Content key constants. Keep in sync with backend seed (seedContent.ts) and docs/content-keys.md.
 * Convention: page.section.field (e.g. home.hero.title).
 */

const FEATURE_BOXES_DEFAULT = JSON.stringify([
  {
    title: "Acoustic Solution",
    description:
      "Ideal for auditoriums, studios, and performance spaces where sound precision is non-negotiable.",
    image: "/assets/home/fi_11062015.png",
    accentColor: "yellow-400",
  },
  {
    title: "Floor Solution",
    description:
      "Perfect for gyms, halls, and high-traffic zones — combining aesthetics with acoustic synergy.",
    image: "/assets/home/fi_7821525.png",
    accentColor: "orange-400",
  },
  {
    title: "Sound Proofing",
    description:
      "Custom solutions for homes, offices, and commercial spaces that demand quiet confidence.",
    image: "/assets/home/fi_17991697.png",
    accentColor: "blue-400",
  },
]);

export const HOME_HERO_KEYS = [
  "home.hero.title",
  "home.hero.subtitle",
  "home.hero.backgroundImage",
  "home.hero.featureBoxes",
] as const;

export const HOME_OUR_PRODUCT_KEYS = [
  "home.ourProduct.heading",
  "home.ourProduct.subheading",
  "home.ourProduct.body",
  "home.ourProduct.ctaLabel",
] as const;

export const HOME_CASE_STUDIES_KEYS = [
  "home.caseStudies.heading",
  "home.caseStudies.subheading",
  "home.caseStudies.ctaLabel",
] as const;

export const HOME_LATEST_BLOGS_KEYS = [
  "home.latestBlogs.heading",
  "home.latestBlogs.subheading",
  "home.latestBlogs.ctaLabel",
] as const;

export const HOME_WHY_CHOOSE_US_ICON_KEYS = [
  "home.whyChooseUs.icon1",
  "home.whyChooseUs.icon2",
  "home.whyChooseUs.icon3",
  "home.whyChooseUs.icon4",
  "home.whyChooseUs.icon5",
  "home.whyChooseUs.icon6",
] as const;

export const HOME_TESTIMONIALS_LOGO_KEYS = [
  "home.testimonials.logo1",
  "home.testimonials.logo2",
  "home.testimonials.logo3",
  "home.testimonials.logo4",
] as const;

export const ABOUT_HERO_KEYS = [
  "about.hero.heading",
  "about.hero.subtitle",
  "about.hero.backgroundImage",
] as const;

export type HomeHeroKey = (typeof HOME_HERO_KEYS)[number];

/** Default JSON for home.hero.featureBoxes (for defaults.ts). */
export const HOME_HERO_FEATURE_BOXES_DEFAULT = FEATURE_BOXES_DEFAULT;
export type AboutHeroKey = (typeof ABOUT_HERO_KEYS)[number];

/** All content keys used by the frontend (for batch fetch). */
export const ALL_CONTENT_KEYS = [
  ...HOME_HERO_KEYS,
  ...HOME_OUR_PRODUCT_KEYS,
  ...HOME_CASE_STUDIES_KEYS,
  ...HOME_LATEST_BLOGS_KEYS,
  ...HOME_WHY_CHOOSE_US_ICON_KEYS,
  ...HOME_TESTIMONIALS_LOGO_KEYS,
  ...ABOUT_HERO_KEYS,
] as const;
