import HeroImageSection from '@/components/common/HeroImageSection';
import PageIntro from '@/components/common/PageIntro';
import IntroreactionSection from './components/IntroreactionSection';
import OurreactionSection from './components/OurreactionSection';


const ReactionPage: React.FC = () => {
    return (
        <>
            <PageIntro
                title="Advancing Science With Purpose"
                description="At ACUTAAS, research means creating change, turning possibilities into solutions that add value for industries and communities worldwide."
                buttonLabel="Contact Us"
                pageUrl="/contact-us"
            />
            <HeroImageSection imageSrc="/images/reaction-home-image.png" imageAlt="Research Banner" />
            <IntroreactionSection />
            <OurreactionSection />
        </>
    );
};

export default ReactionPage;
