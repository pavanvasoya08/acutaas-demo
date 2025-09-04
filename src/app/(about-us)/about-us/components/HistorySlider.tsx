'use client';

import React, { useRef, useState } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper/types';
import { gsap } from 'gsap';
import history from '@/lib/data/ourHistory.json';

import 'swiper/css';
import 'swiper/css/navigation';
import ArrowIcon from '@/components/common/ArrowIcon';

const TimelineSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const mainSwiperRef = useRef<SwiperRef>(null);
  const paginationContentRef = useRef<HTMLDivElement>(null);

  const onSlideChange = (swiper: SwiperType) => {
    const index = swiper.realIndex;
    setActiveIndex(index);

    if (paginationContentRef.current) {
      const totalSlides = history.length;
      const containerWidth = paginationContentRef.current.parentElement?.clientWidth || 0;
      const maxScroll = paginationContentRef.current.scrollWidth - containerWidth;

      const scrollPerStep = totalSlides > 1 ? maxScroll / (totalSlides - 1) : 0;
      const targetX = -scrollPerStep * index;

      gsap.to(paginationContentRef.current, {
        x: Math.max(targetX, -maxScroll),
        duration: 0.6,
        ease: 'power1.out',
      });
    }
  };

  const handlePaginationClick = (index: number) => {
    if (mainSwiperRef.current && mainSwiperRef.current.swiper) {
      mainSwiperRef.current.swiper.slideTo(index);
    }
  };

  const handlePrev = () => {
    if (mainSwiperRef.current?.swiper) mainSwiperRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    if (mainSwiperRef.current?.swiper) mainSwiperRef.current.swiper.slideNext();
  };

  return (
    <div className="relative">
      <Swiper
        ref={mainSwiperRef}
        modules={[Navigation]}
        slidesPerView="auto"
        spaceBetween={24}
        speed={700}
        onSlideChange={onSlideChange}
        className="history-slider !overflow-visible relative z-[1]"
      >
        {history.map((item, index) => (
          <SwiperSlide
            key={index}
            className="rounded-lg overflow-hidden relative z-[1] max-w-[90%] sm:max-w-[66%] lg:max-w-[768px] xl:max-w-[894px]"
          >
            <div className="bg-white rounded-2xl overflow-hidden lg:flex">
              <div className="overflow-hidden rounded-2xl lg:w-[48%] flex-none">
                <img src={item.image} alt={item.title} className="h-full" />
              </div>
              <div className="p-6 flex flex-col gap-6 lg:pl-10">
                <p className="text-4xl !leading-[1] font-bold text-[#231F20] md:text-5xl lg:text-[64px]">
                  {item.year}
                </p>
                <div className="flex flex-col gap-4 mt-auto">
                  <h3 className="text-xl !leading-[1.16] text-[#231F20] font-semibold lg:text-2xl">
                    {item.title}
                  </h3>
                  <div className="text-[#8F7C79]">{item.description}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="pt-6 mt-6 md:pt-8 md:mt-8">
        <div
          ref={paginationContentRef}
          className="flex items-center gap-3 px-4"
          style={{ display: 'inline-flex' }}
        >
          {history.map((item, index) => (
            <button
              key={index}
              type="button"
              className={`flex items-center gap-3 cursor-pointer transition-all duration-700 flex-none min-w-0 ${index < history.length - 1 ? 'w-[175px] sm:w-[200px] md:w-[225px] lg:w-[250px]' : 'w-auto'}`}
              onClick={() => handlePaginationClick(index)}
              aria-label={`Go to ${item.year}: ${item.title}`}
            >
              <div className={`relative flex flex-col items-center gap-[10px]`}>
                <span
                  className={`absolute -top-6 md:-top-8 transition-all duration-700 ${activeIndex >= index ? 'text-black opacity-100' : 'text-[#BCB2B2] opacity-40'} !leading-[1.1] text-lg md:text-xl`}
                >
                  {item.year}
                </span>
                <span
                  className={`w-3 h-3 md:w-4 md:h-4 block rounded-full transition-all duration-700 ${activeIndex >= index ? 'opacity-100 bg-[#231F20]' : 'opacity-40 bg-[#BCB2B2]'} ${activeIndex === index ? 'scale-100' : 'scale-50'}`}
                ></span>
              </div>
              {index < history.length - 1 && (
                <div className="h-px overflow-hidden w-full relative">
                  <div className="w-full h-full bg-[#BCB2B2] opacity-40 absolute"></div>
                  <div
                    className="h-full bg-[#231F20] origin-left transition-all duration-700"
                    style={{
                      width: '100%',
                      transform: `scaleX(${activeIndex > index ? 1 : 0})`,
                    }}
                  ></div>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      <div>
        <button
          onClick={handlePrev}
          className="w-11 h-11 bg-[#FFF8EE] rounded-xl border border-[#BCB2B2] hidden items-center justify-center absolute z-10 top-1/2 -left-3 xl:-left-16 transform -translate-y-1/2 md:flex"
          aria-label="Previous timeline item"
        >
          <ArrowIcon className="w-6 h-6" direction="left" fill="#231F20" />
        </button>
        <button
          onClick={handleNext}
          className="w-11 h-11 bg-[#FFF8EE] rounded-xl border border-[#BCB2B2] hidden items-center justify-center absolute z-10 top-1/2 -right-3 xl:-right-16 transform -translate-y-1/2 md:flex"
          aria-label="Next timeline item"
        >
          <ArrowIcon className="w-6 h-6" direction="right" fill="#231F20" />
        </button>
      </div>
    </div>
  );
};

export default TimelineSlider;
