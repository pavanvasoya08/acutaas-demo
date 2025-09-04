import HeroImageSection from '@/components/common/HeroImageSection';
import PageIntro from '@/components/common/PageIntro';
import GrievanceIntroSection from './components/GrievanceIntroSection';
import GrievanceProcessSection from './components/GrievanceProcessSection';
import GrievanceContactSection from './components/GrievanceContactSection';
import GrievanceFAQSection from './components/GrievanceFAQSection';

const GrievanceRedressalPage: React.FC = () => {
  return (
    <>
      <PageIntro
        title="Lorem Ipsum is simply dummy text"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <HeroImageSection
        imageSrc="/images/grievance-redressal-image.png"
        imageAlt="grievance-redressal"
      />
      <GrievanceIntroSection />
      <GrievanceProcessSection />
      <GrievanceContactSection />
      <GrievanceFAQSection />
    </>
  );
};

export default GrievanceRedressalPage;
