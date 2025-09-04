import SectionHeader from '@/components/common/SectionHeader';

const TechnologySection: React.FC = () => {
  return (
    <section className="overflow-hidden py-12 md:py-16 lg:py-20">
      <div className="main-container">
        <div className="flex flex-col gap-8 md:gap-10 lg:gap-14">
          <SectionHeader title="Where Change Begins" />

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="overflow-hidden rounded-2xl">
                <img src="/images/research-center-image.png" alt="Technology and infrastructure" />
              </div>
            </div>
            <div className="flex flex-col gap-4 md:gap-5">
              <h3 className="text-3xl font-semibold md:text-3xl lg:text-4xl text-[#231F20]">
                Our R&D delivers progress that empowers partners, strengthens markets, and creates a
                lasting positive impact for industries and communities worldwide.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
