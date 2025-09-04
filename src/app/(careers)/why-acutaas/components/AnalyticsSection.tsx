import SectionHeader from '@/components/common/SectionHeader';
import { FlatIcon } from '@/components/Flaticon';
import analyticPeopleData from '@/lib/data/analyticPeopleData.json';

export interface AnalyticsCardProps {
  // title: string;
  description: string;
  image: string;
  author: string;
  role: string;
}

const AnalyticsCard: React.FC<AnalyticsCardProps> = ({ description, image, author, role }) => {
  return (
    <div className="overflow-hidden h-full flex flex-col justify-between gap-6 md:gap-8 lag:gap-10 group p-6 md:p-7 rounded-2xl border border-[#8F7C79] relative z-10 transition-all">
      <p className="text-[#8F7C79] text-sm md:text-base">{description}</p>
      <div className="flex gap-4 items-center">
        <div className="border border-[#BCB2B2] rounded-3xl overflow-hidden">
          <img src="/images/user-image-1.png" alt="life-mobile" />
        </div>
        <div>
          <h2 className="text-[#231F20] text-lg font-semibold">{author}</h2>
          <p className="text-[#8F7C79] text-sm ">{role}</p>
        </div>
      </div>
    </div>
  );
};

const AnalyticsSection: React.FC = () => {
  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 overflow-hidden bg-[#FFF8EE] flex flex-col gap-14">
      <div className="main-container">
        <div className="flex flex-col gap-10 md:gap-14">
          <SectionHeader title="Analytical capabilities" />
          <div className="flex justify-center gap-5 text-center">
            <h2 className="lg:w-2/3 text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold leading-snug">
              Lorem Ipsum is simply dummy text of the printing
            </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div className="overflow-hidden relative">
          <div className="track animate-scroll-left gap-6">
            {analyticPeopleData.concat(analyticPeopleData).map((item, index) => (
              <div key={index} className="max-w-[380px] flex-shrink-0">
                <AnalyticsCard
                  description={item.description}
                  image={item.image}
                  author={item.author}
                  role={item.role}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-hidden relative">
          <div className="track animate-scroll-right gap-6">
            {analyticPeopleData.concat(analyticPeopleData).map((item, index) => (
              <div key={`right-${index}`} className="max-w-[380px] flex-shrink-0">
                <AnalyticsCard
                  description={item.description}
                  image={item.image}
                  author={item.author}
                  role={item.role}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
