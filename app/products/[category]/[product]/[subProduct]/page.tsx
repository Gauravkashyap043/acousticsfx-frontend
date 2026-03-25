import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ConnectWithExperts from "@/components/home/ConnectWithExperts";
import Testimonials from "@/components/home/Testimonials";
import AboutProduct from "@/components/products/AboutProduct";
import CertificationsSection from "@/components/products/CertificationsSection";
import FinishesShades from "@/components/products/FinishesShades";
import GallerySection from "@/components/products/GallerySection";
import LinearluxHero from "@/components/products/LinearluxHero";
import ProductSpecification from "@/components/products/ProductSpecification";
import Product3DViewer from "@/components/products/Product3DViewer";
import RelatedProducts from "@/components/products/RelatedProducts";
import SubstratesSection from "@/components/products/SubstratesSection";
import { fetchMergedSubProduct, fetchRelatedProductsForCategory } from "@/lib/products-data";

type Props = {
  params: Promise<{ category: string; product: string; subProduct: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { product: productSlug, subProduct: subProductSlug } = await params;
  const { product, subProduct } = await fetchMergedSubProduct(
    productSlug,
    subProductSlug
  );
  if (!subProduct) return { title: subProductSlug, description: "" };
  return {
    title: `${subProduct.title} | ${product?.title ?? ""}`.trim(),
    description: subProduct.description?.slice(0, 160) ?? "",
  };
}

export default async function SubProductDetailPage({ params }: Props) {
  const { category, product: productSlug, subProduct: subProductSlug } = await params;
  const { product, subProduct } = await fetchMergedSubProduct(
    productSlug,
    subProductSlug
  );

  if (!product || !subProduct) notFound();

  const relatedProducts = await fetchRelatedProductsForCategory(category, productSlug);

  return (
    <>
      <LinearluxHero
        productTitle={product.title}
        productShowTrademark={product.showTrademark === true}
        subProductTitle={subProduct.title}
        subProductShowTrademark={subProduct.showTrademark === true}
        description={subProduct.description}
      />
      <ProductSpecification
        sectionTitle={subProduct.specSectionTitle}
        specDescription={subProduct.specDescription}
        specs={subProduct.specs}
      />
      <GallerySection galleryImages={subProduct.galleryImages} />
      <Product3DViewer profilesSection={subProduct.profilesSection} />
      <SubstratesSection substratesSection={subProduct.substratesSection} />
      <AboutProduct aboutTabs={subProduct.aboutTabs} />
      <CertificationsSection
        certifications={subProduct.certifications}
        sectionTitle={subProduct.certificationsSectionTitle}
        sectionDescription={subProduct.certificationsSectionDescription}
      />
      <FinishesShades finishesSection={subProduct.finishesSection} />
      <Testimonials />
      <RelatedProducts products={relatedProducts} categorySlug={category} />
      <ConnectWithExperts />
    </>
  );
}
