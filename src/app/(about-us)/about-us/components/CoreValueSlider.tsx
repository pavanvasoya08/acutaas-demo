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

const CoreValueSlider: React.FC = () => {
  const industryCards: IndustryCard[] = [
    {
      icon: 'flask',
      title: 'Purposeful Innovation',
      description:
        'We challenge conventional thinking to create smarter chemical solutions that enable progress across industries and improve everyday life.',
    },
    {
      icon: 'flask',
      title: 'Excellence Through Quality',
      description:
        'Excellence is our standard. We pursue precision, consistency, and reliability to deliver world-class quality that earns lasting trust.',
    },
    {
      icon: 'flask',
      title: 'Sustainability by Design',
      description:
        'We embed environmental responsibility into every molecule, process, and decision, delivering solutions that are as sustainable as they are effective.',
    },
    {
      icon: 'flask',
      title: 'Integrity in Every Action',
      description:
        'We act with transparency, accountability, and respect, upholding the highest ethical standards across every facet of our business.',
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

  const cls = `absolute -z-10 block dot w-20 h-20 bg-white rounded-full transition-all ease-out duration-500 scale-0 opacity-50 group-hover:scale-[3] group-hover:opacity-80`;
  const slides = industryCards.map((card, index) => (
    <div key={index} className="h-full">
      <div className="relative z-10 group overflow-hidden h-full border border-[#8F7C79] rounded-2xl bg-[#FFF8EE] transition-all p-5 duration-300 lg:p-7">
        <FlatIcon icon={card.icon} className="text-[#F99D1C]" />
        <div className="flex flex-col gap-2 mt-8 lg:gap-3 lg:mt-10">
          <div className="flex items-center justify-between">
            <h3 className="section-subtitle">{card.title}</h3>
            <ArrowIcon className="w-[34px] h-[34px]" />
          </div>
          <p className="text-[#8F7C79]">{card.description}</p>
        </div>
        <span className={cls} style={{ top: '10%', left: '15%', transitionDelay: '0.02s' }}></span>
        <span className={cls} style={{ top: '20%', left: '40%', transitionDelay: '0.04s' }}></span>
        <span className={cls} style={{ top: '30%', left: '70%', transitionDelay: '0.06s' }}></span>
        <span className={cls} style={{ top: '15%', left: '80%', transitionDelay: '0.08s' }}></span>
        <span className={cls} style={{ top: '25%', left: '20%', transitionDelay: '0.02s' }}></span>
        <span className={cls} style={{ top: '40%', left: '10%', transitionDelay: '0.04s' }}></span>
        <span className={cls} style={{ top: '55%', left: '60%', transitionDelay: '0.06s' }}></span>
        <span className={cls} style={{ top: '65%', left: '75%', transitionDelay: '0.08s' }}></span>
        <span className={cls} style={{ top: '70%', left: '25%', transitionDelay: '0.02s' }}></span>
        <span className={cls} style={{ top: '80%', left: '50%', transitionDelay: '0.04s' }}></span>
        <span className={cls} style={{ top: '85%', left: '15%', transitionDelay: '0.06s' }}></span>
        <span className={cls} style={{ top: '60%', left: '85%', transitionDelay: '0.06s' }}></span>
        <span className={cls} style={{ top: '35%', left: '55%', transitionDelay: '0.02s' }}></span>
        <span className={cls} style={{ top: '50%', left: '80%', transitionDelay: '0.04s' }}></span>
        <span className={cls} style={{ top: '5%', left: '30%', transitionDelay: '0.06s' }}></span>
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

export default CoreValueSlider;
