'use client';
import ArrowIcon from '@/components/common/ArrowIcon';
import SectionHeader from '@/components/common/SectionHeader';
import SwiperSlider from '@/components/ui/SwiperSlider';
import careerInfo from '@/lib/data/careerInfo.json';
import { useRef } from 'react';

const CareerSection: React.FC = () => {
  const swiperRef = useRef<any>(null);

  const slides = careerInfo.map((card, index) => (
    <div key={index} className="h-full">
      <div className="rounded-2xl h-full bg-[#FFF8EE] pb-3 lg:pb-6">
        <div className="rounded-2xl overflow-hidden">
          <img src={card.image} alt={card.title} />
        </div>
        <div className="p-4 md:p-6">
          <div className="flex flex-col gap-2 justify-center items-center text-center">
            <h3 className="text-xl font-semibold">{card.title}</h3>
            <p className="text-[#8F7C79]">{card.description}</p>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <section className=" py-10 md:py-16 lg:py-20 overflow-hidden">
      <div className="main-container">
        <div className="flex flex-col gap-8 md:gap-10 lg:gap-14">
          <SectionHeader title="Why a career at ACUTAAS" />
          <div className="flex items-center gap-5 flex-col justify-between md:flex-row md:items-end">
            <div className="flex flex-col gap-5 text-center md:text-left max-w-[792px] 3xl:max-w-[980px]">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] 3xl:text-[50px] font-semibold !leading-[1.2]">
                Simply Dummy Text
              </h2>
              <p className="text-[#453A3D]">
                Stay updated with how we are growing, evolving, and building value. From business
                moves to recognition, this is where you can track our progress and momentum.
              </p>
            </div>
          </div>
          <div>
            <SwiperSlider
              children={slides}
              spaceBetween={24}
              slidesPerView={'auto'}
              // autoplay={true}
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
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
