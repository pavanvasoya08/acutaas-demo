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

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <StatisticsSection statistics={statistics.homeStatistics} />
      <AboutUsSection />
      <OurProductSection />
      <OurServiceSection />
      <SolutionsSection />
      <AwardsSection />
      <IndustriesSection />
      <WhyChooseUsSection />
      <RecentNewsSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
