import SectionHeader from '@/components/common/SectionHeader';
import SectionIntro from '@/components/common/SectionIntro';
import CoreStrengthSlider from './CoreStrengthSlider';

const CoreStrengthSection: React.FC = () => {
  return (
    <section className="overflow-hidden bg-[#FFF8EE] py-10 md:py-16 lg:py-20">
      <div className="main-container">
        <div className="flex flex-col gap-8 md:gap-10 lg:gap-14">
          <SectionHeader title="Core Strength" />
          <SectionIntro
            title="Pillars That Define Our Leadership"
            description="Our leadership team brings together diverse expertise and global experience. Their combined strengths ensure clarity of purpose, resilient growth, and long-term value creation for all stakeholders."
          />
          <div>
            <CoreStrengthSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreStrengthSection;
