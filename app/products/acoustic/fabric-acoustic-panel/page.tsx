import StoryInnovation from '@/components/about/StoryInnovation'
import ConnectWithExperts from '@/components/home/ConnectWithExperts'
import LatestBlogs from '@/components/home/LatestBlogs'
import Testimonials from '@/components/home/Testimonials'
import OurAcousticPanels from '@/components/products/OurAcousticPanels'
import ProductContentSection from '@/components/products/ProductContentSection'
import ProductHeroSection from '@/components/products/ProductHeroSection'
import WhyChooseSection from '@/components/products/WhyChooseSection'
import { fetchMergedProduct } from '@/lib/products-data'

export default async function FabricAcousticPanelPage() {
  const product = await fetchMergedProduct('fabric-acoustic-panel')

  if (!product) {
    return null
  }

  return (
    <>
      <ProductHeroSection
        title={product.title}
        description={product.description}
        heroImage={product.heroImage}
        breadcrumbText={product.title}
      />
      <ProductContentSection
        title={product.title}
        description={product.description}
      />
      <OurAcousticPanels productSlug={product.slug} />
      <WhyChooseSection
        title={product.title}
        description={product.description}
      />
      <StoryInnovation/>
      <LatestBlogs/>
      <Testimonials/>
      <ConnectWithExperts/>
    </>
  )
}
