import SectionHeader from '@/components/common/SectionHeader';
import { FlatIcon } from '@/components/Flaticon';
import Button from '@/components/ui/Button';
import Link from 'next/link';

const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="pt-10 pb-10 md:pb-16 lg:pb-20 overflow-hidden">
      <div className="main-container">
        <div className="flex flex-col gap-14">
          <SectionHeader title="Why Us?" />
          <div className="flex flex-wrap items-center justify-between gap-8 sm:gap-10 lg:flex-nowrap lg:gap-14">
            <div className="rounded-2xl overflow-hidden max-w-[528px] 2xl: xl:w-[50%] xl:max-w-full mx-auto lg:mx-0">
              <img src="/images/why-choose-us-image.png" alt="why choose us image" />
            </div>
            <div className="max-w-[588px] mx-auto lg:mx-0">
              <div className="flex flex-col gap-5 lg:w-[77%]">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold leading-snug">
                  Built to Lead in Every Category
                </h2>
                <p className="text-base mx-auto lg:mx-0">
                  We bring together advanced science purpose-built systems, and proven experience to
                  serve the new age industries with precision, trust, and forward thinking.
                </p>
              </div>
              <div className="border-t border-[#BCB2B2] w-full my-8 lg:my-10"></div>
              <div>
                <p className="section-subtitle">What Sets Our Foundation Apart</p>
                <div className="grid md:grid-cols-2 gap-y-4 gap-x-4 md:gap-x-6 mt-7">
                  <div className="flex gap-3 items-center">
                    <FlatIcon
                      icon="comment-check"
                      type="solid"
                      className="text-[#B03B23] !text-sm md:!text-base"
                    />
                    <p>Advanced Flow Chemistry</p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <FlatIcon
                      icon="comment-check"
                      type="solid"
                      className="text-[#B03B23] !text-sm md:!text-base"
                    />
                    <p>Proven CDMO Capabilities</p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <FlatIcon
                      icon="comment-check"
                      type="solid"
                      className="text-[#B03B23] !text-sm md:!text-base"
                    />
                    <p>Globally Trusted Certifications</p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <FlatIcon
                      icon="comment-check"
                      type="solid"
                      className="text-[#B03B23] !text-sm md:!text-base"
                    />
                    <p>Scalable Research Ecosystem</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 md:mt-12 lg:mt-16 flex items-center gap-6 md:gap-8 lg:gap-10 flex-wrap">
                <Link href="/contact-us">
                  <Button>Learn More</Button>
                </Link>
                <Link href="/research-and-development">
                  <Button variant="outline">Explore Our Capabilities</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
