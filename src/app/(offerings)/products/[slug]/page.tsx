import HeroImageSection from '@/components/common/HeroImageSection';
import PageIntro from '@/components/common/PageIntro';
import PharmaIntermediateSection from './components/PharmaIntermediateSection';
import ProductTable from './components/ProductTableSection';

const ProductDetailPage: React.FC = () => {
  return (
    <>
      <PageIntro
        title="Lorem Ipsum is simply dummy text"
        description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
      />
      <HeroImageSection imageSrc="/images/product-detail-image.png" imageAlt="Product Detail" />
      <PharmaIntermediateSection />
      <ProductTable />
    </>
  );
};

export default ProductDetailPage;
