import React from 'react';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';
import ProductHero from '@/components/products/ProductHero';
import AwardsSection from '@/components/products/AwardsSection';
import AcousticSolutions from '@/components/products/AcousticSolutions';

const page = () => {
  return (
    <>
    <Header/>
    <ProductHero/>
    <AwardsSection/>
    <AcousticSolutions/>
    <Footer/>
    </>
  )
}

export default page