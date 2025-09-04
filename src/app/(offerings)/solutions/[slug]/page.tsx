import HeroImageSection from '@/components/common/HeroImageSection';
import PageIntro from '@/components/common/PageIntro';
import SolutionIntroSection from './components/SolutionIntroSection';
import CapabilitiesSection from './components/CapabilitiesSection';

const ProductDetailPage: React.FC = () => {
  return (
    <>
      <PageIntro
        title="Lorem Ipsum is simply dummy text"
        description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`}
        buttonLabel="Contact Us"
        pageUrl="/contact-us"
      />
      <HeroImageSection imageSrc="/images/solution-detail-image.png" imageAlt="Service Detail" />
      <SolutionIntroSection />
      <CapabilitiesSection />
    </>
  );
};

export default ProductDetailPage;
