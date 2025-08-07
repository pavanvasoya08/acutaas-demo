// import { useSettings } from '@/providers';
import React, { forwardRef } from 'react';
import '@flaticon/flaticon-uicons/css/all/all.css';

export interface UiconsProps extends React.HTMLAttributes<HTMLElement> {
  icon: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
  type?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export const FlatIcon = forwardRef<HTMLElement, UiconsProps>(
  ({ icon, size = 24, className = '', type = 'regular', style, onClick, ...props }, ref) => {
    const iconType = () => {
      if (type === 'regular') {
        return 'rr';
      } else if (type === 'bold') {
        return 'br';
      } else if (type === 'solid') {
        return 'sr';
      } else if (type === 'thin') {
        return 'tr';
      } else if (type === 'brand') {
        return 'brands';
      }
    };

    return (
      <i
        ref={ref as React.LegacyRef<HTMLElement>}
        className={`fi fi-${iconType()}-${icon} ${className} flex items-center`}
        style={{
          fontSize: size,
          ...style,
        }}
        {...props}
        onClick={onClick}
      />
    );
  }
);
