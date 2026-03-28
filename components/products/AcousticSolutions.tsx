import {
  CategoryProductsProvider,
  CategoryTabs,
  CategoryExploreHeading,
  CategoryProductCarousel,
} from "@/components/products/category-products-explorer";
import { ProductListingCard } from "@/components/products/ProductListingCard";
import { fetchCategoryBySlug, fetchProducts, type Product } from "@/lib/products-api";
import { products as staticProducts } from "@/lib/products-data";

const FALLBACK_CARDS = staticProducts.map((p) => ({
  slug: p.slug,
  title: p.title,
  description: p.description,
  image: p.image,
  showTrademark: p.showTrademark === true,
}));

interface AcousticSolutionsProps {
  /** Master category slug (e.g. acoustic, flooring). From route /products/[category] or first category on /products. */
  categorySlug: string;
  /** Show master category tabs only on /products landing; hide on /products/[category]. */
  showMasterCategoryTabs?: boolean;
}

export default async function AcousticSolutions({
  categorySlug,
  showMasterCategoryTabs = false,
}: AcousticSolutionsProps) {
  if (showMasterCategoryTabs) {
    return (
      <section className="w-full bg-white">
        <div className="px-[24px] sm:px-[40px] md:px-[60px] lg:px-[100px] py-[60px] sm:py-[80px] lg:py-[100px]">
          <CategoryProductsProvider initialCategorySlug={categorySlug}>
            <CategoryTabs
              variant="center"
              className="gap-3 sm:gap-4 mb-10 sm:mb-12 lg:mb-16"
            />
            <CategoryExploreHeading />
            <CategoryProductCarousel layout="products" />
          </CategoryProductsProvider>
        </div>
      </section>
    );
  }

  let cards: Array<{
    slug: string;
    title: string;
    description: string;
    image: string;
    showTrademark?: boolean;
    specs?: Product["specs"];
  }>;
  let categoryName = "Solutions";

  try {
    const categoryRes = await fetchCategoryBySlug(categorySlug).catch(() => null);
    if (categoryRes?.category) {
      categoryName = categoryRes.category.name;
      const products = categoryRes.products ?? [];
      cards =
        products.length > 0
          ? products.map((p: Product) => ({
            slug: p.slug,
            title: p.title,
            description: p.shortDescription || p.description,
            image: p.image,
            showTrademark: p.showTrademark === true,
            specs: p.specs,
          }))
          : FALLBACK_CARDS;
    } else {
      const { products } = await fetchProducts(categorySlug).catch(() => ({ products: [] }));
      cards =
        products.length > 0
          ? products.map((p: Product) => ({
            slug: p.slug,
            title: p.title,
            description: p.shortDescription || p.description,
            image: p.image,
            showTrademark: p.showTrademark === true,
            specs: p.specs,
          }))
          : FALLBACK_CARDS;
    }
  } catch {
    cards = FALLBACK_CARDS;
  }

  return (
    <section className="w-full bg-[#F4F5F4]">
      <div className="px-4 py-10 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-[100px] lg:py-[88px]">
        {/* Heading */}
        <div className="mx-auto mb-8 max-w-4xl sm:mb-10 lg:mb-12">
          <p className="mb-2 text-[15px] font-medium text-[#1F6775] manrope sm:text-[17px]">
            {categoryName}
          </p>
          <h2 className="text-[28px] font-semibold leading-[1.15] tracking-tight text-neutral-900 manrope sm:text-[34px] lg:text-[40px]">
            Explore Our {categoryName} <br /> Masterpieces
          </h2>
        </div>

        {/* 1 col → 2 col (md) → 3 col (lg+) */}
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5 md:gap-6 lg:grid-cols-3 lg:gap-6 xl:gap-8">
          {cards.map((card) => (
            <div key={card.slug} className="min-w-0">
              <ProductListingCard
                href={`/products/${categorySlug}/${card.slug}`}
                title={card.title}
                description={card.description}
                image={card.image}
                showTrademark={card.showTrademark}
                specs={card.specs}
                className="h-full"
                variant="grid"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
