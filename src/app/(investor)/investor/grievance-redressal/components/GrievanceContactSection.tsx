import SectionHeader from '@/components/common/SectionHeader';
import { FlatIcon } from '@/components/Flaticon';

const GrievanceContactSection: React.FC = () => {
  return (
    <section className="overflow-hidden py-12 md:py-16 lg:py-20">
      <div className="main-container">
        <div className="flex flex-col gap-8 md:gap-10 lg:gap-14">
          <SectionHeader title="HR Department" />
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col gap-12 md:gap-14">
              <div className="flex flex-col items-center gap-2 md:gap-4 lg:items-start lg:gap-5">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] 3xl:text-[50px] font-semibold !leading-[1.2]">
                  Lorem Ipsum is simply dummy text
                </h2>
                <p className="text-[#8F7C79] mt-3 lg:mb-3 sm:mb-10 text-center md:text-left">
                  Our R&D spaces are built to enable innovation, rigorous experimentation, and
                  scalable development that turn ideas into market-ready solutions.
                </p>
              </div>
              <div className="grid gap-6 sm:gap-8 md:gap-10 lg:gap-12 grid-cols-2">
                <div className="flex flex-col items-start gap-4">
                  <div className="flex h-12 w-12 3xl:w-14 3xl:h-14 shrink-0 items-center justify-center rounded-full bg-[#F99D1C]">
                    <FlatIcon
                      icon={'phone-call'}
                      className="text-[#231F20] leading-none !text-xl 3xl:!text-2xl"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl 3xl:text-[28px] font-semibold text-[#231F20]">
                      Phone
                    </h3>
                    <p className="text-[#453A3D] flex flex-col">
                      <a href="tel:+917573015366">+91 75730 15366</a>
                      <a href="tel:+917227977744">+91 72279 77744</a>
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-4">
                  <div className="flex h-12 w-12 3xl:w-14 3xl:h-14 shrink-0 items-center justify-center rounded-full bg-[#F99D1C]">
                    <FlatIcon
                      icon={'envelope'}
                      className="text-[#231F20] leading-none !text-xl 3xl:!text-2xl"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl 3xl:text-[28px] font-semibold text-[#231F20]">
                      Mail
                    </h3>
                    <p className="text-[#453A3D] flex flex-col">
                      <a href="mailto:career@acutaas.com">career@acutaas.com</a>
                      <a href="mailto:kunjal.sakariya@acutaas.com">kunjal.sakariya@acutaas.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="/images/hr-dep-image.png"
                  alt="Laboratory facility"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrievanceContactSection;
