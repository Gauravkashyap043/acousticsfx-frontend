/**
 * Fallback values when content API returns no value for a key (e.g. during load or missing key).
 * Must match current hardcoded copy; keep in sync with backend seed and keys.ts.
 */

export const CONTENT_DEFAULTS: Record<string, string> = {
  "home.hero.title":
    "We take pride in building stylish and featured acoustic solution.",
  "home.hero.subtitle":
    "Our solutions are engineered for clarity, comfort, and visual harmony. Whether it's a studio, auditorium, or workspace, we bring together design precision and acoustic mastery to elevate every square foot.",
  "home.hero.backgroundImage": "/assets/home/background.png",
  "about.hero.heading": "Partner in Future Readiness",
  "about.hero.subtitle":
    "Empowering tomorrow's spaces with acoustic solutions that blend precision, elegance, and performance.",
  "about.hero.backgroundImage":
    "/assets/about/empty-flat-interrior-with-elements-decoration 1 (1).png",
};
