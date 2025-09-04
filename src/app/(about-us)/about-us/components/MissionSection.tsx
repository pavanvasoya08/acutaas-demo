import SectionHeader from '@/components/common/SectionHeader';

const MissionSection: React.FC = () => {
  return (
    <section className="overflow-hidden py-10 md:py-16 lg:py-20">
      <div className="main-container">
        <div className="flex flex-col gap-8 md:gap-10 lg:gap-14">
          <SectionHeader title="Our Mission" />
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] !leading-tight font-semibold text-[#231F20]">
            At Acutaas, we aspire to be a globally integrated pharmaceutical intermediates and
            specialty chemicals company, driven by three key pillars — sustainable innovation,
            uncompromised quality, and pioneering technology.
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
