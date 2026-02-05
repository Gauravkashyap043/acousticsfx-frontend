import StoryInnovation from '@/components/about/StoryInnovation'
import ConnectWithExperts from '@/components/home/ConnectWithExperts'
import Footer from '@/components/home/Footer'
import Header from '@/components/home/Header'
import LatestBlogs from '@/components/home/LatestBlogs'
import Testimonials from '@/components/home/Testimonials'
import OurAcousticPanels from '@/components/products/OurAcousticPanels'
import ProductContentSection from '@/components/products/ProductContentSection'
import ProductHeroSection from '@/components/products/ProductHeroSection'
import WhyChooseSection from '@/components/products/WhyChooseSection'
import { getProductBySlug } from '@/lib/products-data'
import React from 'react'

export default function WoodWoolAcousticPanelPage() {
  const product = getProductBySlug('wood-wool-acoustic-panel')
  
  if (!product) {
    return null
  }

  return (
    <>
      <Header/>
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
      <Footer/>
    </>
  )
}
