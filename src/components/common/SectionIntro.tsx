// src/components/common/SectionIntro.tsx
import React from 'react';

interface SectionIntroProps {
  title: string;
  description: string;
}

const SectionIntro: React.FC<SectionIntroProps> = ({ title, description }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 items-end">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] !leading-tight font-semibold">
        {title}
      </h2>
      <p>{description}</p>
    </div>
  );
};

export default SectionIntro;
