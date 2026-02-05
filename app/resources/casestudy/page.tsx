import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';
import CaseStudySection from '@/components/resources/CaseStudySection';
import Testimonials from '@/components/home/Testimonials';
import ConnectWithExperts from '@/components/home/ConnectWithExperts';

export default function CaseStudiesPage() {
  return (
    <>
      <Header />
      
      {/* First Case Study - White background */}
      <CaseStudySection 
        image="/assets/product/Image.png"
        bgColor="white"
        reverse={false}
      />

      {/* Second Case Study - Light blue background */}
      <CaseStudySection 
        image="/assets/product/Rectangle 4.png"
        bgColor="light-blue"
        reverse={true}
      />

      {/* Third Case Study - White background */}
      <CaseStudySection 
        image="/assets/product/Rectangle 6.png"
        bgColor="white"
        reverse={false}
      />

      {/* Testimonials */}
      <Testimonials />

      {/* Connect With Experts */}
      <ConnectWithExperts />

      <Footer />
    </>
  );
}
