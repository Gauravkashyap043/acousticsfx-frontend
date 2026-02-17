# Products navigation guide

This doc explains how the **Products** section works: routes, dropdown in the header, and nested pages.

---

## 1. How the Header dropdown works

In **`components/home/Header.tsx`**:

- **"Our Products"** is a link that also opens a **dropdown** on hover (desktop) or tap (mobile).
- The dropdown lists product **categories**. Each item is a `Link` to a URL.
- **Which UI appears** is decided by **Next.js App Router** based on the URL:

| User clicks in dropdown | URL they go to | Page that renders |
|-------------------------|----------------|--------------------|
| **Acoustic Solutions**  | `/products/acoustic` | `app/products/acoustic/page.tsx` |
| **Flooring Solutions**  | `/products` (for now) | `app/products/page.tsx` — add `/products/flooring` when ready |
| **Noise Solution**      | `/products` (for now) | `app/products/page.tsx` — add `/products/noise-solutions` when ready |
| *(Clicking "Our Products" without opening dropdown)* | `/products` | `app/products/page.tsx` (main products landing) |

So: **one dropdown item = one route = one `page.tsx`** (or a dynamic segment). The dropdown doesn’t “choose” the UI; the **URL** does.

---

## 2. Folder structure = URL structure (App Router)

In Next.js **App Router**, **folders under `app/`** define the URL path. A **`page.tsx`** in a folder is what actually renders for that URL.

```
app/products/
├── page.tsx                    →  /products              (main products landing)
├── acoustic/
│   ├── page.tsx                →  /products/acoustic      (Acoustic Solutions category)
│   ├── wood-wool-acoustic-panel/
│   │   ├── page.tsx            →  /products/acoustic/wood-wool-acoustic-panel
│   │   ├── perfomax/
│   │   │   └── page.tsx        →  /products/acoustic/wood-wool-acoustic-panel/perfomax
│   │   ├── linearlux/page.tsx  →  ...
│   │   └── ...
│   ├── wood-acoustic-panel/
│   │   ├── page.tsx            →  /products/acoustic/wood-acoustic-panel
│   │   └── ... (perfomax, linearlux, etc.)
│   ├── fabric-acoustic-panel/
│   │   └── page.tsx            →  /products/acoustic/fabric-acoustic-panel
│   └── baffle-clouds/
│       └── page.tsx            →  /products/acoustic/baffle-clouds
```

- **One level of folder** = **one segment in the URL**.
- **Nested folders** = **nested URLs** (e.g. product → sub-product like “Perfomax”).

So to “manage” the products UI:

- **Change what shows at `/products`** → edit `app/products/page.tsx`.
- **Change what shows at “Acoustic Solutions”** → edit `app/products/acoustic/page.tsx`.
- **Change a specific product (e.g. Wood Wool)** → edit the `page.tsx` in that product’s folder.
- **Change a sub-product (e.g. Perfomax)** → edit the `page.tsx` inside that sub-product folder (e.g. `acoustic/wood-wool-acoustic-panel/perfomax/page.tsx`).

---

## 3. What UI appears when (summary)

| URL | Page file | Typical content |
|-----|-----------|------------------|
| `/products` | `app/products/page.tsx` | ProductHero, AcousticSolutions, CaseStudies, OurPromise, etc. (overview) |
| `/products/acoustic` | `app/products/acoustic/page.tsx` | Acoustic category: ProductHero, AcousticSolutions, AcousticWhyChooseUs, etc. |
| `/products/acoustic/wood-wool-acoustic-panel` | `app/products/acoustic/wood-wool-acoustic-panel/page.tsx` | Single product: ProductHeroSection, OurAcousticPanels, WhyChooseSection, etc. |
| `/products/acoustic/wood-wool-acoustic-panel/perfomax` | `app/products/acoustic/wood-wool-acoustic-panel/perfomax/page.tsx` | Sub-product detail: LinearluxHero, ProductSpecification, GallerySection, etc. |

So:

- **Click “Our Products”** (or go to `/products`) → overview page.
- **Click “Acoustic Solutions” in dropdown** → acoustic category page.
- **From there, clicking a product card/link** goes to e.g. `/products/acoustic/wood-wool-acoustic-panel`.
- **Clicking a sub-product** goes to e.g. `/products/acoustic/wood-wool-acoustic-panel/perfomax`.

The **Header dropdown** only needs to point to the right URLs; the **folder + `page.tsx`** decide the UI.

---

## 4. Adding new categories (e.g. Flooring, Noise)

Right now only **Acoustic** has its own route. To add **Flooring** or **Noise**:

1. **Create the route**  
   - e.g. `app/products/flooring/page.tsx` → URL `/products/flooring`  
   - e.g. `app/products/noise-solutions/page.tsx` → URL `/products/noise-solutions`

2. **Update the Header**  
   In `Header.tsx`, change the dropdown item’s `link` to that URL, e.g.  
   `{ name: "Flooring Solutions", link: "/products/flooring" }`.

3. **Build the page**  
   Reuse or copy structure from `app/products/acoustic/page.tsx` (Header, sections, Footer), then swap in your content/components.

---

## 5. Quick reference: where to edit

- **Dropdown links (what happens on click)** → `components/home/Header.tsx` (the `link` in each dropdown item).
- **Main products landing** → `app/products/page.tsx`.
- **Acoustic category** → `app/products/acoustic/page.tsx`.
- **Nested product / sub-product UI** → the corresponding `app/products/.../page.tsx` for that URL.
- **Product data (titles, descriptions, slugs)** → `lib/products-data.ts`.

If you keep **Header links** in sync with **folders under `app/products/`** and **`page.tsx`** in each folder, the “Products” dropdown and nested part will stay consistent and easy to manage.
