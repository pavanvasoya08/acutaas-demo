import ArrowIcon from '@/components/common/ArrowIcon';
import SectionHeader from '@/components/common/SectionHeader';
import SectionIntro from '@/components/common/SectionIntro';
import { FlatIcon } from '@/components/Flaticon';
import jobOpeningData from '@/lib/data/jobOpeningData.json';
import Link from 'next/link';
interface OpeningCardProps {
  role: string;
  address: string;
  slug: string;
}

const OpeningCard: React.FC<OpeningCardProps> = ({ role, address, slug }) => {
  return (
    <Link
      href={`/join-our-team/${slug}`}
      className="flex flex-col gap-12 overflow-hidden group p-6 md:p-7 bg-white rounded-2xl border border-[#BCB2B2] relative z-10 transition-all"
    >
      <div className="flex flex-col gap-4">
        <h3 className="section-subtitle font-semibold">{role}</h3>
        <div className="flex items-start gap-2.5">
          <FlatIcon
            icon="marker"
            type="regular-solid"
            className="text-[#B03B23] !text-xl 3xl:!text-2xl"
          />
          <p className="text-[#8F7C79]">{address}</p>
        </div>
      </div>

      <div className="flex items-center gap-1">
        <h3 className="text-[#B03B23] section-subtitle">View</h3>
        <ArrowIcon className="w-[34px] h-[34px] 3xl:w-10 3xl:h-10" fill="#B03B23" />
      </div>
      <div className="bg-[#FFF2EF] absolute bottom-0 left-0 w-full h-full origin-bottom-left rounded-2xl scale-0 group-hover:scale-100 transition-all duration-300 ease-in-out z-[-1]"></div>
    </Link>
  );
};

const OpeningSection: React.FC = () => {
  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="main-container">
        <div className="flex flex-col gap-10 md:gap-14">
          <SectionHeader title="QC analytical equipment" />
          <SectionIntro
            title="There are many variations of passages of Lorem Ipsum"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {jobOpeningData.map((job, index) => (
              <OpeningCard key={index} role={job.role} address={job.address} slug={job.slug} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpeningSection;
