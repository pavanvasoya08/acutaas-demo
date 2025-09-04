'use client';
import { useState } from 'react';

const faqs = [
  {
    question: 'Lorem Ipsum is simply dummy text?',
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
  },
  {
    question: 'It has survived not only five centuries?',
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
  },
  {
    question: 'Also the leap into electronic typesetting, remaining unchanged?',
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
  },
  {
    question: 'It was popularised in the 1960s with the release of Letraset?',
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
  },
  {
    question: 'Lorem Ipsum passages, and more recently with desktop?',
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
  },
  {
    question: 'Contrary to popular belief?',
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
  },
];

const GrievanceFAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-10 md:py-16 lg:py-20">
      <div className="main-container">
        <div className="flex flex-col gap-8 md:gap-10 lg:gap-14">
          {/* Heading */}
          <div className="flex flex-col gap-4 lg:gap-6 items-center max-w-[758px] 3xl:max-w-[900px] mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] 3xl:text-[50px] font-semibold !leading-[1.2]">
              Frequently asked questions
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s
            </p>
          </div>

          {/* Accordion */}
          <div className="flex flex-col gap-6 sm:gap-8 max-w-[792px] 3xl:max-w-[950px] w-full mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-t border-[#BCB2B2] pt-4 sm:pt-6 first:border-t-0 first:pt-0"
              >
                {/* Header */}
                <div
                  className="flex items-center justify-between gap-6 cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <p
                    className={`text-[#231F20] transition-all duration-500 text-base sm:text-lg 3xl:text-xl !leading-[1.22] ${
                      activeIndex === index ? 'font-semibold' : 'font-normal'
                    }`}
                  >
                    {faq.question}
                  </p>
                  <div className="flex-none w-5 h-5 sm:w-6 sm:h-6 border-2 border-[#B03B23] rounded-full flex items-center justify-center relative">
                    <div className="w-2.5 sm:w-3 h-0.5 bg-[#B03B23] rounded-full"></div>
                    <div
                      className={`w-0.5 h-2.5 sm:h-3 bg-[#B03B23] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                        activeIndex === index ? 'rotate-90 opacity-0' : 'opacity-100 rotate-0'
                      }`}
                    ></div>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    activeIndex === index
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pr-12 pt-2 text-[#8F7C79]">{faq.answer}</div>
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

export default GrievanceFAQSection;
