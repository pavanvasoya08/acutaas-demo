'use client';
import { useRef, useState } from 'react';
import { FlatIcon } from '../Flaticon';

interface HeroImageSectionProps {
  imageSrc?: string;
  imageAlt?: string;
  videoSrc?: string;
  isVideo?: boolean;
}

const HeroImageSection: React.FC<HeroImageSectionProps> = ({
  imageSrc,
  imageAlt,
  videoSrc,
  isVideo = false,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);

  const togglePlayPause = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
      setShowControls(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <section className="relative">
      <div
        className={`overflow-hidden rounded-xl md:rounded-2xl lg:rounded-[20px] ${!isVideo && 'h-[220px] sm:h-auto'}`}
      >
        {isVideo ? (
          <video
            ref={videoRef}
            src={videoSrc}
            poster={imageSrc}
            muted
            className="h-full w-full object-cover"
            onClick={togglePlayPause}
          />
        ) : (
          <img src={imageSrc} alt={imageAlt} className="h-full w-full object-cover" />
        )}
      </div>

      {isVideo && !isPlaying && (
        <button
          onClick={togglePlayPause}
          className="w-12 h-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center rounded-full bg-white"
        >
          <FlatIcon
            icon="play"
            type="solid"
            className="!text-lg sm:!text-xl md:!text-2xl lg:!text-3xl text-[#000000]"
          />
        </button>
      )}

      {isVideo && showControls && (
        <div className="absolute bottom-2 left-2 right-2 bg-black/50 rounded-lg flex items-center justify-between px-3 md:px-4 py-2">
          <button onClick={togglePlayPause} className="text-white">
            <FlatIcon
              icon={isPlaying ? 'pause' : 'play'}
              type="solid"
              className="!text-sm sm:!text-base md:!text-lg lg:!text-xl text-white"
            />
          </button>

          <button onClick={toggleFullscreen} className="text-white">
            <FlatIcon
              icon="expand"
              type="solid"
              className="!text-sm sm:!text-base md:!text-lg lg:!text-xl text-white"
            />
          </button>
        </div>
      )}
    </section>
  );
};

export default HeroImageSection;
