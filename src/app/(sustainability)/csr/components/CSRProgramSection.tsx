'use client';
import ArrowIcon from '@/components/common/ArrowIcon';
import SectionHeader from '@/components/common/SectionHeader';
import SectionIntro from '@/components/common/SectionIntro';
import { FlatIcon } from '@/components/Flaticon';
import SwiperSlider from '@/components/ui/SwiperSlider';
import { useEffect, useRef } from 'react';

interface IndustryCard {
  icon: string;
  title: string;
  description: string;
}

const industryCards: IndustryCard[] = [
  {
    icon: 'flask',
    title: 'Education',
    description:
      'Opening doors to learning, skill growth, and brighter futures for children and adults in every community we reach.',
  },
  {
    icon: 'flask',
    title: 'Healthcare',
    description:
      'Improving access to care, preventive health, and wellness awareness to help people lead healthier lives.',
  },
  {
    icon: 'flask',
    title: 'Environment',
    description:
      'Protecting natural resources and promoting responsible practices that support a cleaner, greener future.',
  },
  {
    icon: 'flask',
    title: 'Community Development',
    description:
      'Working closely with local areas to improve facilities, create livelihoods, and strengthen social bonds.',
  },
  {
    icon: 'flask',
    title: 'Empowerment',
    description:
      'Enabling individuals to build skills, gain independence, and shape their own economic resilience.',
  },
  {
    icon: 'flask',
    title: 'Sports & Culture',
    description:
      'Encouraging talent, participation, and preservation of traditions that bring communities together.',
  },
];

const CSRProgramSection: React.FC = () => {
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
      <div className="h-full border border-[#8F7C79] rounded-2xl bg-[#FFF8EE] transition-all p-5 duration-300 sm:hover:bg-[#FFFFFF] lg:p-7">
        <FlatIcon icon={card.icon} className="text-[#F99D1C] !text-2xl 3xl:!text-3xl" />
        <div className="flex flex-col gap-2 mt-8 lg:gap-3 lg:mt-10">
          <h3 className="section-subtitle">{card.title}</h3>
          <p className="text-[#8F7C79]">{card.description}</p>
        </div>
      </div>
    </div>
  ));

  return (
    <section className="overflow-hidden bg-[#FFF8EE] py-10 md:py-16 lg:py-20">
      <div className="main-container">
        <div className="flex flex-col gap-8 md:gap-10 lg:gap-14">
          <SectionHeader title="CSR Programs" />
          <SectionIntro
            title="Focused Efforts for a Better Tomorrow"
            description="Our programs address pressing social and environmental priorities with actions designed to improve quality of life, expand opportunities, and create positive change that endures across regions where we operate."
          />
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
                className="flex h-9 w-9 items-center justify-center rounded-[6px] border border-[#BCB2B2] transition-all duration-300 hover:bg-white lg:h-11 lg:w-11 3xl:w-12 3xl:h-12 lg:rounded-[10px]"
                onClick={() => swiperRef.current?.slidePrev()}
                aria-label="Previous"
              >
                <ArrowIcon
                  direction="left"
                  fill="#8F7C79"
                  className="w-5 h-5 lg:w-6 lg:h-6 3xl:w-7 3xl:h-7"
                />
              </button>
              <button
                className="flex h-9 w-9 items-center justify-center rounded-[6px] border border-[#BCB2B2] transition-all duration-300 hover:bg-white lg:h-11 lg:w-11 3xl:w-12 3xl:h-12 lg:rounded-[10px]"
                onClick={() => swiperRef.current?.slideNext()}
                aria-label="Next"
              >
                <ArrowIcon
                  direction="right"
                  fill="#8F7C79"
                  className="w-5 h-5 lg:w-6 lg:h-6 3xl:w-7 3xl:h-7"
                />
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-5 sm:hidden">{slides}</div>
        </div>
      </div>
    </section>
  );
};

export default CSRProgramSection;
