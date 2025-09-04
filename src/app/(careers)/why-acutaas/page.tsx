import PageIntro from '@/components/common/PageIntro';
import HeroImageSection from '@/components/common/HeroImageSection';
import CareerSection from './components/CareerSection';
import AnalyticsSection from './components/AnalyticsSection';

const WhyAcuttasPage: React.FC = () => {
    return (
        <>
            <PageIntro
                title="Lorem Ipsum is simply dummy text"
                description="At ACUTAAS, research means creating change, turning possibilities into solutions that add value for industries and communities worldwide."
                layout='one-column'
            />
            <HeroImageSection imageSrc="/images/why-acutaas-home-banner.png" imageAlt="acutaas Banner" />
            <CareerSection />
            <AnalyticsSection />
        </>
    );
};

export default WhyAcuttasPage;
