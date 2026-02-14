/**
 * Content key constants. Keep in sync with backend seed (seedContent.ts) and docs/content-keys.md.
 * Convention: page.section.field (e.g. home.hero.title).
 */

export const HOME_HERO_KEYS = [
  "home.hero.title",
  "home.hero.subtitle",
  "home.hero.backgroundImage",
] as const;

export const ABOUT_HERO_KEYS = [
  "about.hero.heading",
  "about.hero.subtitle",
  "about.hero.backgroundImage",
] as const;

export type HomeHeroKey = (typeof HOME_HERO_KEYS)[number];
export type AboutHeroKey = (typeof ABOUT_HERO_KEYS)[number];

/** All content keys used by the frontend (for batch fetch). */
export const ALL_CONTENT_KEYS = [
  ...HOME_HERO_KEYS,
  ...ABOUT_HERO_KEYS,
] as const;
