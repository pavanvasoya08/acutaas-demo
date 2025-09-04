import HeroImageSection from '@/components/common/HeroImageSection';
import PageIntro from '@/components/common/PageIntro';
import InfracapabilitiesSection from './components/InfracapabilitiesSection';
import DetailsSachinBranch from './components/DetailsSachinBranch';
import DetailsAnkleshwarBranch from './components/DetailsAnkleshwarBranch';
import DetailsJhagadiaBranch from './components/DetailsJhagadiaBranch';
import KeyMatrixSection from './components/KeyMatrixSection';

const InfrastructurePage: React.FC = () => {
    return (
        <>
            <PageIntro
                title="Advancing Tomorrow Through Science"
                description="As a listed global enterprise, we deliver value through science scale and trust built over two decades of innovation in advanced intermediates and beyond."
                buttonLabel="Reach Out"
                pageUrl='/contact-us'
            />
            <HeroImageSection
                imageSrc="/images/infrastructure-image.png"
                imageAlt="Infrastructure Banner"
            />
            <KeyMatrixSection />
            <InfracapabilitiesSection />
            <DetailsSachinBranch />
            <DetailsAnkleshwarBranch />
            <DetailsJhagadiaBranch />
        </>
    );
};

export default InfrastructurePage;