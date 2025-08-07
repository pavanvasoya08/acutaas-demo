import PageIntro from '@/components/common/PageIntro';
import HeroImageSection from '@/components/common/HeroImageSection';
import StatisticsSection from '@/app/components/StatisticsSection';
import AboutUsSection from './components/AboutUsSection';
import MissionSection from './components/MissionSection';
import VisionSection from './components/VisionSection';
import CoreValueSection from './components/CoreValueSection';
import HistorySection from './components/HistorySection';

import statistics from '@/lib/data/statistics.json';

const AboutPage: React.FC = () => {
  return (
    <>
      <PageIntro
        title="Advancing Tomorrow Through Science"
        description="As a listed global enterprise, we deliver value through science scale and trust built over two decades of innovation in advanced intermediates and beyond."
        buttonLabel="Reach Out"
      />
      <HeroImageSection
        imageSrc="/images/about-banner-image.png"
        imageAlt="About Us Banner"
        isVideo
      />
      <StatisticsSection statistics={statistics.aboutStatistics} />
      <AboutUsSection />
      <HistorySection />
      <MissionSection />
      <VisionSection />
      <CoreValueSection />
    </>
  );
};

export default AboutPage;
