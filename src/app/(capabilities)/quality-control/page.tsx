import PageIntro from '@/components/common/PageIntro';
import HeroImageSection from '@/components/common/HeroImageSection';
import OverviewSection from './components/OverviewSection';
import StatisticsSection from '../../components/StatisticsSection';
import statistics from '@/lib/data/statistics.json';
import QcEquipmentSection from './components/QcEquipmentSection';
import CsrProgramSection from './components/CsrProgramSection';
const QualityControlPage: React.FC = () => {
  return (
    <>
      <PageIntro
        title="Advancing Tomorrow Through Science"
        description="As a listed global enterprise, we deliver value through science scale and trust built over two decades of innovation in advanced intermediates and beyond."
        buttonLabel="Reach Out"
        pageUrl="/contact-us"
      />
      <HeroImageSection
        imageSrc="/images/quality-control-home-page.png"
        imageAlt="quality control"
      />
      <OverviewSection />
      <StatisticsSection statistics={statistics.manufacturingStatistics} />
      <CsrProgramSection />
      <QcEquipmentSection />
    </>
  );
};

export default QualityControlPage;
