import StatisticsSection from '@/app/components/StatisticsSection';
import statistics from '@/lib/data/statistics.json';
import PageIntro from '@/components/common/PageIntro';
import HeroImageSection from '@/components/common/HeroImageSection';
import ManufacturingIntroSection from './components/ManufacturingIntroSection';
import KeyMatrix from './components/KeyMatrix';
import KeyMatrixSection from './components/KeyMatrixSection';
import KeyManufacturingSection from './components/KeyManufacturingSection';

const ManufacturingPage: React.FC = () => {
  return (
    <>
      <PageIntro
        title="Advancing Tomorrow Through Science"
        description="As a listed global enterprise, we deliver value through science scale and trust built over two decades of innovation in advanced intermediates and beyond."
        buttonLabel="Reach Out"
        pageUrl="/contact-us"
      />
      <HeroImageSection
        imageSrc="/images/manufacturing-banner-image.png"
        imageAlt="Manufacturing Banner"
      />
      <StatisticsSection statistics={statistics.manufacturingStatistics} />
      <KeyMatrix />
      <ManufacturingIntroSection />
      <KeyMatrixSection />
      <KeyManufacturingSection />
    </>
  );
};

export default ManufacturingPage;
