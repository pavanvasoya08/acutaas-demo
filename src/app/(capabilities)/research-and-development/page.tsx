import HeroImageSection from '@/components/common/HeroImageSection';
import PageIntro from '@/components/common/PageIntro';
import TechnologySection from './components/TechnologySection';
import TechnologyPlatformSection from './components/TechnologyPlatformSection';
import LaboratoryDetailsSection from './components/LaboratoryDetailsSection';
import AnalyticalCapabilitiesSection from './components/AnalyticalCapabilitiesSection';
import ProcessChemistrySection from './components/ProcessChemistrySection';
import ResearchAreasSection from './components/ResearchAreasSection';
import SpecificExperienceSection from './components/SpecificExperienceSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Acutaas R&D | Innovation in Chemistry and Beyond',
  description:
    'Explore Acutaas R&D excellence built on advanced labs, analytical capabilities, core reactions, research areas, and technology platforms that power global innovation.',
};

const ResearchPage: React.FC = () => {
  return (
    <>
      <PageIntro
        title="Advancing Science With Purpose"
        description="At ACUTAAS, research means creating change, turning possibilities into solutions that add value for industries and communities worldwide."
        buttonLabel="Contact Us"
        pageUrl="/contact-us"
      />
      <HeroImageSection imageSrc="/images/research-banner-image.png" imageAlt="Research Banner" />
      <TechnologySection />
      <LaboratoryDetailsSection />
      <AnalyticalCapabilitiesSection />
      <ProcessChemistrySection />
      <ResearchAreasSection />
      <TechnologyPlatformSection />
      <SpecificExperienceSection />
    </>
  );
};

export default ResearchPage;
