import React from 'react'
import ProductHero from '@/components/products/ProductHero'
import AwardsSection from '@/components/products/AwardsSection'
import AcousticSolutions from '@/components/products/AcousticSolutions'
import AcousticWhyChooseUs from '@/components/products/AcousticWhyChooseUs'
import StoryInnovation from '@/components/about/StoryInnovation'
import TrustedBySection from '@/components/contact/TrustedBySection'
import LatestBlogs from '@/components/home/LatestBlogs'
import Testimonials from '@/components/home/Testimonials'
import ConnectWithExperts from '@/components/home/ConnectWithExperts'

const page = () => {
    return (
        <>
            <ProductHero />
            <AwardsSection />
            <AcousticSolutions />
            <StoryInnovation/>
            <AcousticWhyChooseUs/>
            <TrustedBySection/>
            <LatestBlogs/>
            <Testimonials/>
            <ConnectWithExperts/>
        </>
    )
}

export default page