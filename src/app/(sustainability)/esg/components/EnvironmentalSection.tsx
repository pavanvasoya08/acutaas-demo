import SectionHeader from '@/components/common/SectionHeader';
import EnvironmentalAccordion from './EnvironmentalAccordion';

const EnvironmentalSection: React.FC = () => {
  return (
    <section className="pb-10 sm:pb-16 lg:pb-20 overflow-hidden">
      <div className="main-container">
        <SectionHeader title="Our Solutions" />
        <div className="max-w-[1080px] 3xl:max-w-[1200px] mx-auto grid grid-cols-1 gap-5 items-end text-center mt-[36px] mb-[36px] lg:mb-[56px] lg:mt-[44px] md:mb-[48px]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] 3xl:text-[50px] font-semibold !leading-[1.2]">
            Approaches That Move Chemistry
          </h2>
          <p>We apply deep science to improve how chemistry performs, scales, and sustains.</p>
        </div>
        <div>
          <EnvironmentalAccordion />
        </div>
      </div>
    </section>
  );
};

export default EnvironmentalSection;
