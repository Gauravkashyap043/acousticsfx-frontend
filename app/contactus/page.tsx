import React from 'react';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';
import ContactHero from '@/components/contact/ContactHero';
import ContactFormSection from '@/components/contact/ContactFormSection';
import LocationsSection from '@/components/contact/LocationsSection';
import FAQSection from '@/components/home/Faq';
import TrustedBySection from '@/components/contact/TrustedBySection';
import ConnectWithExperts from '@/components/home/ConnectWithExperts';
import Testimonials from '@/components/home/Testimonials';

const page = () => {
  return (
    <>
    <Header/>
    <ContactHero/>
    <ContactFormSection/>
    <LocationsSection/>
    <FAQSection/>
    <TrustedBySection/>
    <Testimonials/>
    <ConnectWithExperts/>
    <Footer/>
    </>
  )
}

export default page