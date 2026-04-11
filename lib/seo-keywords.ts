/**
 * Shared SEO keyword lists: industry terms + India location intent.
 * Import subsets per route to keep metadata relevant.
 */

/** Metro and regional search phrases (India). */
export const SEO_LOCATION_KEYWORDS_INDIA: string[] = [
  "acoustic panels Mumbai",
  "acoustic panels Delhi",
  "acoustic panels Bengaluru",
  "acoustic panels Bangalore",
  "acoustic panels Chennai",
  "acoustic panels Hyderabad",
  "acoustic panels Pune",
  "acoustic panels Kolkata",
  "acoustic panels Ahmedabad",
  "acoustic panels Gurgaon",
  "acoustic panels Noida",
  "acoustic panels Kochi",
  "acoustic panels Jaipur",
  "acoustic panels Chandigarh",
  "acoustic panels Goa",
  "soundproofing Mumbai",
  "soundproofing Delhi NCR",
  "soundproofing Bengaluru",
  "studio acoustics Mumbai",
  "studio acoustics Delhi",
  "auditorium acoustics India",
  "hospitality acoustic treatment India",
  "office acoustic panels India",
  "pan India acoustic supplier",
  "NCR acoustic solutions",
  "Western India acoustic manufacturer",
  "South India soundproofing",
  "North India acoustic panels",
  "East India acoustic consultant",
];

/** Related technical, application, and buyer-intent phrases. */
export const SEO_RELATED_KEYWORDS: string[] = [
  "noise reduction panels",
  "sound absorption panels",
  "reverberation control",
  "echo reduction solutions",
  "architectural acoustics India",
  "acoustic ceiling baffles",
  "acoustic clouds",
  "fabric wrapped acoustic panels",
  "wood acoustic wall panels",
  "perforated acoustic wood panels",
  "acoustic wall treatment",
  "open plan office acoustics",
  "meeting room soundproofing",
  "conference room acoustics",
  "home theatre acoustic treatment",
  "recording studio soundproofing",
  "podcast studio acoustics",
  "broadcast studio acoustic panels",
  "classroom acoustics India",
  "library acoustic treatment",
  "restaurant noise control",
  "hotel lobby acoustics",
  "gymnasium acoustics",
  "auditorium sound clarity",
  "multipurpose hall acoustics",
  "corporate office acoustic retrofit",
  "healthcare facility acoustics",
  "industrial noise control panels",
  "machine enclosure acoustics",
  "HVAC noise mitigation",
  "partition wall sound insulation",
  "floor soundproofing underlay",
  "impact noise reduction",
  "NRC rated acoustic materials",
  "acoustic consultant India",
  "turnkey acoustic installation India",
  "BIS acoustic standards",
  "sustainable acoustic materials",
];

/** Homepage-specific lead terms + shared bundles. */
export const SEO_KEYWORDS_HOME: string[] = [
  "premium acoustic panels India",
  "soundproofing company India",
  "studio acoustics India",
  "office acoustic treatment India",
  "FX Acoustics",
  "NRC certified panels India",
  "wood acoustic flooring India",
  "acoustic ceiling solutions India",
  "home studio soundproofing India",
  "commercial acoustic contractor India",
  ...SEO_RELATED_KEYWORDS.slice(0, 20),
  ...SEO_LOCATION_KEYWORDS_INDIA.slice(0, 18),
];

/** Default bundle for site-wide root metadata. */
export const SEO_KEYWORDS_GLOBAL: string[] = [
  "acoustic panels India",
  "soundproofing solutions India",
  "acoustic treatment India",
  "sound control India",
  "studio acoustics India",
  "NRC certified acoustic panels",
  "acoustic manufacturer India",
  "hardwood flooring India",
  "premium acoustic interiors",
  ...SEO_RELATED_KEYWORDS,
  ...SEO_LOCATION_KEYWORDS_INDIA,
];

