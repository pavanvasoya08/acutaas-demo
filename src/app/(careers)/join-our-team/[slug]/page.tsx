import HeroImageSection from '@/components/common/HeroImageSection';
import PageIntro from '@/components/common/PageIntro';
import JobDetailSection from './components/JobDetailSection';
import HrSection from '../components/HrSection';

const JobDetailPage: React.FC = () => {
  return (
    <>
      <PageIntro
        layout="one-column"
        title="Lorem Ipsum is simply dummy text"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      />
      <HeroImageSection imageSrc="/images/job-detail-image.png" imageAlt="Job Detail Image" />
      <JobDetailSection />
      <HrSection />
    </>
  );
};

export default JobDetailPage;
