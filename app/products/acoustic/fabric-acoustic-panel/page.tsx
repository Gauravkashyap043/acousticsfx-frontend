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
import { notFound } from 'next/navigation'

export default async function FabricAcousticPanelPage() {
  const product = await getProductBySlug('fabric-acoustic-panel')

  if (!product) {
    notFound()
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
      <OurAcousticPanels product={product} />
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
