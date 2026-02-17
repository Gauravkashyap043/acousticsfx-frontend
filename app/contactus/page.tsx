import React from 'react';
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
    <ContactHero/>
    <ContactFormSection/>
    <LocationsSection/>
    <FAQSection/>
    <TrustedBySection/>
    <Testimonials/>
    <ConnectWithExperts/>
    </>
  )
}

export default page