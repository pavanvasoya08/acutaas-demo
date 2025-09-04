import { Metadata } from 'next';
import HeroImageSection from '@/components/common/HeroImageSection';
import CertificationSection from './components/CertificationSection';
import AwardSection from './components/AwardSection';

export const metadata: Metadata = {
  title: 'Acutaas Awards & Certifications | Global Trust',
  description:
    'Explore Acutaas global certifications and industry awards that reflect our commitment to quality, safety, innovation, and trusted leadership in specialty chemistry.',
};

const LeadershipTeamPage: React.FC = () => {
  return (
    <>
      <HeroImageSection imageSrc="/images/award-banner-image.webp" imageAlt="Award Banner" />
      <CertificationSection />
      <AwardSection />
    </>
  );
};

export default LeadershipTeamPage;
