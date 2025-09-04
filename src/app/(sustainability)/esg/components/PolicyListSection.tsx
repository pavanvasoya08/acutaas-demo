import SectionHeader from '@/components/common/SectionHeader';
import Button from '@/components/ui/Button';
import Link from 'next/link';

const PolicyListSection: React.FC = () => {
  const bullets = [
    'Lorem Ipsum is simply dummy text',
    'Lorem Ipsum is simply dummy text',
    'Lorem Ipsum is simply dummy text',
    'Lorem Ipsum is simply dummy text',
    'Lorem Ipsum is simply dummy text',
    'Lorem Ipsum is simply dummy text',
  ];

  return (
    <section className="overflow-hidden py-16 lg:py-20 bg-[#FFF8EE]">
      <div className="main-container">
        <div className="flex flex-col gap-8 md:gap-10 lg:gap-14">
          <SectionHeader title="Policy listings" />
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col items-center gap-5 lg:items-start lg:gap-16">
              <div className="flex flex-col gap-5 text-center md:text-left max-w-[525px] 3xl:max-w-[660px]">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] 3xl:text-[50px] font-semibold !leading-[1.2]">
                  Lorem Ipsum is simply dummy text
                </h2>
                <p className="text-[#8F7C79]">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled.
                </p>
              </div>
              <Link href="/contact-us">
                <Button>Contact Us</Button>
              </Link>
            </div>
            <div className="rounded-2xl border border-[#BCB2B2] bg-white p-6 shadow-sm md:p-8 lg:p-10">
              <h3 className="mb-4 text-2xl font-semibold text-[#231F20] md:mb-6 md:text-3xl 3xl:text-4xl">
                Annual CSR Plans and Reports
              </h3>
              <ul className="flex list-none flex-col gap-4">
                {bullets.map((item, index) => (
                  <li
                    key={index}
                    className="group flex items-center gap-3 text-[#8F7C79] hover:text-[#F99D1C] transition-all duration-300"
                  >
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 3xl:w-7 3xl:h-7 fill-[#8F7C79] group-hover:fill-[#F99D1C] transition-all duration-300"
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

export default PolicyListSection;
