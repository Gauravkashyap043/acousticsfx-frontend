import ConnectWithExperts from '@/components/home/ConnectWithExperts'
import Footer from '@/components/home/Footer'
import Header from '@/components/home/Header'
import Testimonials from '@/components/home/Testimonials'
import AboutProduct from '@/components/products/AboutProduct'
import CertificationsSection from '@/components/products/CertificationsSection'
import FinishesShades from '@/components/products/FinishesShades'
import GallerySection from '@/components/products/GallerySection'
import LinearluxGrid from '@/components/products/LinearluxGrid'
import LinearluxHero from '@/components/products/LinearluxHero'
import ProductSpecification from '@/components/products/ProductSpecification'
import RelatedProducts from '@/components/products/RelatedProducts'
import SubstratesSection from '@/components/products/substrates '
import { getProductBySlug, getSubProductData } from '@/lib/products-data'
import React from 'react'
import { notFound } from 'next/navigation'

export default async function MicroatlasPage() {
  const product = await getProductBySlug('wood-wool-acoustic-panel')
  const subProduct = await getSubProductData('wood-wool-acoustic-panel', 'microatlas')

  if (!product || !subProduct) {
    notFound()
  }

  return (
    <>
      <Header/>
      <LinearluxHero
        productTitle={product.title}
        subProductTitle={subProduct.title}
        description={subProduct.description}
      />
      <LinearluxGrid/>
      <ProductSpecification/>
      <GallerySection/>
      <SubstratesSection/>
      <AboutProduct/>
      <CertificationsSection/>
      <FinishesShades/>
      <Testimonials/>
      <RelatedProducts/>
      <ConnectWithExperts/>
      <Footer/>
    </>
  )
}
