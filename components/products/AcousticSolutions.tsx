import Image from "next/image";
import Link from "next/link";
import { fetchProducts, type Product } from "@/lib/products-api";
import { products as staticProducts } from "@/lib/products-data";

const FALLBACK_CARDS = staticProducts.map((p) => ({
  slug: p.slug,
  title: p.title,
  description: p.description,
  image: p.image,
}));

export default async function AcousticSolutions() {
  let cards: Array<{ slug: string; title: string; description: string; image: string }>;

  try {
    const { products } = await fetchProducts("acoustic");
    cards =
      products.length > 0
        ? products.map((p: Product) => ({
            slug: p.slug,
            title: p.title,
            description: p.description,
            image: p.image,
          }))
        : FALLBACK_CARDS;
  } catch {
    cards = FALLBACK_CARDS;
  }

  const leftCards = cards.filter((_, i) => i % 2 === 0);
  const rightCards = cards.filter((_, i) => i % 2 === 1);

  return (
    <section className="w-full bg-white">
      <div className="px-[24px] sm:px-[40px] md:px-[60px] lg:px-[100px] py-[60px] sm:py-[80px] lg:py-[100px]">

        {/* Top Tabs */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 lg:mb-16">
          <Link href="/products/acoustic" className="cursor-pointer">
            <button className="px-5 sm:px-6 py-2 text-[10px] axiforma border border-[#1F6775] bg-[#1F6775] text-white cursor-pointer">
              ACOUSTIC SOLUTIONS
            </button>
          </Link>
          <Link href="/products/flooring" className="cursor-pointer">
            <button className="px-5 sm:px-6 py-2 text-[10px] axiforma border border-gray-300 text-gray-600 cursor-pointer">
              FLOORMOUNT SOLUTIONS
            </button>
          </Link>
          <Link href="/products/noise-solutions" className="cursor-pointer">
            <button className="px-5 sm:px-6 py-2 text-[10px] axiforma border border-gray-300 text-gray-600 cursor-pointer">
              SOUND PROOFING SOLUTIONS
            </button>
          </Link>
        </div>

        {/* Heading */}
        <div className="mb-10 sm:mb-12 lg:mb-14">
          <p className="text-[16px] sm:text-[18px] manrope font-medium text-[#1F6775] mb-2">
            Acoustic Solutions
          </p>
          <h2 className="text-[32px] sm:text-[38px] lg:text-[45px] font-semibold manrope leading-tight">
            Explore Our Acoustic <br /> Masterpieces
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-16 sm:gap-y-20 lg:gap-x-20 lg:gap-y-20">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-y-16 sm:gap-y-20">
            {leftCards.map((card) => (
              <ProductCard key={card.slug} card={card} />
            ))}
          </div>

          {/* RIGHT COLUMN (60px DOWN) */}
          <div className="flex flex-col gap-y-16 sm:gap-y-20 lg:mt-[60px]">
            {rightCards.map((card) => (
              <ProductCard key={card.slug} card={card} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function ProductCard({ card }: { card: { slug: string; title: string; description: string; image: string } }) {
  return (
    <Link href={`/products/acoustic/${card.slug}`} className="block cursor-pointer">
      <Image
        src={card.image}
        alt={card.title}
        width={600}
        height={450}
        className="w-[600px] max-w-full h-auto object-cover"
      />
      <p className="mt-4 text-[18px] manrope font-normal text-[#EA8E39]">
        &bull; {card.title}
      </p>
      <p className="mt-2 text-[18px] manrope font-normal text-gray-500 leading-relaxed">
        {card.description}
      </p>
      <div className="mt-4 w-10 h-10 border border-orange-400 rounded-full flex items-center justify-center">
        <Image
          src="/assets/home/universalvector.svg"
          alt="Arrow"
          width={20}
          height={8}
          style={{ filter: "brightness(0) saturate(100%) invert(56%) sepia(88%) saturate(2171%) hue-rotate(7deg)" }}
        />
      </div>
    </Link>
  );
}
