import SectionHeader from '@/components/common/SectionHeader';

const MissionSection: React.FC = () => {
  return (
    <section className="overflow-hidden py-10 md:py-16 lg:py-20">
      <div className="main-container">
        <div className="flex flex-col gap-8 md:gap-10 lg:gap-14">
          <SectionHeader title="Our Mission" />
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] !leading-tight font-semibold">
            We are on a mission to build a globally connected intermediate enterprise where
            innovation drives discovery, technology accelerates progress, and quality remains the
            foundation of every molecule, process and partnership we deliver.
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
