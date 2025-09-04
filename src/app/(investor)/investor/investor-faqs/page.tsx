import HeroImageSection from '@/components/common/HeroImageSection';
import PageIntro from '@/components/common/PageIntro';
import InvestorFaqSection from './components/InvestorFaqSection';

const InvestorFaqPage: React.FC = () => {
  return (
    <>
      <PageIntro
        layout="one-column"
        title="Simply Dummy Text"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      />
      <HeroImageSection imageSrc="/images/investor-faq-image.png" imageAlt="investor-faq-image" />
      <InvestorFaqSection />
    </>
  );
};

export default InvestorFaqPage;
