import SectionHeader from '@/components/common/SectionHeader';
import { FlatIcon } from '@/components/Flaticon';

const ProductInquirySection: React.FC = () => {
  return (
    <section className="bg-[#FFF8EE] py-16 lg:py-20 overflow-hidden">
      <div className="main-container">
        <div className="flex flex-col gap-12 md:gap-16 lg:gap-20">
          <SectionHeader title="Product Inquiry & Support" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="rounded-2xl overflow-hidden">
              <img src="/images/product-inquiry-image.png" alt="Product Inquiry & Support" />
            </div>
            <div className="flex flex-col gap-10 lg:gap-14">
              <div className="flex flex-col gap-5">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold leading-snug">
                  Speak to Our Product Experts
                </h2>
                <p className="text-base mx-auto lg:mx-0">
                  For product specifications, technical queries or custom requirements, our team
                  ensures precise support aligned to your business objectives.
                </p>
              </div>
              <div className="flex flex-wrap justify-between sm:grid sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-3 md:gap-5">
                  <div className="flex flex-col gap-2 items-start">
                    <div className="p-4 rounded-full flex items-center justify-center bg-[#F99D1C]">
                      <FlatIcon icon="phone-call" className="!text-xl !leading-none" />
                    </div>
                    <p className="text-lg !leading-[1.22] font-semibold">Phone</p>
                  </div>
                  <div>
                    <a href="tel:+917573015366" className="block text-[#453A3D] !leading-loose">
                      +91 75730 15366
                    </a>
                    <a href="tel:+917227977744" className="block text-[#453A3D] !leading-loose">
                      +91 72279 77744
                    </a>
                  </div>
                </div>
                <div className="flex flex-col gap-3 md:gap-5">
                  <div className="flex flex-col gap-2 items-start">
                    <div className="p-4 rounded-full flex items-center justify-center bg-[#F99D1C]">
                      <FlatIcon icon="envelope" className="!text-xl !leading-none" />
                    </div>
                    <p className="text-lg !leading-[1.22] font-semibold">Mail</p>
                  </div>
                  <div>
                    <a
                      href="mailto:gaurav@acutaas.com"
                      className="block text-[#453A3D] !leading-loose"
                    >
                      gaurav@acutaas.com
                    </a>
                    <a
                      href="mailto:kunjal.sakariya@acutaas.com"
                      className="block text-[#453A3D] !leading-loose"
                    >
                      kunjal.sakariya@acutaas.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInquirySection;
