import ArrowIcon from '@/components/common/ArrowIcon';
import SectionHeader from '@/components/common/SectionHeader';

const ESGCommitmentSection: React.FC = () => {
  return (
    <section className="pt-10 pb-10 md:pb-16 lg:pb-20 bg-[#FFF8EE] overflow-hidden">
      <div className="main-container">
        <div className="flex flex-col gap-8 md:gap-10 lg:gap-14">
          <SectionHeader title="ESG Commitment" />
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 sm:gap-10 md:gap-14 lg:gap-24 3xl:gap-32">
            <div className="rounded-2xl overflow-hidden">
              <img src="/images/esg-commitment-image.png" alt="" />
            </div>
            <div className="flex flex-col gap-8 md:gap-10 lg:gap-14">
              <div className="flex flex-col gap-4 lg:gap-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] 3xl:text-[50px] font-semibold !leading-[1.2]">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </h2>
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                  an unknown printer took a galley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries, but also the leap into electronic
                  typesetting
                </p>
                <div className="border-t border-[#BCB2B2] w-full"></div>
              </div>
              <div className="flex flex-col gap-4 lg:gap-6">
                <p>
                  when an unknown printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <div className="text-[#B03B23] flex items-center font-semibold whitespace-nowrap text-base 3xl:text-xl gap-2">
                  Simply Dummy Text
                  <ArrowIcon fill="#B03B23" className="w-[28px] h-[28px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ESGCommitmentSection;
