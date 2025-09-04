import SectionHeader from '@/components/common/SectionHeader';
import { FlatIcon } from '@/components/Flaticon';

interface ServiceItem {
  icon: string;
  type: string;
  title: string;
  description: string;
}

const ManufacturingIntroSection: React.FC = () => {
  const services: ServiceItem[] = [
    {
      icon: 'flask',
      type: 'regular',
      title: 'Global Presence',
      description:
        'Serving 55 countries through deep strategic partnerships built on trust, performance and delivery.',
    },
    {
      icon: 'bio-leaves',
      type: 'regular',
      title: 'Operational Agility',
      description:
        'Serving a strong blend of innovators and generics powered by agile CDMO & CMO delivery models.',
    },
  ];

  return (
    <section className=" pt-20 pb-10 sm:pb-20 lg:pb-[100px] overflow-hidden bg-[#FFF8EE]">
      <div className="main-container">
        <div className="flex flex-col gap-8 sm:gap-12 lg:gap-14">
          <SectionHeader title="Intro  Of  Manufacturing" />
          <p className="text-2xl sm:text-3xl lg:text-[32px] !leading-[1.375] font-medium text-[#231f20] max-w-[1030px]">
            From our origins in 2004 to becoming ACUTAAS, we have grown into a globally trusted
            chemical enterprise shaped by research, driven by technology, and committed to
            delivering value across industries through science and precision.
          </p>
          <div className="grid grid-cols-2 gap-6 items-center sm:grid-cols-2 md:grid-cols-3">
            {services?.map((service, index) => (
              <div key={index} className='h-full'>
                <div className="bg-[#F99D1C] p-3 sm:p-4 rounded-full inline-block">
                  <FlatIcon icon={service.icon} type={service.type} />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#231F20] mt-2 mb-4 lg:mb-8 lg:mt-4">
                  {service.title}
                </h3>
                <p className="text-[#453A3D] sm:max-w-[250px]">{service.description}</p>
              </div>
            ))}
            <div className="rounded-2xl overflow-hidden col-span-2 sm:col-span-1">
              <img src="/images/manu_intro-image.png" alt="About Us" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingIntroSection;
