import React from 'react';
import { FlatIcon } from '../Flaticon';

interface FeatureListProps {
  features: { title: string; icon: string; desc: string }[];
}

const FeatureList: React.FC<FeatureListProps> = ({ features }) => {
  return (
    <div className="grid gap-6 sm:gap-8 md:gap-10 lg:gap-12 grid-cols-2">
      {features.map((item, index) => (
        <div key={`${item.title}-${index}`} className="flex flex-col items-start gap-4">
          <div className="flex h-12 w-12 3xl:w-14 3xl:h-14 shrink-0 items-center justify-center rounded-full bg-[#F99D1C]">
            <FlatIcon
              icon={item.icon}
              className="text-[#231F20] leading-none !text-xl 3xl:!text-2xl"
            />
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="text-lg sm:text-xl md:text-2xl 3xl:text-[28px] font-semibold text-[#231F20]">
              {item.title}
            </h3>
            <p className="text-[#453A3D]">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureList;
