import SectionHeader from '@/components/common/SectionHeader';
import { FlatIcon } from '@/components/Flaticon';
import Button from '@/components/ui/Button';
import Link from 'next/link';

const OurCommitmentSection: React.FC = () => {
  return (
    <section className="pt-16 lg:pt-20 pb-5 overflow-hidden">
      <div className="main-container">
        <div className="flex flex-col gap-10 lg:gap-14">
          <SectionHeader title="Our Commitment" />
          <div className="max-w-[992px] 3xl:max-w-[1322px] mx-auto flex flex-col items-center justify-center gap-8 md:gap-12 lg:gap-16">
            <div className="flex flex-col justify-center gap-6 md:gap-8 lg:gap-10">
              <h2 className="text-xl md:text-2xl lg:text-[32px] 3xl:text-[42px] !leading-snug font-medium text-center">
                Our CSR approach is built on responsibility, collaboration, and long-term impact
                that strengthens communities and protects the environment.
              </h2>
              <div className="border-b border-[#BCB2B2]"></div>
              <div className="flex flex-wrap justify-between items-center gap-4 md:gap-6">
                <div className="flex items-center gap-3">
                  <FlatIcon
                    icon="bio-leaves"
                    className="!text-xl lg:!text-2xl 3xl:!text-3xl text-[#B03B23]"
                  />
                  <p>Empower learning for all</p>
                </div>
                <div className="flex items-center gap-3">
                  <FlatIcon
                    icon="flask"
                    className="!text-xl lg:!text-2xl 3xl:!text-3xl text-[#B03B23]"
                  />
                  <p>Advance health and wellness</p>
                </div>
                <div className="flex items-center gap-3">
                  <FlatIcon
                    icon="flask"
                    className="!text-xl lg:!text-2xl 3xl:!text-3xl text-[#B03B23]"
                  />
                  <p>Support rural progress</p>
                </div>
              </div>
            </div>
            <Link href="/contact-us">
              <Button>Discover More</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCommitmentSection;
