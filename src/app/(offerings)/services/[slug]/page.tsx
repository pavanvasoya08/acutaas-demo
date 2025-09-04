import HeroImageSection from '@/components/common/HeroImageSection';
import PageIntro from '@/components/common/PageIntro';
import ServiceIntroSection from './components/ServiceIntroSection';
import ServiceListSection from './components/ServiceListSection';

const ProductDetailPage: React.FC = () => {
  return (
    <>
      <PageIntro
        layout="one-column"
        title="Simply Dummy Text"
        description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`}
      />
      <HeroImageSection imageSrc="/images/service-detail-image.png" imageAlt="Service Detail" />
      <ServiceIntroSection />
      <ServiceListSection />
    </>
  );
};

export default ProductDetailPage;
