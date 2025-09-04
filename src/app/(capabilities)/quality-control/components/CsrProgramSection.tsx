'use client';

import { useEffect, useRef } from 'react';
import ArrowIcon from '@/components/common/ArrowIcon';
import SectionHeader from '@/components/common/SectionHeader';
import { FlatIcon } from '@/components/Flaticon';
import SwiperSlider from '@/components/ui/SwiperSlider';

interface CsrCard {
  title: string;
  description: string;
}

const CsrProgramSection: React.FC = () => {
  const csrCards: CsrCard[] = [
    {
      title: 'Innovation',
      description:
        'We invest in ideas that lead to progress through research technology and forward thinking.',
    },
    {
      title: 'Integrity',
      description:
        'We act with honesty and uphold transparency in every relationship and decision we make.',
    },
    {
      title: 'Sustainability',
      description:
        'We grow with purpose by reducing impact and creating value that lasts for people & planet.',
    },
    {
      title: 'Customer Centricity',
      description:
        'We stay committed to understanding and delivering on what our customers truly need.',
    },
    {
      title: 'Excellence',
      description:
        'We maintain high standards in quality performance and service across everything we do.',
    },
  ];

  const swiperRef = useRef<any>(null);
  const sliderContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (swiperRef.current?.autoplay) {
            if (entry.isIntersecting) {
              swiperRef.current.autoplay.start();
            } else {
              swiperRef.current.autoplay.stop();
            }
          }
        });
      },
      { threshold: 0.7 }
    );

    if (sliderContainerRef.current) {
      observer.observe(sliderContainerRef.current);
    }

    return () => {
      if (sliderContainerRef.current) {
        observer.unobserve(sliderContainerRef.current);
      }
    };
  }, []);

  const slides = csrCards.map((card, index) => (
    <div key={index} className="h-full">
      <div className="group h-full border border-[#BCB2B2] rounded-2xl bg-[#FFF8EE] transition-all p-5 duration-300 hover:bg-[#FFFFFF] lg:p-7">
        <div className="bg-white border border-[#BCB2B2] rounded-lg w-12 h-12 flex items-center justify-center group-hover:bg-[#FFF8EE]">
          <p className="text-[#F99D1C] text-2xl font-bold">{index + 1}</p>
        </div>
        <div className="flex flex-col gap-2 mt-8 lg:gap-3 lg:mt-10">
          <div className="flex items-center justify-between">
            <h3 className="section-subtitle">{card.title}</h3>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 items-end">
            <h2 className="text-2xl text-[#231F20] sm:text-3xl md:text-4xl lg:text-[40px] !leading-tight font-semibold">
              There are many variations of passages of Lorem Ipsum
            </h2>
            <p className="text-[#453A3D]">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.`}</p>
          </div>
          <div className="hidden md:block" ref={sliderContainerRef}>
            <SwiperSlider
              children={slides}
              spaceBetween={24}
              slidesPerView={3}
              speed={3000}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
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
          <div className="flex flex-col gap-6 md:hidden">{slides}</div>
        </div>
      </div>
    </section>
  );
};

export default CsrProgramSection;
