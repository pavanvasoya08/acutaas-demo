import SectionHeader from '@/components/common/SectionHeader';
import SectionIntro from '@/components/common/SectionIntro';
import IndustriesSlider from './IndustriesSlider';

const IndustriesSection = () => (
  <section className="py-10 md:py-16 lg:py-20 overflow-hidden">
    <div className="main-container">
      <div className="flex flex-col gap-8 md:gap-12 lg:gap-14">
        <SectionHeader title="Industries We Serve" />
        <SectionIntro
          title="Tailored solutions for diverse industries"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled."
        />
        <div>
          <IndustriesSlider />
        </div>
      </div>
    </div>
  </section>
);

export default IndustriesSection;