export const SEO_KEYWORDS_PRODUCTS: string[] = [
  "buy acoustic panels India",
  "acoustic panels price India",
  "commercial acoustic products",
  "wood wool acoustic panels",
  "PET acoustic panels",
  "acoustic slat wood panels",
  "linear acoustic ceiling",
  "acoustic wall modules",
  "soundproof door India",
  "acoustic glazing India",
  ...SEO_RELATED_KEYWORDS.slice(0, 18),
  ...SEO_LOCATION_KEYWORDS_INDIA.slice(0, 14),
];

export const SEO_KEYWORDS_ACOUSTIC_CATEGORY: string[] = [
  "acoustic panels manufacturer India",
  "NRC certified acoustic panels",
  "studio acoustic panels India",
  "office soundproofing India",
  "wood acoustic ceiling India",
  "fabric acoustic ceiling India",
  "acoustic baffles manufacturer",
  "acoustic clouds supplier India",
  "auditorium acoustic panels",
  "cinema hall acoustics India",
  "recording studio panels India",
  ...SEO_RELATED_KEYWORDS.slice(0, 22),
  ...SEO_LOCATION_KEYWORDS_INDIA.slice(0, 16),
];

export const SEO_KEYWORDS_ABOUT: string[] = [
  "about FX Acoustics",
  "acoustic manufacturer India",
  "soundproofing company India",
  "acoustic engineering India",
  "acoustic panels factory India",
  "ISO acoustic manufacturer",
  "Indian acoustic brand",
  ...SEO_LOCATION_KEYWORDS_INDIA.slice(0, 12),
];

export const SEO_KEYWORDS_CONTACT: string[] = [
  "contact FX Acoustics",
  "acoustic consultation India",
  "soundproofing quote India",
  "acoustic site survey India",
  "acoustic panels dealer India",
  "acoustic project enquiry",
  ...SEO_LOCATION_KEYWORDS_INDIA.slice(0, 16),
];

export const SEO_KEYWORDS_RESOURCES: string[] = [
  "acoustic resources India",
  "soundproofing blog India",
  "studio acoustics articles",
  "acoustic design guide India",
  "noise control education",
  "FX Acoustics case studies",
  ...SEO_RELATED_KEYWORDS.slice(0, 14),
  ...SEO_LOCATION_KEYWORDS_INDIA.slice(0, 10),
];

export const SEO_KEYWORDS_CASE_STUDIES: string[] = [
  "acoustic case studies India",
  "soundproofing projects India",
  "office acoustic retrofit India",
  "studio acoustic project India",
  "auditorium acoustic project",
  "hospitality acoustic portfolio",
  ...SEO_LOCATION_KEYWORDS_INDIA.slice(0, 12),
];

export const SEO_KEYWORDS_BLOG: string[] = [
  "acoustic blog India",
  "soundproofing tips India",
  "studio acoustics India",
  "interior acoustics articles",
  "architect acoustic resources",
  ...SEO_RELATED_KEYWORDS.slice(0, 12),
  ...SEO_LOCATION_KEYWORDS_INDIA.slice(0, 8),
];

export const SEO_KEYWORDS_BLOG_POST: string[] = [
  "acoustic blog India",
  "soundproofing tips",
  "FX Acoustics",
  "studio acoustics India",
  "noise control India",
  ...SEO_RELATED_KEYWORDS.slice(0, 10),
  ...SEO_LOCATION_KEYWORDS_INDIA.slice(0, 6),
];

export const SEO_KEYWORDS_CASE_STUDY_POST: string[] = [
  "acoustic case study India",
  "soundproofing project India",
  "FX Acoustics portfolio",
  "commercial acoustic installation",
  ...SEO_LOCATION_KEYWORDS_INDIA.slice(0, 10),
];

/** Product detail pages: broad related + location tail. */
export const SEO_KEYWORDS_PRODUCT_DETAIL: string[] = [
  "FX Acoustics products India",
  "buy acoustic panels online India",
  "acoustic specification India",
  "custom acoustic panels India",
  ...SEO_RELATED_KEYWORDS.slice(0, 16),
  ...SEO_LOCATION_KEYWORDS_INDIA.slice(0, 12),
];
