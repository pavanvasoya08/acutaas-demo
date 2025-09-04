import HeroImageSection from '@/components/common/HeroImageSection';
import ESGCommitmentSection from './components/ESGCommitmentSection';
import StatisticsSection from '../../components/StatisticsSection';
import statistics from '@/lib/data/statistics.json';
import AnnualReportSection from './components/AnnualReportSection';
import PolicyListSection from './components/PolicyListSection';
import EnvironmentalSection from './components/EnvironmentalSection';
import PageIntro from '@/components/common/PageIntro';

const ESGPage: React.FC = () => {
  return (
    <>
      <PageIntro
        title="Lorem Ipsum is simply dummy text"
        description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`}
        layout="one-column"
      />
      <HeroImageSection imageSrc="/images/esg-banner-image.png" imageAlt="ESG Image" />
      <ESGCommitmentSection />
      <StatisticsSection statistics={statistics.ESGStatistics} />
      <EnvironmentalSection />
      <AnnualReportSection />
      <PolicyListSection />
    </>
  );
};

export default ESGPage;
