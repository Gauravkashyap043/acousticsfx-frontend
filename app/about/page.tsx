import React from 'react';
import AboutHero from '@/components/about/AboutHero';
import StatsSection from '@/components/about/StatsSection';
import AboutContent from '@/components/about/AboutContent';
import FoundationSection from '@/components/about/FoundationSection';
import ValuesSection from '@/components/about/ValuesSection';
import StoryInnovation from '@/components/about/StoryInnovation';
import FounderSection from '@/components/about/FounderSection';
import ApplicationsSection from '@/components/about/ApplicationsSection';
import TrustedBySection from '@/components/contact/TrustedBySection';
import LatestBlogs from '@/components/home/LatestBlogs';
import Testimonials from '@/components/home/Testimonials';
import ConnectWithExperts from '@/components/home/ConnectWithExperts';

const page = () => {
  return (
    <>
    <AboutHero/>
    <StatsSection/>
    <AboutContent/>
    <FoundationSection/>
    <ValuesSection/>
    <StoryInnovation/>
    <FounderSection/>
    <ApplicationsSection/>
    <TrustedBySection/>
    <LatestBlogs/>
    <Testimonials/>
    <ConnectWithExperts/>
    </>
  )
}

export default page