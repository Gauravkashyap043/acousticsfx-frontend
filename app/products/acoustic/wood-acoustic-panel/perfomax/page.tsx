import ConnectWithExperts from '@/components/home/ConnectWithExperts'
import Testimonials from '@/components/home/Testimonials'
import AboutProduct from '@/components/products/AboutProduct'
import CertificationsSection from '@/components/products/CertificationsSection'
import FinishesShades from '@/components/products/FinishesShades'
import GallerySection from '@/components/products/GallerySection'
import LinearluxGrid from '@/components/products/LinearluxGrid'
import LinearluxHero from '@/components/products/LinearluxHero'
import Product3DViewer from '@/components/products/Product3DViewer'
import ProductSpecification from '@/components/products/ProductSpecification'
import RelatedProducts from '@/components/products/RelatedProducts'
import SubstratesSection from '@/components/products/SubstratesSection'
import { fetchMergedSubProduct } from '@/lib/products-data'

export default async function PerfomaxPage() {
  const { product, subProduct } = await fetchMergedSubProduct('wood-acoustic-panel', 'perfomax')
  
  if (!product || !subProduct) {
    return null
  }

  return (
    <>
      <LinearluxHero
        productTitle={product.title}
        subProductTitle={subProduct.title}
        description={subProduct.description}
      />
      <LinearluxGrid/>
      <ProductSpecification/>
      <GallerySection/>
      <Product3DViewer/>
      <SubstratesSection/>
      <AboutProduct/>
      <CertificationsSection/>
      <FinishesShades/>
      <Testimonials/>
      <RelatedProducts/>
      <ConnectWithExperts/>
    </>
  )
}
