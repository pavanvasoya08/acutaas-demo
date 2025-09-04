import SectionHeader from '@/components/common/SectionHeader';

const PharmaIntermediateSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-20 bg-[#FFF8EE] overflow-hidden">
      <div className="main-container">
        <div className="flex flex-col gap-14">
          <SectionHeader title="Intro Pharma intermediates" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-16 lg:gap-20 items-center">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/images/intro-pharma-intermediates-image.png"
                alt="intro-pharma-intermediates-image"
              />
            </div>
            <div className="flex flex-col gap-6 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] 3xl:text-[50px] font-semibold !leading-[1.2]">
                Lorem Ipsum is simply dummy text
              </h2>
              <p className="max-w-[461px] 3xl:max-w-[580px] mx-auto lg:mx-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled.
              </p>
              <p className="max-w-[461px] 3xl:max-w-[580px] mx-auto lg:mx-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PharmaIntermediateSection;
