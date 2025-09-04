'use client';
import { useEffect, useRef } from 'react';
import ArrowIcon from '@/components/common/ArrowIcon';
import SwiperSlider from '@/components/ui/SwiperSlider';
import recentNews from '@/lib/data/recentNews.json';

const RecentNewsSlider: React.FC = () => {
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

  const slides = recentNews.map((card, index) => (
    <div key={index} className="h-full">
      <div className="bg-white rounded-2xl h-full">
        <div className="rounded-2xl overflow-hidden">
          <img src={card.image} alt={card.title} />
        </div>
        <div className="p-4 md:p-6">
          <div className="mb-5">
            {card.tags.map((tag, index) => (
              <span
                key={index}
                className={`py-2 px-3 bg-[#FFF8EE] rounded-2xl text-[${tag.color}] text-[10px] leading-[1]`}
              >
                {tag.tag}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[12px] leading-[1.33] text-[#8F7C79]">
              {card.date} - {card.duration}
            </span>
            <div className="flex items-center justify-between gap-5">
              <h3 className="text-xl md:text-2xl font-semibold">{card.title}</h3>
              <ArrowIcon className="w-8 h-8 md:w-10 md:h-10 flex-none" />
            </div>
            <p className="text-[#8F7C79]">{card.description}</p>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <div ref={sliderContainerRef}>
      <SwiperSlider
        children={slides}
        spaceBetween={24}
        slidesPerView={'auto'}
        speed={2000}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={true}
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
            slidesPerView: 'auto',
          },
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="recent-news-slider !overflow-visible"
      />
      <div className="flex items-center justify-end mt-8 gap-3 lg:gap-6">
        <button onClick={() => swiperRef.current?.slidePrev()} aria-label="Previous">
          <ArrowIcon direction="left" fill="#231F20" className="w-7 h-7 lg:w-10 lg:h-10" />
        </button>
        <button onClick={() => swiperRef.current?.slideNext()} aria-label="Next">
          <ArrowIcon direction="right" fill="#231F20" className="w-7 h-7 lg:w-10 lg:h-10" />
        </button>
      </div>
    </div>
  );
};

export default RecentNewsSlider;
