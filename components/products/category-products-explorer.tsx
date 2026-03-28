"use client";

import Image from "next/image";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  fetchCategories,
  fetchCategoryBySlug,
  fetchProducts,
  type Product,
  type ProductCategory,
} from "@/lib/products-api";
import { products as staticProducts } from "@/lib/products-data";
import { ProductListingCard } from "@/components/products/ProductListingCard";

const FALLBACK_CATEGORIES: { slug: string; name: string }[] = [
  { slug: "acoustic", name: "Acoustic Solution" },
  { slug: "flooring", name: "Flooring Solution" },
  { slug: "sound-proofing", name: "Sound Proofing Solution" },
];

function normalizeCategories(list: ProductCategory[]): { slug: string; name: string }[] {
  return [...list]
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
    .map((c) => ({ slug: c.slug, name: c.name }));
}

type ExplorerContextValue = {
  categories: { slug: string; name: string }[];
  activeSlug: string;
  setActiveSlug: (slug: string) => void;
  products: Product[];
  loading: boolean;
  activeCategoryName: string;
};

const ExplorerContext = createContext<ExplorerContextValue | null>(null);

function useExplorer(): ExplorerContextValue {
  const ctx = useContext(ExplorerContext);
  if (!ctx) throw new Error("CategoryProductsProvider required");
  return ctx;
}

