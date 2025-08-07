import HeroImageSection from '@/components/common/HeroImageSection';
import BoardOfDirectorsSlider from './components/BoardOfDirectorsSlider';

const LeadershipTeamPage: React.FC = () => {
  return (
    <>
      <HeroImageSection
        imageSrc="/images/leadership-team-banner-image.png"
        imageAlt="Leadership Team Banner"
      />
      <BoardOfDirectorsSlider />
    </>
  );
};

export default LeadershipTeamPage;
