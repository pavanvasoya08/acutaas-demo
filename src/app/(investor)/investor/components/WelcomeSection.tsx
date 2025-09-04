import SectionHeader from '@/components/common/SectionHeader';
import { FlatIcon } from '@/components/Flaticon';
import statistics from '@/lib/data/statistics.json';

const WelcomeSection: React.FC = () => {
  return (
    <>
      <section className="py-16 lg:py-20 overflow-hidden">
        <div className="main-container">
          <div className="flex flex-col gap-14">
            <SectionHeader title="Welcome message" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-14 items-center">
              <div className="rounded-2xl overflow-hidden">
                <img src="/images/welcome-message-image.png" alt="" />
              </div>
              <div className="lg:col-span-2 flex flex-col justify-between gap-8 self-stretch">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] 3xl:text-[44px] font-medium !leading-snug">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley.
                </h2>
                <div className="grid justify-center grid-cols-2 gap-y-4 gap-x-3 sm:gap-y-6 sm:gap-x-4 lg:justify-between lg:flex lg:flex-wrap">
                  {statistics?.InvestorStatistics?.map((statistic, index) => (
                    <div key={index} className="flex items-center gap-4 sm:gap-5 lg:min-w-max">
                      <div className="bg-[#ffeae6] w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 3xl:w-20 3xl:h-20 rounded-lg lg:rounded-xl flex-none flex items-center justify-center">
                        <FlatIcon
                          icon={statistic.icon}
                          type={statistic.type}
                          className="text-[#B03B23] !text-xl !leading-tight sm:!text-2xl lg:!text-[32px] 3xl:!text-4xl"
                        />
                      </div>
                      <div className="flex flex-col">
                        <div className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] lg:leading-tight 3xl:text-5xl font-bold text-[#231f20]">
                          <span>{statistic.value}</span>
                          <span className="text-[#b03a23]">
                            {statistic?.unit &&
                              (statistic.unit === '+' ? statistic.unit : ` ${statistic.unit}`)}
                          </span>
                        </div>
                        <span className="text-xs sm:text-sm 3xl:text-base font-semibold text-[#8f7c79]">
                          {statistic.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WelcomeSection;