export function CategoryProductsProvider({
  initialCategorySlug,
  children,
}: {
  initialCategorySlug: string;
  children: ReactNode;
}) {
  const [categories, setCategories] = useState<{ slug: string; name: string }[]>([]);
  const [activeSlug, setActiveSlugState] = useState(initialCategorySlug);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const { categories: apiCats } = await fetchCategories();
        if (cancelled) return;
        const normalized = normalizeCategories(apiCats ?? []);
        setCategories(normalized.length > 0 ? normalized : FALLBACK_CATEGORIES);
      } catch {
        if (!cancelled) setCategories(FALLBACK_CATEGORIES);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    setActiveSlugState(initialCategorySlug);
  }, [initialCategorySlug]);

  const setActiveSlug = useCallback((slug: string) => {
    setActiveSlugState(slug);
  }, []);

  useEffect(() => {
    if (categories.length === 0) return;
    const exists = categories.some(
      (c) => c.slug.toLowerCase() === activeSlug.toLowerCase()
    );
    if (!exists) setActiveSlugState(categories[0].slug);
  }, [categories, activeSlug]);

  useEffect(() => {
    if (!activeSlug) return;
    let cancelled = false;
    setLoading(true);
    (async () => {
      try {
        const res = await fetchCategoryBySlug(activeSlug);
        if (cancelled) return;
        const list = res.products ?? [];
        setProducts(
          list.length > 0
            ? list
            : staticProducts.filter((p) => p.categorySlug === activeSlug)
        );
      } catch {
        try {
          const { products: plist } = await fetchProducts(activeSlug);
          if (cancelled) return;
          setProducts(
            plist.length > 0
              ? plist
              : staticProducts.filter((p) => p.categorySlug === activeSlug)
          );
        } catch {
          if (!cancelled) {
            setProducts(staticProducts.filter((p) => p.categorySlug === activeSlug));
          }
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [activeSlug]);

  const activeCategoryName = useMemo(() => {
    const found = categories.find((c) => c.slug === activeSlug);
    return found?.name ?? "Solutions";
  }, [categories, activeSlug]);

  const value = useMemo(
    () => ({
      categories,
      activeSlug,
      setActiveSlug,
      products,
      loading,
      activeCategoryName,
    }),
    [categories, activeSlug, setActiveSlug, products, loading, activeCategoryName]
  );

  return <ExplorerContext.Provider value={value}>{children}</ExplorerContext.Provider>;
}

export function CategoryTabs({
  variant = "left",
  className = "",
}: {
  variant?: "left" | "center";
  className?: string;
}) {
  const { categories, activeSlug, setActiveSlug } = useExplorer();
  if (categories.length === 0) return null;

  const align =
    variant === "center" ? "justify-center" : "justify-start";

  return (
    <div className={`flex flex-wrap gap-3 ${align} ${className}`}>
      {categories.map((cat) => {
        const isActive = cat.slug.toLowerCase() === activeSlug.toLowerCase();
        return (
          <button
            key={cat.slug}
            type="button"
            onClick={() => setActiveSlug(cat.slug)}
            className={`px-4 py-2 text-[10px] axiforma font-bold cursor-pointer border transition-colors ${
              isActive
                ? "bg-[#1F6775] border-[#1F6775] text-white"
                : "bg-white border-gray-300 text-black hover:bg-gray-50"
            }`}
          >
            {cat.name.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}

export function CategoryExploreHeading() {
  const { activeCategoryName } = useExplorer();
  return (
    <div className="mb-10 sm:mb-12 lg:mb-14">
      <p className="text-[16px] sm:text-[18px] manrope font-medium text-[#1F6775] mb-2">
        {activeCategoryName}
      </p>
      <h2 className="text-[32px] sm:text-[38px] lg:text-[45px] font-semibold manrope leading-tight">
        Explore Our {activeCategoryName} <br /> Masterpieces
      </h2>
    </div>
  );
}

type CarouselLayout = "home" | "products";

export function CategoryProductCarousel({ layout = "home" }: { layout?: CarouselLayout }) {
  const { products, activeSlug, loading } = useExplorer();
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const paddingClass =
    layout === "home"
      ? "pl-6 sm:pl-10 lg:pl-[200px]"
      : "pl-0 sm:pl-0 lg:pl-0";

  useEffect(() => {
    setCurrentIndex(0);
    sliderRef.current?.scrollTo({ left: 0, behavior: "auto" });
  }, [activeSlug, products.length]);

  useEffect(() => {
    if (products.length <= 1) return;
    const interval = setInterval(() => {
      if (!sliderRef.current) return;
      const container = sliderRef.current;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const step = layout === "home" ? 600 : 520;
      if (maxScroll <= 0) return;
      if (container.scrollLeft >= maxScroll - 2) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: step, behavior: "smooth" });
      }
    }, 3500);
    return () => clearInterval(interval);
  }, [products.length, layout]);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: layout === "home" ? -600 : -520, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: layout === "home" ? 600 : 520, behavior: "smooth" });
  };

  const scrollToIndex = (index: number) => {
    const clamped = Math.max(0, Math.min(index, products.length - 1));
    setCurrentIndex(clamped);
    const container = sliderRef.current;
    if (!container) return;
    const child = container.children[clamped] as HTMLElement;
    if (child) container.scrollTo({ left: child.offsetLeft, behavior: "smooth" });
  };

  const handleScrollLeft = () => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      scrollToIndex(currentIndex - 1);
    } else {
      scrollLeft();
    }
  };

  const handleScrollRight = () => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      scrollToIndex(currentIndex + 1);
    } else {
      scrollRight();
    }
  };

  const handleScroll = () => {
    const container = sliderRef.current;
    if (!container || (typeof window !== "undefined" && window.innerWidth >= 1024)) return;
    const scrollLeftVal = container.scrollLeft;
    const containerWidth = container.offsetWidth;
    const index = Math.round(scrollLeftVal / Math.max(containerWidth, 1));
    setCurrentIndex(index);
  };

  if (loading && products.length === 0) {
    return (
      <div className={`relative ${paddingClass} py-12 text-gray-500 text-sm`}>
        Loading products…
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className={`relative ${paddingClass} py-12 text-gray-500 text-sm`}>
        No products in this category yet.
      </div>
    );
  }

  const slideLgClasses =
    layout === "home"
      ? "lg:min-w-[560px] lg:max-w-[580px]"
      : "lg:min-w-[480px] lg:max-w-[520px]";

  return (
    <div className={`relative ${paddingClass}`}>
      <div
        ref={sliderRef}
        onScroll={handleScroll}
        className="flex gap-6 sm:gap-8 lg:gap-10 overflow-x-auto scroll-smooth no-scrollbar lg:snap-none snap-x snap-mandatory"
      >
        {products.map((product) => (
          <div
            key={product.slug}
            className={`h-full shrink-0 snap-start min-w-[calc(100vw-48px)] sm:min-w-[calc(100vw-80px)] ${slideLgClasses}`}
          >
            <ProductListingCard
              href={`/products/${activeSlug}/${product.slug}`}
              title={product.title}
              description={product.shortDescription || product.description}
              image={product.image}
              showTrademark={product.showTrademark === true}
              specs={product.specs}
              className="h-full"
            />
          </div>
        ))}
      </div>

      <div className="hidden lg:flex justify-center gap-8 mt-10">
        <button type="button" onClick={handleScrollLeft} className="cursor-pointer" aria-label="Previous">
          <Image
            src="/assets/home/Vector.svg"
            alt=""
            width={10}
            height={10}
            className="rotate-180"
          />
        </button>
        <button type="button" onClick={handleScrollRight} className="cursor-pointer" aria-label="Next">
          <Image src="/assets/home/Vector.svg" alt="" width={10} height={10} />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-4 lg:hidden">
        {products.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => scrollToIndex(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === currentIndex ? "bg-[#1F6775] w-4" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
