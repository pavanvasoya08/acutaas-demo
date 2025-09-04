'use client';

import { FlatIcon } from '@/components/Flaticon';
import { useEffect, useRef, useState } from 'react';

interface Statistic {
  icon: string;
  type: string;
  value: number;
  unit: string;
  label: string;
}

interface StatisticsSectionProps {
  statistics: Statistic[];
}

const StatisticsSection: React.FC<StatisticsSectionProps> = ({ statistics }) => {
  return (
    <section className="py-10 sm:py-16 lg:pt-[60px] lg:pb-[72px]">
      <div className="main-container">
        <div className="grid justify-center grid-cols-2 gap-y-4 gap-x-3 sm:gap-y-6 sm:gap-x-4 lg:justify-between lg:flex lg:flex-wrap">
          {statistics?.map((statistic, index) => (
            <StatisticItem key={index} statistic={statistic} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatisticItem: React.FC<{ statistic: Statistic }> = ({ statistic }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const animationFrame = useRef<number>();

  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  useEffect(() => {
    let observer: IntersectionObserver;
    let startTimestamp: number | null = null;

    const duration = 2000;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      const progressRatio = Math.min(progress / duration, 1);
      const currentCount = Math.floor(progressRatio * statistic.value);
      setCount(currentCount);

      if (progress < duration) {
        animationFrame.current = requestAnimationFrame(step);
      } else {
        setCount(statistic.value);
      }
    };

    const onIntersect = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        animationFrame.current = requestAnimationFrame(step);
        observer.disconnect();
      }
    };

    if (ref.current) {
      observer = new IntersectionObserver(onIntersect, { threshold: 0.6 });
      observer.observe(ref.current);
    }

    return () => {
      if (observer) observer.disconnect();
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
    };
  }, [statistic.value]);

  return (
    <div ref={ref} className="flex items-center gap-4 sm:gap-5 lg:min-w-max">
      <div className="bg-[#ffeae6] w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 3xl:w-20 3xl:h-20 rounded-lg lg:rounded-xl flex-none flex items-center justify-center">
        <FlatIcon
          icon={statistic.icon}
          type={statistic.type}
          className="text-[#B03B23] !text-xl !leading-tight sm:!text-2xl lg:!text-[32px] 3xl:!text-4xl"
        />
      </div>
      <div className="flex flex-col">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] lg:leading-tight 3xl:text-5xl font-bold text-[#231f20]">
          <span>{formatNumber(count)}</span>
          <span className="text-[#b03a23]">
            {statistic?.unit && (statistic.unit === '+' ? statistic.unit : ` ${statistic.unit}`)}
          </span>
        </div>
        <span className="text-xs sm:text-sm 3xl:text-base font-semibold text-[#8f7c79]">
          {statistic.label}
        </span>
      </div>
    </div>
  );
};

export default StatisticsSection;
