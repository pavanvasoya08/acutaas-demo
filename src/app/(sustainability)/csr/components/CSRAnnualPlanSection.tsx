import SectionHeader from '@/components/common/SectionHeader';
import Button from '@/components/ui/Button';
import Link from 'next/link';

const CSRAnnualPlanSection: React.FC = () => {
  const bullets = [
    'CSR Annual Action Plan 2021-22',
    'CSR Annual Action Plan 2022-23',
    'CSR Annual Action Plan 2023-24',
    'CSR Annual Action Plan 2024-25',
  ];

  return (
    <section className="overflow-hidden py-16 lg:py-20">
      <div className="main-container">
        <div className="flex flex-col gap-8 md:gap-10 lg:gap-14">
          <SectionHeader title="CSR Annual Plan" />
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col items-center gap-5 lg:items-start lg:gap-16 max-w-[525px] 3xl:max-w-[660px]">
              <div className="flex flex-col gap-5 text-center md:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] 3xl:text-[50px] font-semibold !leading-[1.2]">
                  Yearly Roadmap for Impact
                </h2>
                <p className="text-[#8F7C79]">
                  Each year we define clear CSR priorities, allocate resources, and outline
                  measurable actions that address community needs while aligning with our commitment
                  to sustainable and inclusive growth.
                </p>
              </div>
              <Link href="/about-us">
                <Button>Explore Our Journey</Button>
              </Link>
            </div>
            <div className="rounded-2xl border border-[#BCB2B2] bg-[#FFF2EF] p-6 shadow-sm md:p-8 lg:p-10">
              <h3 className="mb-4 text-2xl font-semibold text-[#231F20] md:mb-6 md:text-3xl 3xl:text-4xl">
                Annual CSR Plans and Reports
              </h3>
              <ul className="flex list-none flex-col gap-4">
                {bullets.map((item) => (
                  <li
                    key={item}
                    className="group flex items-start gap-3 text-[#8F7C79] hover:text-[#B03B23] transition-all duration-300"
                  >
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 3xl:w-7 3xl:h-7 fill-[#8F7C79] group-hover:fill-[#B03B23] transition-all duration-300"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 0L14.885 9.115L24 12L14.885 14.885L12 24L9.115 14.885L0 12L9.115 9.115L12 0Z" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CSRAnnualPlanSection;
