'use client';

import { useEffect, useRef } from 'react';
import ArrowIcon from '@/components/common/ArrowIcon';
import { FlatIcon } from '@/components/Flaticon';
import SwiperSlider from '@/components/ui/SwiperSlider';

interface IndustryCard {
  icon: string;
  title: string;
  description: string;
}

const CoreStrengthSlider: React.FC = () => {
  const industryCards: IndustryCard[] = [
    {
      icon: 'flask',
      title: 'Founding Vision & Continuity',
      description:
        'Deep roots from inception provide continuity, culture, and clarity of long-term direction.',
    },
    {
      icon: 'flask',
      title: 'Operational Excellence',
      description:
        'Expertise in specialty chemicals ensures world-class standards in manufacturing & delivery.',
    },
    {
      icon: 'flask',
      title: 'Financial Stewardship',
      description:
        'Proven financial acumen drives sustainable growth with efficient use of resources.',
    },
    {
      icon: 'flask',
      title: 'Regulatory Leadership',
      description:
        'Strong governance and compliance expertise uphold the highest ethical standards.',
    },
    {
      icon: 'flask',
      title: 'Innovation Focus',
      description:
        'Dedicated to R&D that enables new technologies and sustainable manufacturing pathways.',
    },
    {
      icon: 'flask',
      title: 'ESG Leadership',
      description:
        'Responsible practices ensure value creation for people, communities, and the planet.',
    },
    {
      icon: 'flask',
      title: 'Global Perspective',
      description:
        'Experience across 55+ countries brings insights into evolving market opportunities.',
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

  const slides = industryCards.map((card, index) => (
    <div key={index} className="h-full">
      <div className="h-full border border-[#8F7C79] rounded-2xl bg-[#FFF8EE] transition-all p-5 duration-300 hover:bg-[#FFFFFF] lg:p-7">
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
    <>
      <div className="hidden sm:block" ref={sliderContainerRef}>
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
      <div className="flex flex-col gap-5 sm:hidden">{slides}</div>
    </>
  );
};

export default CoreStrengthSlider;
