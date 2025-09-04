// src/components/common/SectionIntro.tsx
import React from 'react';

interface SectionIntroProps {
  title: string;
  description: string;
}

const SectionIntro: React.FC<SectionIntroProps> = ({ title, description }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 items-end 3xl:gap-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] 3xl:text-[50px] font-semibold !leading-[1.2]">
        {title}
      </h2>
      <p>{description}</p>
    </div>
  );
};

export default SectionIntro;
