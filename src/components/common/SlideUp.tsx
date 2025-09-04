'use client';

import { useEffect, useRef, useState } from 'react';

interface SlideUpProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function SlideUp({ children, className = '', delay = 0 }: SlideUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${className} transition-all duration-700 ${
        isVisible ? 'md:animate-slideUp' : 'md:opacity-0 md:translate-y-20'
      }`}
    >
      {children}
    </div>
  );
}
