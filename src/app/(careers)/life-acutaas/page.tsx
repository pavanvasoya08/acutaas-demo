import HeroImageSection from '@/components/common/HeroImageSection';
import PageIntro from '@/components/common/PageIntro';
import OurCultureSection from './components/OurCultureSection';
import LifeAcutaasSection from './components/LifeAcutaasSection';
import GallerySection from './components/GallerySection';


const ResearchPage: React.FC = () => {
    return (
        <>
            <PageIntro
                title="Advancing Science With Purpose"
                description="At ACUTAAS, research means creating change, turning possibilities into solutions that add value for industries and communities worldwide."
                buttonLabel="Contact Us"
                pageUrl="/contact-us"
            />
            <HeroImageSection imageSrc="/images/life-acutaas-home-image.png" imageAlt="Research Banner" />
            <OurCultureSection />
            <LifeAcutaasSection />
            <GallerySection />


        </>
    );
};

export default ResearchPage;
