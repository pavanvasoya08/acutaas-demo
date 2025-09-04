import SectionHeader from '@/components/common/SectionHeader';
import SectionIntro from '@/components/common/SectionIntro';
import { FlatIcon } from '@/components/Flaticon';

const CSRMissionSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-20 overflow-hidden">
      <div className="main-container">
        <div className="flex flex-col gap-8 md:gap-10 lg:gap-14">
          <SectionHeader title="CSR Mission & Vision" />
          <SectionIntro
            title="Building Stronger Communities Together"
            description="We approach CSR with a focus on collaboration, measurable progress, and sustainable practices, ensuring every initiative delivers tangible benefits for people and the environment."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 3xl:gap-16">
            <div className="border border-[#BCB2B2] rounded-2xl bg-white transition-all p-5 duration-300 sm:hover:bg-[#FFF2EF] lg:p-7">
              <FlatIcon icon="flask" className="text-[#B03B23]" />
              <div className="flex flex-col gap-2 mt-8 lg:gap-3 lg:mt-10">
                <h3 className="section-subtitle">Mission</h3>
                <p className="text-[#8F7C79]">
                  To implement programs that improve learning, advance healthcare, and create
                  lasting economic opportunities.
                </p>
              </div>
            </div>
            <div className="border border-[#BCB2B2] rounded-2xl bg-white transition-all p-5 duration-300 sm:hover:bg-[#FFF2EF] lg:p-7">
              <FlatIcon icon="flask" className="text-[#B03B23]" />
              <div className="flex flex-col gap-2 mt-8 lg:gap-3 lg:mt-10">
                <h3 className="section-subtitle">Vision</h3>
                <p className="text-[#8F7C79]">
                  To see communities thrive with equal access to education, health, and sustainable
                  livelihoods for generations ahead.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CSRMissionSection;
