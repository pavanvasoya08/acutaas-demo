import { FlaskConical } from 'lucide-react';
import React from 'react';
import { FlatIcon } from '../Flaticon';

export interface StatCardProps {
  value: string;
  label: string;
  description: string;
  showCornerIcon?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  description,
  showCornerIcon = true,
}) => {
  return (
    <div className="group flex flex-col justify-between rounded-2xl border bg-white border-[#BCB2B2] hover:bg-[#FFF2EF] p-5 shadow-sm md:p-6 h-full transition-all duration-300">
      <div className="flex items-center justify-between">
        <div className="text-[32px] font-extrabold leading-none text-[#231F20] md:text-[36px]">
          {value}
          <span className="text-[#B03B23]">+</span>
        </div>

        {showCornerIcon && (
          <div className="w-12 h-12 flex items-center justify-center rounded-full border border-[#BCB2B2] bg-[#FFF2EF] group-hover:bg-white transition-all duration-300">
            <FlatIcon icon="flask" size={18} className='text-[#B03B23] leading-none' />
          </div>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-2xl font-semibold text-[#231F20]">{label}</h3>
        <p className="text-base text-[#8F7C79]">{description}</p>
      </div>
    </div>
  );
};

export default StatCard;
