'use client';

import SectionHeader from '@/components/common/SectionHeader';
import Button from '@/components/ui/Button';

const LifeAcutaasSection: React.FC = () => {
  return (
    <section className="py-12 md:py-20 overflow-hidden bg-[#FFF8EE]">
      <div className="main-container">
        <div className="flex flex-col gap-8 md:gap-10 lg:gap-14">
          <SectionHeader title="Life at ACUTAAS" />
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-2.5 justify-between lg:grid sm:grid md:hidden">
              <div className="flex flex-col gap-2.5 lg:pt-24 sm:pt-0">
                <div className="rounded-xl overflow-hidden">
                  <img src="/images/acutaas-lab-image-1.png" alt="life-mobile" />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <img src="/images/acutaas-lab-image-3.png" alt="life-mobile" />
                </div>
              </div>
              <div className="flex flex-col gap-2.5">
                <div className="rounded-xl overflow-hidden">
                  <img src="/images/acutaas-lab-image-3.png" alt="life-mobile" />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <img src="/images/acutaas-lab-image-2.png" alt="life-mobile" />
                </div>
              </div>
              <div className="flex flex-col lg:pt-24 sm:pt-0">
                <div className="rounded-xl overflow-hidden">
                  <img src="/images/acutaas-lab-image-1.png" alt="life-mobile" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="rounded-xl overflow-hidden">
                  <img src="/images/acutaas-lab-image-2.png" alt="life-mobile" />
                </div>
              </div>
              <div className="flex flex-col lg:pt-24 sm:pt-0">
                <div className="rounded-xl overflow-hidden">
                  <img src="/images/acutaas-lab-image-3.png" alt="life-mobile" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="rounded-xl overflow-hidden">
                  <img src="/images/acutaas-lab-image-1.png" alt="life-mobile" />
                </div>
              </div>
              <div className="flex flex-col lg:pt-24 sm:pt-0">
                <div className="rounded-xl overflow-hidden">
                  <img src="/images/acutaas-lab-image-3.png" alt="life-mobile" />
                </div>
              </div>
              <div className="flex flex-col gap-2.5 row-span-2">
                <div className="rounded-xl overflow-hidden">
                  <img src="/images/acutaas-lab-image-2.png" alt="life-mobile" />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <img src="/images/acutaas-lab-image-3.png" alt="life-mobile" />
                </div>
              </div>
              <div className="flex flex-col gap-2.5 lg:pt-24 sm:pt-0">
                <div className="rounded-xl overflow-hidden">
                  <img src="/images/acutaas-lab-image-1.png" alt="life-mobile" />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <img src="/images/acutaas-lab-image-2.png" alt="life-mobile" />
                </div>
              </div>
            </div>

            <div className="hidden md:grid lg:hidden sm:hidden grid-cols-5 gap-2.5">
              <div className="flex flex-col gap-2.5">
                <img
                  src="/images/acutaas-lab-image-1.png"
                  alt="life"
                  className="rounded-xl overflow-hidden"
                />
                <img
                  src="/images/acutaas-lab-image-3.png"
                  alt="life"
                  className="rounded-xl overflow-hidden"
                />
                <img
                  src="/images/acutaas-lab-image-2.png"
                  alt="life"
                  className="rounded-xl overflow-hidden"
                />
              </div>
              <div className="flex flex-col gap-2.5 pt-24">
                <img
                  src="/images/acutaas-lab-image-3.png"
                  alt="life"
                  className="rounded-xl overflow-hidden"
                />
                <img
                  src="/images/acutaas-lab-image-2.png"
                  alt="life"
                  className="rounded-xl overflow-hidden"
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <img
                  src="/images/acutaas-lab-image-1.png"
                  alt="life"
                  className="rounded-xl overflow-hidden"
                />
                <img
                  src="/images/acutaas-lab-image-2.png"
                  alt="life"
                  className="rounded-xl overflow-hidden"
                />
                <img
                  src="/images/acutaas-lab-image-3.png"
                  alt="life"
                  className="rounded-xl overflow-hidden"
                />
              </div>
              <div className="flex flex-col gap-2.5 pt-24">
                <img
                  src="/images/acutaas-lab-image-1.png"
                  alt="life"
                  className="rounded-xl overflow-hidden"
                />
                <img
                  src="/images/acutaas-lab-image-3.png"
                  alt="life"
                  className="rounded-xl overflow-hidden"
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <img
                  src="/images/acutaas-lab-image-2.png"
                  alt="life"
                  className="rounded-xl overflow-hidden"
                />
                <img
                  src="/images/acutaas-lab-image-1.png"
                  alt="life"
                  className="rounded-xl overflow-hidden"
                />
                <img
                  src="/images/acutaas-lab-image-3.png"
                  alt="life"
                  className="rounded-xl overflow-hidden"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4 lg:gap-6 items-center max-w-[588px] 3xl:max-w-[720px] mx-auto text-center lg:mt-[-100px] 3xl:mt-[-110px] mt-5 md:mt-[70px]">
              <h2 className="text-xl sm:text-2xl lg:text-4xl 3xl:text-5xl !leading-tight font-semibold">
                There are many variations of passages of Lorem Ipsum
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s.
              </p>
              <div className="mt-4 sm:mt-6">
                <Button variant="primary">Contact Us</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeAcutaasSection;
