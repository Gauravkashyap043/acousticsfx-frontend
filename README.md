# acousticsfx-frontend

Next.js 16 public site for AcousticsFX: marketing, products, resources, contact, and about.

## Stack

- **Framework**: Next.js 16 (App Router), React 19
- **Styling**: Tailwind CSS 4
- **Fonts**: Google Fonts (Geist, Poppins, Playfair Display, Work Sans, Inter, Plus Jakarta Sans, Manrope, Lato) — configured in `app/layout.tsx`
- **UI**: Lucide React, React Icons, Swiper, Splide (carousels/sliders)

## Scripts

| Command | Description |
|--------|-------------|
| `npm run dev` | Start Next dev server |
| `npm run build` | Production build |
| `npm run start` | Run production server |
| `npm run lint` | ESLint |

## Environment

- **NEXT_PUBLIC_API_URL**: Optional; used by `lib/api/client.ts` for API base URL (default in code: `https://newadmin.quasmoindianmicroscope.com`). Override for local backend.

## Project layout

```
app/
├── layout.tsx            # Root layout, fonts, globals.css
├── page.tsx              # Home
├── about/page.tsx
├── contactus/page.tsx
├── products/
│   ├── page.tsx         # Products index
│   └── acoustic/
│       ├── page.tsx
│       ├── wood-wool-acoustic-panel/   # + perfomax, microatlas, linearlux, acoslots, acoperf
│       ├── wood-acoustic-panel/        # same variants
│       ├── fabric-acoustic-panel/      # same variants
│       └── baffle-clouds/             # same variants
└── resources/
    ├── page.tsx
    ├── casestudy/page.tsx
    ├── blogs/[slug]/page.tsx
    └── blogs-and-articles/[slug]/page.tsx

components/
├── home/        # Header, Footer, HomeHero, AboutSection, OurProduct, Testimonials, etc.
├── products/    # ProductHero, ProductSpecification, RelatedProducts, Linearlux*, Wood*, etc.
├── resources/   # ResourceTabs, BlogDetailLayout, LatestPosts, CaseStudySection, etc.
├── contact/     # ContactHero, ContactFormSection, LocationsSection, TrustedBySection
└── about/       # AboutHero, AboutContent, FounderSection, ValuesSection, etc.

lib/
├── utils.ts           # cn() and helpers (e.g. tailwind-merge + clsx)
├── products-data.ts  # Static product/data
└── api/
    └── client.ts      # Fetch wrapper, ApiClientError, NEXT_PUBLIC_API_URL
```

## Routing

- **App Router**: One `page.tsx` per route; dynamic routes use `[slug]`.
- **Layout**: Single root layout in `app/layout.tsx`; fonts and global CSS are applied there.
- **Images**: `next.config.ts` allows remote images from `ik.imagekit.io` and `images.unsplash.com`; AVIF/WebP, device sizes and cache TTL are set.

## Conventions

- **Components**: Grouped by section (home, products, resources, contact, about). Reuse existing patterns (Hero, Section, layout components).
- **Data**: Static data in `lib/` (e.g. `products-data.ts`). For live data use `lib/api/client.ts` and `NEXT_PUBLIC_API_URL`.
- **Styling**: Tailwind only; use existing utilities and CSS variables/fonts from the layout.
- **New page**: Add `app/<path>/page.tsx`; use components from `components/` and data from `lib/` as needed.

## Key files

- **app/layout.tsx**: Font loading (Geist, Poppins, Playfair, etc.) and root HTML/CSS.
- **app/globals.css**: Global Tailwind and custom styles.
- **lib/utils.ts**: `cn()` for class names.
- **lib/api/client.ts**: Base URL from env, `get()/post()/...`, error handling with `ApiClientError`.
