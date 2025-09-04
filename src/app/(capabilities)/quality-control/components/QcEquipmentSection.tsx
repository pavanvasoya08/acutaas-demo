import SectionHeader from '@/components/common/SectionHeader';
import SectionIntro from '@/components/common/SectionIntro';
import { FlatIcon } from '@/components/Flaticon';

interface QccardProps {
  title: string;
  description: string;
  icon: string;
}

const Qccard: React.FC<QccardProps> = ({ title, description, icon }) => {
  return (
    <div className="overflow-hidden group p-6 md:p-7 bg-white rounded-2xl border border-[#BCB2B2] relative z-10 transition-all">
      <FlatIcon icon={icon} className="text-[#B03B23]  mb-6 sm:mb-10" />
      <h3 className="section-subtitle">{title}</h3>
      <p className="text-[#8F7C79] text-sm mt-3 md:text-base">{description}</p>
      <div className="bg-[#FFF2EF] absolute bottom-0 left-0 w-full h-full origin-bottom-left rounded-2xl scale-0 group-hover:scale-100 transition-all duration-300 ease-in-out z-[-1]"></div>
    </div>
  );
};

const QcEquipmentSection: React.FC = () => {
  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="main-container">
        <div className="flex flex-col gap-10 md:gap-14">
          <SectionHeader title="QC analytical equipment" />
          <div className="flex flex-col gap-5 lg:w-2/3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold leading-snug">
              Driven by Execution Expertise
            </h2>
            <p className="text-base mx-auto lg:mx-0">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            <Qccard
              title="CDMO"
              description="Integrated development support from first route selection to market ready manufacturing stages."
              icon="flask"
            />
            <Qccard
              title="CMO"
              description="Commercial scale production with robust tech transfer and industry aligned compliance systems."
              icon="bio-leaves"
            />
            <Qccard
              title="Custom Synthesis"
              description="Complex chemistry programs built from scratch with precision speed and collaborative execution."
              icon="flask"
            />
            <Qccard
              title="Process Development"
              description="Advanced route design and scale up expertise led by deep R and D and full plant readiness."
              icon="bio-leaves"
            />
            <Qccard
              title="CDMO"
              description="Integrated development support from first route selection to market ready manufacturing stages."
              icon="flask"
            />
            <Qccard
              title="CMO"
              description="Commercial scale production with robust tech transfer and industry aligned compliance systems."
              icon="bio-leaves"
            />
            <Qccard
              title="Custom Synthesis"
              description="Complex chemistry programs built from scratch with precision speed and collaborative execution."
              icon="flask"
            />
            <Qccard
              title="Process Development"
              description="Advanced route design and scale up expertise led by deep R and D and full plant readiness."
              icon="bio-leaves"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QcEquipmentSection;
