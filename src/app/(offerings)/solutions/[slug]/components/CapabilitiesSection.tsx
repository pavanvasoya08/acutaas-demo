import SectionHeader from '@/components/common/SectionHeader';
import SectionIntro from '@/components/common/SectionIntro';
import { FlatIcon } from '@/components/Flaticon';
import { title } from 'process';

const CapabilitiesSection: React.FC = () => {
  interface ServiceCardProps {
    title: string;
    description: string;
    icon: string;
  }

  const CapabilitiesData: ServiceCardProps[] = [
    {
      title: 'Lorem Ipsum',
      description:
        "text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      icon: 'flask',
    },
    {
      title: 'Lorem Ipsum',
      description:
        "text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      icon: 'bio-leaves',
    },
    {
      title: 'Lorem Ipsum',
      description:
        "text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      icon: 'flask',
    },
    {
      title: 'Lorem Ipsum',
      description:
        "text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      icon: 'bio-leaves',
    },
    {
      title: 'Lorem Ipsum',
      description:
        "text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      icon: 'flask',
    },
    {
      title: 'Lorem Ipsum',
      description:
        "text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      icon: 'bio-leaves',
    },
    {
      title: 'Lorem Ipsum',
      description:
        "text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      icon: 'flask',
    },
    {
      title: 'Lorem Ipsum',
      description:
        "text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      icon: 'bio-leaves',
    },
    {
      title: 'Lorem Ipsum',
      description:
        "text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      icon: 'flask',
    },
    {
      title: 'Lorem Ipsum',
      description:
        "text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      icon: 'bio-leaves',
    },
    {
      title: 'Lorem Ipsum',
      description:
        "text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      icon: 'flask',
    },
    {
      title: 'Lorem Ipsum',
      description:
        "text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      icon: 'bio-leaves',
    },
    {
      title: 'Lorem Ipsum',
      description:
        "text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      icon: 'flask',
    },
    {
      title: 'Lorem Ipsum',
      description:
        "text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      icon: 'bio-leaves',
    },
    {
      title: 'Lorem Ipsum',
      description:
        "text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      icon: 'flask',
    },
    {
      title: 'Lorem Ipsum',
      description:
        "text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      icon: 'bio-leaves',
    },
  ];

  const ServiceCard = CapabilitiesData.map((card, index) => (
    <div
      key={index}
      className="overflow-hidden group p-6 md:p-7 bg-white rounded-2xl border border-[#BCB2B2] relative z-10 transition-all"
    >
      <h3 className="section-subtitle">{card.title}</h3>
      <p className="text-[#8F7C79] text-sm mt-3 mb-6 sm:mb-10 md:text-base 3xl:text-xl">
        {card.description}
      </p>
      <FlatIcon icon={card.icon} className="text-[#B03B23] !text-2xl 3xl:!text-3xl" />
      <div className="hidden sm:block bg-[#FFF2EF] absolute bottom-0 left-0 w-full h-full origin-bottom-left rounded-2xl scale-0 group-hover:scale-100 transition-all duration-300 ease-in-out z-[-1]"></div>
    </div>
  ));

  return (
    <>
      <section className="py-16 lg:py-20 overflow-hidden">
        <div className="main-container">
          <div className="flex flex-col gap-8 md:gap-10 lg:gap-14">
            <SectionHeader title="Capabilities" />
            <SectionIntro
              title="Flow chemistry capabilities"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
            <div className="grid grid-cols-4 gap-6">{ServiceCard}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CapabilitiesSection;
