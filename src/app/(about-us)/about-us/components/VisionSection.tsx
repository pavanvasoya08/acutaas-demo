import SectionHeader from '@/components/common/SectionHeader';

const VisionSection: React.FC = () => {
  return (
    <section className="overflow-hidden pt-10 pb-10 md:pb-16 lg:pb-20">
      <div className="main-container">
        <div className="flex flex-col gap-8 md:gap-10 lg:gap-14">
          <SectionHeader title="Our Vision" />
          <div className="flex items-center gap-6 flex-wrap justify-center lg:flex-nowrap lg:justify-between">
            <div className="hidden lg:block max-w-[528px] rounded-2xl overflow-hidden">
              <img src="/images/our-vision-image.webp" alt="Our Vision" />
            </div>
            <div className="max-w-[588px]">
              <div className="flex flex-col gap-4 text-center lg:gap-6 lg:w-[86%] lg:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] !leading-tight font-semibold">
                  Shaping the Future Through Science
                </h2>
                <p>
                  Our vision is to be the beacon of innovation and sustainability in the
                  pharmaceutical and specialty chemical industry. We aspire to lead with
                  groundbreaking solutions that empower industries, enhance lives, and drive
                  sustainable progress globally.
                </p>
                <p>
                  We aim to be recognized as a trusted partner, stay globally relevant, and deliver
                  excellence through innovative chemistry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
