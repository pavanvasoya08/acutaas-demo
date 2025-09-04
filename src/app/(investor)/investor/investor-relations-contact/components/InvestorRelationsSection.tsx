'use client';
import { FlatIcon } from '@/components/Flaticon';
import { useState } from 'react';

const InvestorRelationsContact = [
  {
    title: 'What is Acutaas’ role in global markets?',
    description:
      'Acutaas plays a significant role in advancing innovation across global markets by focusing on sustainability, technology, and customer-driven solutions.',
    members: [
      { name: 'Donnie A. Davis', position: 'Chairman and Non Executive Director' },
      { name: 'Raymond A. Cline', position: 'Vice Chairperson and Managing Director' },
    ],
    phones: ['+91 75730 11111', '+91 75730 11112'],
    emails: ['donnie@acutaas.com', 'raymond@acutaas.com'],
    address: 'Acutaas House, 1st Floor, Corporate Park, Mumbai, India',
  },
  {
    title: 'Who are the key stakeholders in Acutaas?',
    description:
      'Key stakeholders include investors, board members, clients, and employees who are aligned with the company’s long-term strategy.',
    members: [
      { name: 'Sarah M. Brown', position: 'Head of Investor Relations' },
      { name: 'John K. Smith', position: 'Finance Director' },
    ],
    phones: ['+91 75730 22221'],
    emails: ['sarah@acutaas.com'],
    address: 'Acutaas Tower, Financial Hub, Bengaluru, India',
  },
  {
    title: 'How does Acutaas ensure transparency?',
    description:
      'Acutaas ensures transparency through quarterly reports, investor briefings, and real-time updates via digital platforms.',
    members: [
      { name: 'Priya Desai', position: 'Corporate Communications Head' },
      { name: 'Michael Lee', position: 'Chief Compliance Officer' },
    ],
    phones: ['+91 75730 33331', '+91 75730 33332'],
    emails: ['priya@acutaas.com', 'michael@acutaas.com'],
    address: 'Acutaas Corporate Office, Delhi, India',
  },
  {
    title: 'What are the sustainability initiatives of Acutaas?',
    description:
      'The company has launched green initiatives in renewable energy, sustainable packaging, and carbon footprint reduction.',
    members: [{ name: 'Ananya Gupta', position: 'Sustainability Director' }],
    phones: ['+91 75730 44441'],
    emails: ['ananya@acutaas.com'],
    address: 'Acutaas Innovation Hub, Pune, India',
  },
  {
    title: 'How can investors reach Acutaas’ board?',
    description:
      'Investors can connect with the board through the official Investor Relations portal or by contacting the Investor Relations team directly.',
    members: [
      { name: 'Carlos Martinez', position: 'Global Relations Manager' },
      { name: 'Emma Wilson', position: 'Assistant IR Manager' },
    ],
    phones: ['+91 75730 55551'],
    emails: ['carlos@acutaas.com', 'emma@acutaas.com'],
    address: 'Acutaas Global Office, London, UK',
  },
  {
    title: 'What is Acutaas’ financial growth strategy?',
    description:
      'Acutaas focuses on long-term financial stability through diversified investments, digital transformation, and strategic acquisitions.',
    members: [{ name: 'Rohit Sharma', position: 'Chief Financial Officer' }],
    phones: ['+91 75730 66661', '+91 75730 66662'],
    emails: ['rohit@acutaas.com'],
    address: 'Acutaas Finance Wing, Hyderabad, India',
  },
  {
    title: 'Where can shareholders find annual reports?',
    description:
      'Annual reports are published on the company’s website under the ‘Investor Relations’ section and are also distributed to registered shareholders.',
    members: [{ name: 'Sophia Johnson', position: 'Investor Support Specialist' }],
    phones: ['+91 75730 77771'],
    emails: ['sophia@acutaas.com'],
    address: 'Acutaas Shareholder Center, Chennai, India',
  },
];

const InvestorRelationsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="py-10 md:py-16 lg:py-20">
      <div className="main-container">
        <div className="flex flex-col gap-8 md:gap-10 lg:gap-14">
          <div className="flex flex-col gap-4 lg:gap-6 items-center max-w-[758px] 3xl:max-w-[900px] mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] 3xl:text-[50px] font-semibold !leading-[1.2]">
              Investor Relations Contact
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s
            </p>
          </div>
          <div className="flex flex-col gap-6 sm:gap-8 max-w-[792px] 3xl:max-w-[950px] w-full mx-auto">
            {InvestorRelationsContact?.map((contact, index) => (
              <div
                key={index}
                className="border-t border-[#BCB2B2] pt-4 sm:pt-6 first:border-t-0 first:pt-0"
              >
                <div
                  className="flex items-center justify-between gap-6 cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <p
                    className={`text-[#231F20] transition-all duration-500 text-base sm:text-lg 3xl:text-2xl !leading-[1.22] ${activeIndex === index ? 'font-semibold' : 'font-normal'}`}
                  >
                    {contact?.title}
                  </p>
                  <div className="flex-none w-5 h-5 sm:w-6 sm:h-6 border-2 border-[#B03B23] rounded-full flex items-center justify-center relative">
                    <div className="w-2.5 sm:w-3 h-0.5 bg-[#B03B23] rounded-full"></div>
                    <div
                      className={`w-0.5 h-2.5 sm:h-3 bg-[#B03B23] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                        activeIndex === index ? 'rotate-90' : 'rotate-0'
                      }`}
                    ></div>
                  </div>
                </div>
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    activeIndex === index
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pr-8 md:pr-10 lg:pr-12 pt-5">
                      <div className="text-[#8F7C79] mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                        {contact?.description}
                      </div>
                      <div className="flex flex-col gap-5">
                        {contact?.members?.map((member, idx) => (
                          <div key={idx}>
                            <p className="font-semibold text-lg 3xl:text-2xl !leading-[1.22] mb-1">
                              {member?.name}
                            </p>
                            <p className="text-sm 3xl:text-lg text-[#8F7C79]">{member?.position}</p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
                        <div>
                          <div className="inline-block p-3 3xl:p-4 bg-[#F99D1C] rounded-full">
                            <FlatIcon icon="phone-call" className="!text-base 3xl:!text-lg" />
                          </div>
                          <p className="font-semibold mt-2 mb-3 md:mb-4 lg:mb-[18px]">Phone</p>
                          <div>
                            {contact?.phones?.map((phone, idx) => (
                              <a
                                key={idx}
                                href={`tel:${phone}`}
                                className="block text-sm 3xl:text-lg text-[#8F7C79]"
                              >
                                {phone} {idx === contact.phones.length - 1 ? '' : '/'}
                              </a>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div className="inline-block p-3 3xl:p-4 bg-[#F99D1C] rounded-full">
                            <FlatIcon icon="envelope" className="!text-base 3xl:!text-lg" />
                          </div>
                          <p className="font-semibold mt-2 mb-3 md:mb-4 lg:mb-[18px]">Email</p>
                          <div>
                            {contact?.emails?.map((email, idx) => (
                              <a
                                key={idx}
                                href={`mailto:${email}`}
                                className="block text-sm 3xl:text-lg text-[#8F7C79]"
                              >
                                {email}
                              </a>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div className="inline-block p-3 3xl:p-4 bg-[#F99D1C] rounded-full">
                            <FlatIcon icon="marker" className="!text-base 3xl:!text-lg" />
                          </div>
                          <p className="font-semibold mt-2 mb-3 md:mb-4 lg:mb-[18px]">Address</p>
                          <div>
                            <p className="block text-sm 3xl:text-lg text-[#8F7C79]">
                              {contact?.address}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorRelationsSection;
