import SectionHeader from '@/components/common/SectionHeader';
import SectionIntro from '@/components/common/SectionIntro';
import CoreValueSlider from './CoreValueSlider';

const CoreValueSection: React.FC = () => {
  return (
    <section className="overflow-hidden bg-[#FFF8EE] py-10 md:py-16 lg:py-20">
      <div className="main-container">
        <div className="flex flex-col gap-8 md:gap-10 lg:gap-14">
          <SectionHeader title="Our Core Value" />
          <SectionIntro
            title="Principles That Shape Our Journey"
            description="Our values are more than words! They are the principles that shape our journey. They guide how we innovate, collaborate, and grow with our customers, people, and communities. We are firmly committed to creating sustainable impact today while building a better tomorrow."
          />
          <div>
            <CoreValueSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValueSection;
