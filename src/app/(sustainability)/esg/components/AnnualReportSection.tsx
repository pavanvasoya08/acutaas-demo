import SectionHeader from '@/components/common/SectionHeader';
import Button from '@/components/ui/Button';

const AnnualReportSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-20 overflow-hidden">
      <div className="main-container">
        <div className="flex flex-col gap-8 md:gap-10 lg:gap-14">
          <SectionHeader title="Annual Sustainability report" />
          <div className="flex flex-col gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="text-center max-w-[1080px] 3xl:max-w-[1350px] mx-auto flex flex-col gap-5">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] 3xl:text-[50px] font-semibold !leading-[1.2]">
                Lorem Ipsum is simply dummy text
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.
              </p>
            </div>
            <Button>Button Text</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnnualReportSection;
