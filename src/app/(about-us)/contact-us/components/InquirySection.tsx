import SectionHeader from '@/components/common/SectionHeader';
import { FlatIcon } from '@/components/Flaticon';
import contactDetail from '@/lib/data/contactDetail.json';
import InquiryFrom from './InquiryFrom';

const InquirySection: React.FC = () => {
  return (
    <section className="overflow-hidden py-16 lg:py-20">
      <div className="main-container">
        <div className="flex flex-col gap-8 md:gap-10 lg:gap-14">
          <SectionHeader title="General Inquiry Details" />
          <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-16">
            <div className="flex flex-col gap-8 md:gap-10 lg:gap-14">
              <div className="flex flex-col gap-5">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold leading-snug">
                  We are Ready to Assist
                </h2>
                <p className="text-base mx-auto lg:mx-0">
                  Reach out with your enquiry and our team will ensure it is directed to the right
                  people with clarity, professionalism and a timely response.
                </p>
              </div>
              <div className="flex flex-wrap justify-between sm:grid grid-cols-2 gap-8 md:gap-10 lg:gap-14">
                {contactDetail?.sections?.map((item, index) => (
                  <div className="flex flex-col gap-6 lg:gap-8">
                    <p className="text-lg lg:text-xl !leading-[1.1] font-medium">{item?.title}</p>
                    <div className="flex flex-col gap-4 md:gap-6">
                      {item?.contacts?.map((contact, index) => (
                        <div key={index} className="flex gap-3 md:gap-5 items-start">
                          <div className="flex-none p-3 lg:p-4 rounded-full flex items-center justify-center bg-[#F99D1C]">
                            <FlatIcon
                              icon={contact?.icon}
                              className="!text-lg lg:!text-xl !leading-none"
                            />
                          </div>
                          <div className="flex flex-col gap-2">
                            <p className="text-base md:text-lg !leading-[1.22] font-semibold">
                              {contact?.type}
                            </p>
                            <div>
                              {contact?.items?.map((item, itemIdx) => (
                                <a key={itemIdx} href={item.href} className="block text-[#453A3D]">
                                  {item.label}
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#FFF8EE] p-6 sm:p-8 md:p-10 lg:py-[60px] lg:px-10 flex flex-col gap-8 md:gap-10 lg:gap-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold leading-snug text-center">
                Inquiry Form
              </h2>
              <InquiryFrom />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InquirySection;
