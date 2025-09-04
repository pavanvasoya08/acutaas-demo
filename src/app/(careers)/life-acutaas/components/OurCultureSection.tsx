'use client';

import SectionHeader from '@/components/common/SectionHeader';
import Image from 'next/image';

const OurCultureSection: React.FC = () => {
  return (
    <section className="py-12 md:py-20  overflow-hidden">
      <div className="main-container">
        <div className="flex flex-col gap-8 md:gap-10 lg:gap-14">
          <SectionHeader title="Our Culture" />
          <div className="flex flex-col gap-4 lg:gap-6 items-center max-w-[588px] 3xl:max-w-[720px] mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] 3xl:text-[50px] font-semibold !leading-[1.2]">
              There are many variations of passages of Lorem Ipsum
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col gap-6">
              <div className="border border-[#BCB2B2] rounded-2xl bg-[#FFF2EF] p-6 flex flex-col gap-6">
                <p className="text-[#8F7C79]">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text
                </p>
                <div className="leading-[1.25]">
                  <p className="text-[32px] 3xl:text-5xl text-[#231F20] font-bold ">
                    150<span className="text-[#B03B23]">+</span>
                  </p>
                  <h3 className="text-2xl 3xl:text-3xl font-semibold text-[#B03B23]">
                    Simply Dummy Text
                  </h3>
                </div>
              </div>
              <div className="h-full rounded-2xl overflow-hidden">
                <img src="/images/culture-image-2.png" className="h-full" alt="lab" />
              </div>
            </div>

            <div className="relative w-full rounded-2xl border border-[#BCB2B2] overflow-hidden">
              <img src="/images/culture-image-1.png" alt="lab" />
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_40%,rgba(0,0,0,0)_42%,rgba(0,0,0,1)_100%)]"></div>
              <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                <div className="leading-[1.25]">
                  <p className="text-[32px] 3xl:text-5xl text-white font-bold">
                    150<span className="text-[#BCB2B2]">+</span>
                  </p>
                  <h3 className="text-2xl 3xl:text-3xl font-semibold text-[#BCB2B2]">
                    Simply Dummy Text
                  </h3>
                </div>
                <p className="mt-2 text-[#BCB2B2]">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="h-full rounded-2xl overflow-hidden">
                <img src="/images/culture-image-3.png" className="h-full" alt="lab" />
              </div>
              <div className="border border-[#BCB2B2] rounded-2xl bg-[#FFF2EF] p-6 flex flex-col gap-6">
                <p className="text-[#8F7C79]">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text
                </p>
                <div className="leading-[1.25]">
                  <p className="text-[32px] 3xl:text-5xl text-[#231F20] font-bold ">
                    150<span className="text-[#B03B23]">+</span>
                  </p>
                  <h3 className="text-2xl 3xl:text-3xl font-semibold text-[#B03B23]">
                    Simply Dummy Text
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCultureSection;
