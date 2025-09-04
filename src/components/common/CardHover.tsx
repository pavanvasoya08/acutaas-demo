interface CardHoverProps {
  className?: string;
  color?: string;
  size?: number; // circle size
}

const defaultCircles = [
  { top: '10%', left: '15%', delay: '0.02s' },
  { top: '20%', left: '40%', delay: '0.04s' },
  { top: '30%', left: '70%', delay: '0.06s' },
  { top: '15%', left: '80%', delay: '0.08s' },
  { top: '25%', left: '20%', delay: '0.02s' },
  { top: '40%', left: '10%', delay: '0.04s' },
  { top: '55%', left: '60%', delay: '0.06s' },
  { top: '65%', left: '75%', delay: '0.08s' },
  { top: '70%', left: '25%', delay: '0.02s' },
  { top: '80%', left: '50%', delay: '0.04s' },
  { top: '85%', left: '15%', delay: '0.06s' },
  { top: '60%', left: '85%', delay: '0.06s' },
  { top: '35%', left: '55%', delay: '0.02s' },
  { top: '50%', left: '80%', delay: '0.04s' },
  { top: '5%', left: '30%', delay: '0.06s' },
];

const CardHover: React.FC<CardHoverProps> = ({ className = '', color = '#FFF2EF' }) => {
  const cls = `w-20 h-20 absolute -z-10 bg-[${color}] block rounded-full transition-all ease-out duration-500 scale-0 opacity-50 group-hover:scale-[3] group-hover:opacity-80 ${className}`;

  return (
    <div className="hidden md:block">
      {defaultCircles.map((circle, idx) => (
        <span
          key={idx}
          className={cls}
          style={{
            top: circle.top,
            left: circle.left,
            transitionDelay: circle.delay,
          }}
        />
      ))}
    </div>
  );
};

export default CardHover;
