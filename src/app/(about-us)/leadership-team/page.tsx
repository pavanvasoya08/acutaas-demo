import HeroImageSection from '@/components/common/HeroImageSection';
import BoardOfDirectorsSection from './components/BoardOfDirectorsSection';
import CoreTeamSection from './components/CoreTeamSection';
import { Metadata } from 'next';
import CoreStrengthSection from './components/CoreStrengthSection';

export const metadata: Metadata = {
  title: 'Acutaas Leadership | Visionaries Driving Progress',
  description:
    'Meet the leadership team of Acutaas, combining decades of expertise, governance, and innovation to guide the company’s growth and global impact.',
};

const LeadershipTeamPage: React.FC = () => {
  return (
    <>
      <HeroImageSection
        imageSrc="/images/leadership-team-banner-image.webp"
        imageAlt="Leadership Team Banner"
      />
      <BoardOfDirectorsSection />
      <CoreTeamSection />
      <CoreStrengthSection />
    </>
  );
};

export default LeadershipTeamPage;
