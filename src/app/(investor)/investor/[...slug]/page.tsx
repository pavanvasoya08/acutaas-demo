import HeroImageSection from '@/components/common/HeroImageSection';
import PageIntro from '@/components/common/PageIntro';

const InvestorDetailPage: React.FC = () => {
  return (
    <>
      <PageIntro
        layout="one-column"
        title="Disclosure under Reg 46 of SEBI LODR"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        className="!max-w-[986px] 3xl:!max-w-[1260px]"
      />
      <HeroImageSection imageSrc="/images/investor-detail-image.png" imageAlt="Investor Detail" />
    </>
  );
};

export default InvestorDetailPage;
