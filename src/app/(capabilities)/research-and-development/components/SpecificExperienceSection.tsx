import SectionHeader from '@/components/common/SectionHeader';
import SectionSideIntro from '@/components/common/SectionSideIntro';
import { Sparkle } from 'lucide-react';

const Bullet: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-5 w-5 text-[#E2A78F]"
    aria-hidden
  >
    <path d="M12 2l2.39 4.84L20 8.27l-4 3.9.94 5.49L12 15.77 7.06 17.66 8 12.97l-4-3.9 5.61-1.43L12 2z" />
  </svg>
);

const SpecificExperienceSection: React.FC = () => {
  const bullets = [
    'Lorem Ipsum is simply dummy text',
    'The printing and typesetting industry.',
    "Lorem Ipsum has been the industry's standard",
    'Dummy text ever since the 1500s',
    'When an unknown printer took a galley of type',
    'Scrambled it to make a type specimen book. It has survived not only five centuries',
  ];

  return (
    <section className="overflow-hidden py-12 md:py-16 lg:py-20">
      <div className="main-container">
        <div className="flex flex-col gap-8 md:gap-10 lg:gap-14">
          <SectionHeader title="Specific Experience" />
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">
            <SectionSideIntro
              title="Lorem Ipsum is simply dummy text"
              description=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled."
              buttonLabel="Contact Us"
              buttonVariant="primary"
            />

            <div className="rounded-2xl border border-[#BCB2B2] bg-[#FFF2EF] p-6 shadow-sm md:p-8 lg:p-10">
              <h3 className="mb-4 text-2xl font-semibold text-[#231F20] md:mb-6 md:text-3xl">
                Simply Dummy Text
              </h3>
              <ul className="flex list-none flex-col gap-4">
                {bullets.map((item) => (
                  <li
                    key={item}
                    className="group flex items-start gap-3 text-[#8F7C79] hover:text-[#B03B23] transition-all duration-300"
                  >
                    <svg
                      className="flex-none w-5 h-5 md:w-6 md:h-6 fill-[#8F7C79] group-hover:fill-[#B03B23] transition-all duration-300"
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

export default SpecificExperienceSection;
