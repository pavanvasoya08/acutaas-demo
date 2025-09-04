import SectionHeader from '@/components/common/SectionHeader';
import BoardOfDirectorsSlider from './BoardOfDirectorsSlider';

const BoardOfDirectorsSection: React.FC = () => {
  return (
    <section className="bg-[#FFF8EE] pt-16 lg:pt-20 overflow-hidden">
      <div className="main-container">
        <SectionHeader title="Board Of Directors" />
      </div>
      <BoardOfDirectorsSlider />
    </section>
  );
};

export default BoardOfDirectorsSection;
