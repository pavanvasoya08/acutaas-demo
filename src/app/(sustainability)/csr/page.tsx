import HeroImageSection from '@/components/common/HeroImageSection';
import OurCommitmentSection from './components/OurCommitmentSection';
import CSRMissionSection from './components/CSRMissionSection';
import CSRPolicySection from './components/CSRPolicySection';
import CSRAnnualPlanSection from './components/CSRAnnualPlanSection';
import CSRProgramSection from './components/CSRProgramSection';
import PageIntro from '@/components/common/PageIntro';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Acutaas CSR | Building Communities and Sustainability',
  description:
    'Learn how Acutaas creates social impact through education, health, empowerment, and sustainability programs that enhance lives and strengthen communities.',
};

const CSRPage: React.FC = () => {
  return (
    <>
      <PageIntro
        title="Driving Change Beyond Business"
        description="We empower communities through education, health, and sustainable growth, building stronger futures where our roots run deep."
        buttonLabel="Explore Our Impact"
        pageUrl="/esg"
        layout="one-column"
      />
      <HeroImageSection imageSrc="/images/csr-banner-image.png" imageAlt="CSR Banner" />
      <OurCommitmentSection />
      <CSRMissionSection />
      <CSRPolicySection />
      <CSRAnnualPlanSection />
      <CSRProgramSection />
    </>
  );
};

export default CSRPage;
