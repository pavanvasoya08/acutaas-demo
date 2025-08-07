'use client';
import { useRef } from 'react';
import SwiperSlider from '@/components/ui/SwiperSlider';
import { FlatIcon } from '@/components/Flaticon';
import ArrowIcon from '@/components/common/ArrowIcon';
import Button from '@/components/ui/Button';
import industries from '@/lib/data/industries.json';

const IndustriesSlider: React.FC = () => {
  const swiperRef = useRef<any>(null);

  const slides = industries.map((card, index) => (
    <div key={index}>
      <div className="border border-[#BCB2B2] rounded-2xl bg-white transition-all p-5 duration-300 hover:bg-[#FFF2EF] lg:p-7">
        <FlatIcon icon={card.icon} className="text-[#B03B23]" />
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
          className="flex h-9 w-9 items-center justify-center rounded-[6px] border border-[#BCB2B2] transition-all duration-300 hover:bg-[#FFF2EF] lg:h-11 lg:w-11 lg:rounded-[10px]"
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Previous"
        >
          <ArrowIcon direction="left" fill="#8F7C79" className="w-5 h-5 lg:w-6 lg:h-6" />
        </button>
        <Button variant="outline">Button Text</Button>
        <button
          className="flex h-9 w-9 items-center justify-center rounded-[6px] border border-[#BCB2B2] transition-all duration-300 hover:bg-[#FFF2EF] lg:h-11 lg:w-11 lg:rounded-[10px]"
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next"
        >
          <ArrowIcon direction="right" fill="#8F7C79" className="w-5 h-5 lg:w-6 lg:h-6" />
        </button>
      </div>
    </>
  );
};

export default IndustriesSlider;
