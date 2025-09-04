'use client';

import { useEffect, useRef } from 'react';
import ArrowIcon from '@/components/common/ArrowIcon';
import { FlatIcon } from '@/components/Flaticon';
import SwiperSlider from '@/components/ui/SwiperSlider';

interface CapabilityItem {
  title: string;
  description: string;
  icon: string;
}

const CapabilityCard: React.FC = () => {
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

  const defaultCapabilityItems: CapabilityItem[] = [
    {
      title: 'Flow Chemistry',
      description: 'Continuous reactions for high efficiency',
      icon: 'flask',
    },
    {
      title: 'Microreactors',
      description: 'Precise control for complex reactions',
      icon: 'flask',
    },
    {
      title: 'UV Photo Reactors',
      description: 'Harnessing light for advanced synthesis',
      icon: 'flask',
    },
    {
      title: 'Slurry Flow Reactors',
      description: 'Smooth handling of solid-liquid systems',
      icon: 'flask',
    },
    {
      title: '3D Mixing Tubular Reactors',
      description: 'Uniform mixing for consistent quality',
      icon: 'flask',
    },
  ];

  const slides = defaultCapabilityItems.map((card, index) => (
    <div key={index} className="h-full">
      <div className="h-full overflow-hidden group flex flex-col items-center gap-8 md:gap-12 rounded-2xl border border-[#8F7C79] bg-[#FFF8EE] p-8 text-center relative z-10 transition-all">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#BCB2B2] bg-white sm:group-hover:bg-[#FFF8EE] transition-colors duration-500">
          <FlatIcon icon={card.icon} className="text-[#F99D1C] !text-xl leading-none" />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-[#231F20] md:text-xl">{card.title}</h3>
          <p className="text-[#8F7C79]">{card.description}</p>
        </div>
        <div className="hidden sm:block bg-white absolute bottom-0 left-0 w-full h-full origin-bottom-left !rounded-2xl scale-0 group-hover:scale-100 transition-all duration-300 ease-in-out z-[-1]"></div>
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

export default CapabilityCard;
