import PageIntro from '@/components/common/PageIntro';
import HeroImageSection from '@/components/common/HeroImageSection';
import StatisticsSection from '@/app/components/StatisticsSection';
import AboutUsSection from './components/AboutUsSection';
import MissionSection from './components/MissionSection';
import VisionSection from './components/VisionSection';
import CoreValueSection from './components/CoreValueSection';
import HistorySection from './components/HistorySection';
import { Metadata } from 'next';
import statistics from '@/lib/data/statistics.json';

export const metadata: Metadata = {
  title: 'About Acutaas | Global Leader in Specialty Chemistry',
  description:
    'Discover Acutaas, a trusted chemical enterprise with 20 years of expertise delivering innovation, sustainability, and excellence across industries worldwide.',
};

const AboutPage: React.FC = () => {
  return (
    <>
      <PageIntro
        title="You and Us: Chemistries Apex"
        description="Transforming and safeguarding lives while helping the world innovate through breakthrough chemistry for new age industries."
        buttonLabel="Reach Out"
        pageUrl="/contact-us"
      />
      <HeroImageSection videoSrc="/images/about-us-video.mp4" isVideo />
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
