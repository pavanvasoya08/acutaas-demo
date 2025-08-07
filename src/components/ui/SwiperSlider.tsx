'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { ReactNode, useRef } from 'react';

interface SwiperSliderProps {
  children: ReactNode[];
  speed?: number;
  slidesPerView?: number | 'auto';
  spaceBetween?: number;
  loop?: boolean;
  autoplay?: boolean | { delay: number; disableOnInteraction?: boolean };
  pagination?: boolean;
  navigation?: boolean;
  className?: string;
  customPrevButton?: ReactNode;
  customNextButton?: ReactNode;
  onSwiper?: (swiper: any) => void;
  breakpoints?: {
    [width: number]: {
      slidesPerView?: number | 'auto';
      spaceBetween?: number;
    };
  };
}

const SwiperSlider = ({
  children,
  speed = 1000,
  slidesPerView = 1,
  spaceBetween = 10,
  loop = false,
  autoplay = false,
  pagination = false,
  navigation = false,
  customPrevButton,
  customNextButton,
  onSwiper,
  className = '',
  breakpoints,
}: SwiperSliderProps) => {
  const swiperRef = useRef<any>(null);
  const shouldUseDefaultNavigation = navigation && !customPrevButton && !customNextButton;

  return (
    <Swiper
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
        if (onSwiper) onSwiper(swiper);
      }}
      speed={speed}
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      loop={loop}
      autoplay={autoplay}
      pagination={pagination ? { clickable: true } : false}
      navigation={shouldUseDefaultNavigation}
      className={`mySwiper ${className}`}
      breakpoints={breakpoints}
    >
      {children.map((child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperSlider;
