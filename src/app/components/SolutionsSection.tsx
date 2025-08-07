import SectionHeader from '@/components/common/SectionHeader';
import SolutionAccordion from './SolutionAccordion';

const SolutionsSection: React.FC = () => {
  return (
    <section className="pb-10 sm:pb-16 lg:pb-20 overflow-hidden">
      <div className="main-container">
        <SectionHeader title="Our Solutions" />
        <div className="grid grid-cols-1 gap-5 items-end text-center mt-[36px] mb-[36px] lg:mb-[56px] lg:mt-[44px] md:mb-[48px]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] !leading-tight font-semibold">
            Lorem Ipsum is simply dummy
          </h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <div className="grid grid-cols-1 items-center lg:grid-cols-2 gap-6">
          <SolutionAccordion />
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
