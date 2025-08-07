'use client';

import { useRef } from 'react';
import ArrowIcon from '@/components/common/ArrowIcon';
import SectionHeader from '@/components/common/SectionHeader';
import SectionIntro from '@/components/common/SectionIntro';
import { FlatIcon } from '@/components/Flaticon';
import SwiperSlider from '@/components/ui/SwiperSlider';

interface IndustryCard {
  icon: string;
  title: string;
  description: string;
}

const CoreValueSection: React.FC = () => {
  const industryCards: IndustryCard[] = [
    {
      icon: 'flask',
      title: 'Innovation',
      description:
        'We invest in ideas that lead to progress through research technology and forward thinking.',
    },
    {
      icon: 'flask',
      title: 'Integrity',
      description:
        'We act with honesty and uphold transparency in every relationship and decision we make.',
    },
    {
      icon: 'flask',
      title: 'Sustainability',
      description:
        'We grow with purpose by reducing impact and creating value that lasts for people & planet.',
    },
    {
      icon: 'flask',
      title: 'Customer Centricity',
      description:
        'We stay committed to understanding and delivering on what our customers truly need.',
    },
    {
      icon: 'flask',
      title: 'Excellence',
      description:
        'We maintain high standards in quality performance and service across everything we do.',
    },
  ];

  const swiperRef = useRef<any>(null);

  const slides = industryCards.map((card, index) => (
    <div key={index}>
      <div className="border border-[#8F7C79] rounded-2xl bg-[#FFF8EE] transition-all p-5 duration-300 hover:bg-[#FFFFFF] lg:p-7">
        <FlatIcon icon={card.icon} className="text-[#F99D1C]" />
        <div className="flex flex-col gap-2 mt-8 lg:gap-3 lg:mt-10">
          <div className="flex items-center justify-between">
            <h3 className="section-subtitle">{card.title}</h3>
            <ArrowIcon className="w-[34px] h-[34px]" />
          </div>
          <p className="text-[#8F7C79]">{card.description}</p>
        </div>
      </div>
    </div>
  ));

  return (
    <section className="overflow-hidden bg-[#FFF8EE] py-10 md:py-16 lg:py-20">
      <div className="main-container">
        <div className="flex flex-col gap-8 md:gap-10 lg:gap-14">
          <SectionHeader title="Our Core Value" />
          <SectionIntro
            title="Our Values Define Who We Are"
            description={`At ACUTAAS, our values guide every decision we make. They reflect how we think, how we operate and how we build lasting partnerships grounded in science, trust and shared progress.`}
          />
          <div>
            <SwiperSlider
              children={slides}
              spaceBetween={24}
              slidesPerView={3}
              autoplay={true}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              className="!overflow-visible"
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 1.5,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            />
            <div className="flex items-center justify-between mt-8">
              <button
                className="flex h-9 w-9 items-center justify-center rounded-[6px] border border-[#BCB2B2] transition-all duration-300 hover:bg-white lg:h-11 lg:w-11 lg:rounded-[10px]"
                onClick={() => swiperRef.current?.slidePrev()}
                aria-label="Previous"
              >
                <ArrowIcon direction="left" fill="#8F7C79" className="w-5 h-5 lg:w-6 lg:h-6" />
              </button>
              <button
                className="flex h-9 w-9 items-center justify-center rounded-[6px] border border-[#BCB2B2] transition-all duration-300 hover:bg-white lg:h-11 lg:w-11 lg:rounded-[10px]"
                onClick={() => swiperRef.current?.slideNext()}
                aria-label="Next"
              >
                <ArrowIcon direction="right" fill="#8F7C79" className="w-5 h-5 lg:w-6 lg:h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValueSection;
