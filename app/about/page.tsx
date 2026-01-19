import React from 'react';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';
import AboutHero from '@/components/about/AboutHero';
import StatsSection from '@/components/about/StatsSection';
import AboutContent from '@/components/about/AboutContent';

const page = () => {
  return (
    <>
    <Header/>
    <AboutHero/>
    <StatsSection/>
    <AboutContent/>
    <Footer/>
    </>
  )
}

export default page