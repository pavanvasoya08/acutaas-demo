import SectionHeader from '@/components/common/SectionHeader';
import Button from '@/components/ui/Button';

const CSRPolicySection: React.FC = () => {
  return (
    <section className="bg-[#FFF8EE] py-16 lg:py-20 overflow-hidden">
      <div className="main-container">
        <div className="flex flex-col gap-8 md:gap-10 lg:gap-14">
          <SectionHeader title="CSR Policy" />
          <div className="flex flex-col gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="text-center max-w-[1080px] 3xl:max-w-[1280px] mx-auto flex flex-col gap-5">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] 3xl:text-[50px] font-semibold !leading-[1.2]">
                Guidelines That Shape Our Impact
              </h2>
              <p>
                Our CSR policy defines the principles and framework that steer our community
                programs. It ensures resources are used responsibly, initiatives are transparent and
                measurable, and every effort aligns with our goal of creating meaningful, lasting
                benefits for people and the environment.
              </p>
            </div>
            <Button>Read our CSR Policy</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CSRPolicySection;
