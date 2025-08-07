// src/components/common/SectionHeader.tsx
import React from 'react';

const SectionHeader: React.FC<{ title: string }> = ({ title = '' }) => {
  return (
    <div className="flex items-center">
      <div className="border-before border border-[#BCB2B2] rounded-2xl px-4 py-2 relative md:px-7 md:rounded-[20px] lg:py-3">
        <span className="text-[#BCB2B2] font-medium text-base sm:text-lg lg:text-xl">{title}</span>
      </div>
    </div>
  );
};

export default SectionHeader;
