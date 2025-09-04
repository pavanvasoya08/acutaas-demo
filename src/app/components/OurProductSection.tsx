'use client';
import { useEffect, useRef, useState } from 'react';
import SectionHeader from '@/components/common/SectionHeader';
import SectionIntro from '@/components/common/SectionIntro';
import ArrowIcon from '@/components/common/ArrowIcon';
import Button from '@/components/ui/Button';
import SwiperSlider from '@/components/ui/SwiperSlider';

interface OurProductCardProps {
  title: string;
  description: string;
  image: string;
}

const OurProductCard: React.FC<OurProductCardProps> = ({ title, description, image }) => {
  return (
    <div className="h-full group border border-[#BCB2B2] rounded-2xl overflow-hidden relative bg-white">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-auto" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(35,31,32,0)_59.33%,#231F20_100%)]"></div>
        <div className="absolute left-5 right-5 bottom-5 flex items-center justify-between">
          <h3 className="text-white section-subtitle">{title}</h3>
          <ArrowIcon className="w-[34px] h-[34px] flex-none" fill="#FFFFFF" />
        </div>
      </div>

      <div className="hidden sm:block absolute inset-0 bg-primary z-10 rounded-xl p-5 md:p-8 lg:p-10 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out">
        <div className="flex items-center justify-between">
          <p className="section-subtitle">{title}</p>
          <ArrowIcon className="w-[34px] h-[34px] flex-none" fill="#231F20" />
        </div>
        <p className="text-sm leading-normal mt-3">{description}</p>
      </div>
    </div>
  );
};

const products = [
  {
    title: 'Advanced Pharmaceutical Intermediates',
    description:
      'Built through deep research to meet global quality and regulatory needs for life-changing medicines. Our USFDA and PMDA-approved facilities serve 160+ customers across 25+ countries with ₹8,540 Million revenue.',
    image: '/images/product-1.png',
  },
  {
    title: 'Semiconductor Chemicals',
    description:
      "Ultra-pure chemicals driving the digital revolution. We're India's only manufacturer of semiconductor-grade chemicals, serving markets in US, Korea, Japan, and Taiwan.",
    image: '/images/product-2.png',
  },
  {
    title: 'Battery Chemicals',
    description:
      "Advanced materials enabling sustainable mobility and energy storage. We're the first company in India (outside China) to develop electrolyte additives on a global scale.",
    image: '/images/product-3.png',
  },
  {
    title: 'Commodity Chemicals',
    description:
      'Foundation-scale solutions supporting wide range of industrial applications across personal care, agriculture, coatings, and more with 30+ established products.',
    image: '/images/product-3.png',
  },
];

const OurProductSection: React.FC = () => {
  const swiperRef = useRef<any>(null);
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  const isSlider = products.length > 3;

  useEffect(() => {
    if (!isSlider) return;

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
  }, [isSlider]);

  const slides = products.map((product, index) => (
    <div key={index} className="h-full">
      <OurProductCard {...product} />
    </div>
  ));

  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-[#FFF8EE] overflow-hidden">
      <div className="main-container">
        <div className="flex flex-col gap-10 sm:gap-12 lg:gap-14">
          <SectionHeader title="Our Products" />
          <SectionIntro
            title="Engineered for Industry and Impact"
            description="Our products are developed through rigorous science and deep application insight delivering performance consistency and long-term value across global supply chains and industrial ecosystems."
          />

          {isSlider ? (
            <>
              <div className="hidden md:block" ref={sliderContainerRef}>
                <SwiperSlider
                  children={slides}
                  spaceBetween={24}
                  slidesPerView={3}
                  onSwiper={(swiper) => (swiperRef.current = swiper)}
                  className="!overflow-visible"
                  speed={3000}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
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

                  <button
                    className="flex h-9 w-9 items-center justify-center rounded-[6px] border border-[#BCB2B2] transition-all duration-300 hover:bg-[#FFF2EF] lg:h-11 lg:w-11 lg:rounded-[10px]"
                    onClick={() => swiperRef.current?.slideNext()}
                    aria-label="Next"
                  >
                    <ArrowIcon direction="right" fill="#8F7C79" className="w-5 h-5 lg:w-6 lg:h-6" />
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-6 md:hidden">
                {products.map((product, index) => (
                  <OurProductCard key={index} {...product} />
                ))}
              </div>
            </>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <OurProductCard key={index} {...product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default OurProductSection;
