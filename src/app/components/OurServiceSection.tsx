import SectionHeader from '@/components/common/SectionHeader';
import SectionIntro from '@/components/common/SectionIntro';
import { FlatIcon } from '@/components/Flaticon';
import CardHover from '../../components/common/CardHover';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="overflow-hidden group p-6 md:p-7 bg-white rounded-2xl border border-[#BCB2B2] relative z-10 transition-all">
      <h3 className="section-subtitle">{title}</h3>
      <p className="text-[#8F7C79] text-sm mt-3 mb-6 sm:mb-10 md:text-base">{description}</p>
      <FlatIcon icon={icon} className="text-[#B03B23]" />
      {/* <div className="hidden sm:block bg-[#FFF2EF] absolute bottom-0 left-0 w-full h-full origin-bottom-left rounded-2xl scale-0 group-hover:scale-100 transition-all duration-300 ease-in-out z-[-1]"></div> */}
      <CardHover />
    </div>
  );
};

const OurServiceSection: React.FC = () => {
  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="main-container">
        <div className="flex flex-col gap-10 md:gap-14">
          <SectionHeader title="Our Services" />
          <SectionIntro
            title="Driven by Execution Expertise"
            description="We offer structured service models designed to scale complex chemistries with operational agility and unmatched delivery strength."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            <ServiceCard
              title="CDMO"
              description="Integrated development support from first route selection to market ready manufacturing stages."
              icon="flask"
            />
            <ServiceCard
              title="CMO"
              description="Commercial scale production with robust tech transfer and industry aligned compliance systems."
              icon="bio-leaves"
            />
            <ServiceCard
              title="Custom Synthesis"
              description="Complex chemistry programs built from scratch with precision speed and collaborative execution."
              icon="flask"
            />
            <ServiceCard
              title="Process Development"
              description="Advanced route design and scale up expertise led by deep R and D and full plant readiness."
              icon="bio-leaves"
            />
          </div>

          <p className="text-lg sm:text-xl lg:text-[32px] !leading-relaxed font-medium text-[#231f20]">
            We lead projects from the ground up with scientific clarity, technical strength and
            reliable execution from first step to final delivery.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurServiceSection;
