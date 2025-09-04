import HeroImageSection from '@/components/common/HeroImageSection';
import PageIntro from '@/components/common/PageIntro';
import InvestorRelationsSection from './components/InvestorRelationsSection';

const InvestorRelationPage: React.FC = () => {
  return (
    <>
      <PageIntro
        layout="one-column"
        title="Simply Dummy Text"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      />
      <HeroImageSection
        imageSrc="/images/investor-relations-contact-image.png"
        imageAlt="investor-relations-contact-image"
      />
      <InvestorRelationsSection />
    </>
  );
};

export default InvestorRelationPage;
