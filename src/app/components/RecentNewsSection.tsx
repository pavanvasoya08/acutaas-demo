import ArrowIcon from '@/components/common/ArrowIcon';
import SectionHeader from '@/components/common/SectionHeader';
import RecentNewsSlider from './RecentNewsSlider';

const RecentNewsSection: React.FC = () => {
  return (
    <section className="bg-[#FFF8EE] py-10 md:py-16 lg:py-20 overflow-hidden">
      <div className="main-container">
        <div className="flex flex-col gap-8 md:gap-10 lg:gap-14">
          <SectionHeader title="Recent News & Achievements" />
          <div className="flex items-center gap-5 flex-col justify-between md:flex-row md:items-end">
            <div className="flex flex-col gap-5 text-center md:text-left max-w-[792px]">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold leading-snug">
                Simply Dummy Text
              </h2>
              <p className="text-[#453A3D]">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled.
              </p>
            </div>
            <div className="text-[#B03B23] flex items-center font-extrabold whitespace-nowrap text-base gap-2 lg:text-xl lg:gap-4">
              Learn More
              <ArrowIcon fill="#B03B23" className="w-7 h-7 lg:w-[34px] lg:h-[34px]" />
            </div>
          </div>
          <div>
            <RecentNewsSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentNewsSection;
