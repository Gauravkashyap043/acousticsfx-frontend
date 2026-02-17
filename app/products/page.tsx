import React from 'react';
import ProductHero from '@/components/products/ProductHero';
import AwardsSection from '@/components/products/AwardsSection';
import AcousticSolutions from '@/components/products/AcousticSolutions';
import CaseStudies from '@/components/products/CaseStudies';
import OurPromise from '@/components/products/OurPromise';
import ApplicationsSection from '@/components/about/ApplicationsSection';
import TrustedBySection from '@/components/contact/TrustedBySection';
import LatestBlogs from '@/components/home/LatestBlogs';
import Testimonials from '@/components/home/Testimonials';
import ConnectWithExperts from '@/components/home/ConnectWithExperts';

const page = () => {
  return (
    <>
    <ProductHero/>
    <AwardsSection/>
    <AcousticSolutions/>
    <CaseStudies/>
    <OurPromise/>
    <ApplicationsSection/>
    <TrustedBySection/>
    <LatestBlogs/>
    <Testimonials/>
    <ConnectWithExperts/>
    </>
  )
}

export default page