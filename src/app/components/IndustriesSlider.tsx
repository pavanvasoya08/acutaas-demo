'use client';
import { useEffect, useRef, useState } from 'react';
import SwiperSlider from '@/components/ui/SwiperSlider';
import { FlatIcon } from '@/components/Flaticon';
import ArrowIcon from '@/components/common/ArrowIcon';
import Button from '@/components/ui/Button';
import industries from '@/lib/data/industries.json';
import Link from 'next/link';
import CardHover from '../../components/common/CardHover';

const IndustriesSlider: React.FC = () => {
  const swiperRef = useRef<any>(null);
  const [showAll, setShowAll] = useState(false);
  const visibleCards = showAll ? industries : industries.slice(0, 3);
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

  const Card = ({ card }: { card: (typeof industries)[0] }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [circlePos, setCirclePos] = useState({ x: 0, y: 0 });
    const [hovering, setHovering] = useState(false);

    const handleMouseEnter = (e: React.MouseEvent) => {
      const rect = cardRef.current!.getBoundingClientRect();
      setCirclePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      setHovering(true);
    };

    const handleMouseLeave = (e: React.MouseEvent) => {
      const rect = cardRef.current!.getBoundingClientRect();
      setCirclePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      setHovering(false);
    };

    return (
      <div className="h-full">
        <div
          ref={cardRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="group relative z-10 h-full overflow-hidden border border-[#BCB2B2] rounded-2xl bg-white p-5 lg:p-7"
        >
          {/* <div
            className="absolute w-[200px] h-[200px] bg-[#FFF2EF] rounded-full pointer-events-none transition-transform duration-500 z-0"
            style={{
              top: circlePos.y,
              left: circlePos.x,
              transform: `translate(-50%, -50%) scale(${hovering ? 8 : 0})`,
            }}
          /> */}
          <FlatIcon icon={card.icon} className="text-[#B03B23] relative z-10" />
          <div className="flex flex-col gap-2 mt-8 lg:gap-3 lg:mt-10 relative z-10">
            <div className="flex items-center justify-between">
              <h3 className="section-subtitle">{card.title}</h3>
              <ArrowIcon className="w-[34px] h-[34px]" />
            </div>
            <p className="text-[#8F7C79]">{card.description}</p>
          </div>
          <CardHover />
        </div>
      </div>
    );
  };

  const slides = industries.map((card, index) => <Card key={index} card={card} />);

  return (
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
          <Link href="/contact-us">
            <Button variant="outline">Connect for Industry Fit</Button>
          </Link>
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
        {visibleCards.map((card, index) => (
          <Card key={index} card={card} />
        ))}

        {industries.length > 3 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-center text-sm text-[#B03B23] font-medium underline"
          >
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        )}

        <div className="mt-6">
          <Link href="/contact-us">
            <Button variant="outline" fullWidth>
              Connect for Industry Fit
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default IndustriesSlider;
