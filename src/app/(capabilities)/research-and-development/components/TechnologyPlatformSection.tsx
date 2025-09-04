import SectionHeader from '@/components/common/SectionHeader';
import CapabilityCard from './CapabilityCard';
import Button from '@/components/ui/Button';

const TechnologyPlatformSection: React.FC = () => {
  return (
    <section className="overflow-hidden py-12 md:py-16 lg:py-20 bg-[#FFF8EE]">
      <div className="main-container">
        <div className="flex flex-col gap-8 md:gap-10 lg:gap-14">
          <SectionHeader title="Our Technology Platforms" />
          {/* <div> */}
          <div className="flex flex-col gap-8 md:gap-10 lg:gap-14 text-center">
            <h2 className="text-3xl font-bold leading-tight text-[#231F20] sm:text-4xl md:text-5xl">
              Technology That Powers Every Process
            </h2>
            <div>
              <CapabilityCard />
            </div>
            <div className="pt-2">
              <Button>Explore our Solution</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyPlatformSection;
