import SectionHeader from '@/components/common/SectionHeader';
import Button from '@/components/ui/Button';

const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="pt-10 pb-10 md:pb-16 lg:pb-20 overflow-hidden">
      <div className="main-container">
        <div className="flex flex-col gap-14">
          <SectionHeader title="Why Choose Us?" />
          <div className="flex flex-wrap items-center justify-between gap-8 sm:gap-10 lg:flex-nowrap lg:gap-14">
            <div className="rounded-2xl overflow-hidden max-w-[528px] mx-auto lg:mx-0">
              <img src="/images/why-choose-us-image.png" alt="" />
            </div>
            <div className="max-w-[588px] mx-auto lg:mx-0">
              <div className="flex flex-col gap-5 lg:w-[77%]">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold leading-snug">
                  Lorem Ipsum is simply dummy text
                </h2>
                <p className="text-base mx-auto lg:mx-0">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled.
                </p>
              </div>
              <div className="border-t border-[#BCB2B2] w-full my-8 lg:my-10"></div>
              <div>
                <p className="section-subtitle">Lorem Ipsum is simply dummy text?</p>
                <div className="grid md:grid-cols-2 gap-y-4 gap-x-4 md:gap-x-6 mt-7">
                  <div className="flex gap-3 items-start">
                    <img
                      src="/images/why-choose-check-mark.svg"
                      className="w-5 mt-[1px] flex-none"
                      alt=""
                    />
                    <p>Culture of Precision and Agility</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <img
                      src="/images/why-choose-check-mark.svg"
                      className="w-5 mt-[1px] flex-none"
                      alt=""
                    />
                    <p>People Who Build What Lasts</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <img
                      src="/images/why-choose-check-mark.svg"
                      className="w-5 mt-[1px] flex-none"
                      alt=""
                    />
                    <p>Advanced Thinking in Every Lab</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <img
                      src="/images/why-choose-check-mark.svg"
                      className="w-5 mt-[1px] flex-none"
                      alt=""
                    />
                    <p>Scalable Systems for Tomorrow</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 md:mt-12 lg:mt-16 flex items-center gap-6 md:gap-8 lg:gap-10 flex-wrap">
                <Button>Contact Us</Button>
                <Button variant="outline">Button Text</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
