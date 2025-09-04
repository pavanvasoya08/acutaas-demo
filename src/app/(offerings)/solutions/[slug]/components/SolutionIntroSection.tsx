import SectionHeader from '@/components/common/SectionHeader';

const SolutionIntroSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-20 bg-[#FFF8EE] overflow-hidden">
      <div className="main-container">
        <div className="flex flex-col gap-14">
          <SectionHeader title="CDMO services Intro" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-16 lg:gap-20 items-center">
            <div className="rounded-2xl overflow-hidden">
              <img src="/images/solution-intro-image.png" alt="service-intro-image" />
            </div>
            <div className="flex flex-col gap-8 md:gap-10 lg:gap-14">
              <div className="flex flex-col gap-6 text-center md:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] 3xl:text-[50px] font-semibold !leading-[1.2]">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </h2>
                <p className="max-w-[461px] 3xl:max-w-[570px] mx-auto lg:mx-0">
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                  an unknown printer took a galley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries, but also the leap into electronic
                  typesetting
                </p>
                <div className="border-b border-[#BCB2B2]"></div>
              </div>
              <p className="text-center md:text-left">
                when an unknown printer took a galley of type and scrambled it to make a type
                specimen book. Lorem Ipsum has been the industry's standard dummy text ever since
                the 1500s,
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionIntroSection;
