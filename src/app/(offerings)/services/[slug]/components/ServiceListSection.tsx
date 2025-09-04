import SectionHeader from '@/components/common/SectionHeader';

const ServiceListSection: React.FC = () => {
  const bullets = [
    `Lorem Ipsum is simply dummy text`,
    `The printing and typesetting industry.`,
    `Lorem Ipsum has been the industry's standard`,
    `Dummy text ever since the 1500s`,
    `When an unknown printer took a galley of type`,
    `Scrambled it to make a type specimen book. It has survived not only five centuries`,
    `Lorem Ipsum is simply dummy text`,
    `The printing and typesetting industry.`,
    `Lorem Ipsum has been the industry's standard`,
    `Dummy text ever since the 1500s`,
    `When an unknown printer took a galley of type`,
    `Scrambled it to make a type specimen book. It has survived not only five centuries`,
  ];

  const star = (
    <svg
      className="flex-none w-5 h-5 md:w-6 md:h-6 3xl:w-7 3xl:h-7 fill-[#B03B23] transition-all duration-300"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0L14.885 9.115L24 12L14.885 14.885L12 24L9.115 14.885L0 12L9.115 9.115L12 0Z" />
    </svg>
  );
  return (
    <>
      <section className="py-16 lg:py-20 overflow-hidden">
        <div className="main-container">
          <div className="flex flex-col gap-8 md:gap-10 lg:gap-14">
            <SectionHeader title="Services" />
            <div className="flex flex-col gap-4 md:gap-6 text-center max-w-[792px] 3xl:max-w-[1000px] mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] 3xl:text-[50px] font-semibold !leading-[1.2]">
                Simply Dummy Text
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled.
              </p>
            </div>
            <div>
              <div className="rounded-2xl border border-[#BCB2B2] bg-[#FFF2EF] p-6 md:p-8 lg:p-10 flex flex-col gap-6 md:gap-8">
                <h3 className="font-semibold text-[#231F20] text-xl md:text-[28px] 3xl:text-3xl !leading-none">
                  Annual CSR Plans and Reports
                </h3>
                <ul className="flex list-none flex-col gap-3 md:gap-4">
                  {bullets.map((item, index) => (
                    <li
                      key={`annual-${index}`}
                      className="group flex items-center gap-3 text-[#B03B23] transition-all duration-300"
                    >
                      {star}
                      <span className="text-base md:text-lg 3xl:text-xl">{item}</span>
                    </li>
                  ))}
                </ul>
                <h3 className="font-semibold text-[#231F20] text-xl md:text-[28px] 3xl:text-3xl !leading-none">
                  Key Capabilities
                </h3>
                <ul className="flex list-none flex-col gap-3 md:gap-4">
                  {bullets.map((item, index) => (
                    <li
                      key={`key-${index}`}
                      className="group flex items-center gap-3 text-[#B03B23] transition-all duration-300"
                    >
                      {star}
                      <span className="text-base md:text-lg 3xl:text-xl">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceListSection;
