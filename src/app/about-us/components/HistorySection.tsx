import SectionHeader from '@/components/common/SectionHeader';
import HistorySlider from './HistorySlider';

const HistorySection: React.FC = () => {
  return (
    <section className="overflow-hidden bg-[#FFF8EE] py-16 md:py-20 lg:py-[100px]">
      <div className="main-container">
        <div className="flex flex-col gap-8 md:gap-10 lg:gap-14">
          <SectionHeader title="Our History" />
          <div>
            <HistorySlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
