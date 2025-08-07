interface HeroImageSectionProps {
  imageSrc?: string;
  imageAlt?: string;
  isVideo?: boolean;
}

const HeroImageSection: React.FC<HeroImageSectionProps> = ({
  imageSrc,
  imageAlt,
  isVideo = false,
}) => {
  return (
    <section className="relative">
      <div className="overflow-hidden rounded-xl md:rounded-2xl lg:rounded-[20px]">
        <img src={imageSrc} alt={imageAlt} />
      </div>
      {isVideo && (
        <div className="w-10 h-10 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] sm:w-16 sm:h-16 lg:w-20 lg:h-20">
          <img src="/images/about-play-button.svg" alt="" />
        </div>
      )}
    </section>
  );
};

export default HeroImageSection;
