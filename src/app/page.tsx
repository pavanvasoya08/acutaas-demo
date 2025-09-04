import HeroSection from '@/app/components/HeroSection';
import StatisticsSection from '@/app/components/StatisticsSection';
import AboutUsSection from '@/app/components/AboutUsSection';
import SolutionsSection from '@/app/components/SolutionsSection';
import AwardsSection from '@/app/components/AwardsSection';
import IndustriesSection from '@/app/components/IndustriesSection';
import WhyChooseUsSection from '@/app/components/WhyChooseUsSection';
import OurProductSection from '@/app/components/OurProductSection';
import OurServiceSection from '@/app/components/OurServiceSection';
import RecentNewsSection from '@/app/components/RecentNewsSection';
import ContactSection from '@/app/components/ContactSection';

import statistics from '@/lib/data/statistics.json';
import { Metadata } from 'next';
import SlideUp from '@/components/common/SlideUp';

export const metadata: Metadata = {
  title: 'Acutaas | Specialty Chemicals and Intermediates Leader',
  description:
    'We are a leading manufacturer of pharmaceutical intermediates, specialty chemicals, semiconductors, and battery materials with 21 years of expertise in the industry.',
};

const HomePage: React.FC = () => {
  return (
    <>
      <SlideUp>
        <HeroSection />
      </SlideUp>
      <SlideUp>
        <StatisticsSection statistics={statistics.homeStatistics} />
      </SlideUp>
      <SlideUp>
        <AboutUsSection />
      </SlideUp>
      <SlideUp>
        <OurProductSection />
      </SlideUp>
      <SlideUp>
        <OurServiceSection />
      </SlideUp>
      <SlideUp>
        <SolutionsSection />
      </SlideUp>
      <SlideUp>
        <AwardsSection />
      </SlideUp>
      <SlideUp>
        <IndustriesSection />
      </SlideUp>
      <SlideUp>
        <WhyChooseUsSection />
      </SlideUp>
      <SlideUp>
        <RecentNewsSection />
      </SlideUp>
      <SlideUp>
        <ContactSection />
      </SlideUp>
    </>
  );
};

export default HomePage;
