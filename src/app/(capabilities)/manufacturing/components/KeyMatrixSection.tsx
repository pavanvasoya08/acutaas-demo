import SectionHeader from '@/components/common/SectionHeader';
import StatCard from '@/components/common/StatCard';
import SectionIntro from '@/components/common/SectionIntro';
import StatisticsSection from '@/app/components/StatisticsSection';
import statistics from '@/lib/data/statistics.json';
import { FlatIcon } from '@/components/Flaticon';

interface Statistic {
  icon: string;
  type: string;
  value: number;
  unit: string;
  label: string;
}

interface StatisticsSectionProps {
  statistics: Statistic[];
}

const KeyMatrixSection: React.FC = () => {
  return (
    <div className="overflow-hidden py-12 md:py-16 lg:py-20">
      <div className="main-container">
        <div className="flex flex-col gap-8 md:gap-10 lg:gap-14">
          <SectionHeader title="Key matrix" />

          <SectionIntro
            title="There are many variations of passages of Lorem Ipsum"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          />
          <div className="main-container">
            <div className="grid justify-center grid-cols-2 gap-y-4 gap-x-3 sm:gap-y-6 sm:gap-x-4 lg:justify-between lg:flex lg:flex-wrap">
              {statistics.manufacturingStatistics?.map((statistic, index) => (
                <div key={index} className="flex items-center gap-4 sm:gap-5 lg:min-w-max">
                  <div className="bg-[#ffeae6] w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg lg:rounded-xl flex-none flex items-center justify-center">
                    <FlatIcon
                      icon={statistic.icon}
                      type={statistic.type}
                      className="text-[#B03B23] !text-xl !leading-tight sm:!text-2xl lg:!text-[32px]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] lg:leading-tight font-bold text-[#231f20]">
                      <span>{statistic.value}</span>
                      <span className="text-[#b03a23]">
                        {statistic?.unit === '' ? '' : ` ${statistic.unit}`}
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-[#8f7c79]">{statistic.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyMatrixSection;
