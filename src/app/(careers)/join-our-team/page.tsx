import HeroImageSection from '@/components/common/HeroImageSection';
import PageIntro from '@/components/common/PageIntro';
import JobOpprtunitySection from './components/JobOpprtunitySection';
import OpeningSection from './components/OpeningSection';
import HrSection from './components/HrSection';

const JoinTeamPage: React.FC = () => {
    return (
        <>
            <PageIntro
                title="Lorem Ipsum is simply dummy text"
                description="At ACUTAAS, research means creating change, turning possibilities into solutions that add value for industries and communities worldwide."
                buttonLabel="Contact Us"
                pageUrl="/contact-us"
                layout='one-column'
            />
            <HeroImageSection imageSrc="/images/join-team-banner.png" imageAlt="Research Banner" />
            <JobOpprtunitySection />
            <OpeningSection />
            <HrSection />
        </>
    );
};

export default JoinTeamPage;
