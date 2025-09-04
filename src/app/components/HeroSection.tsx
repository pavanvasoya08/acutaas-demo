import SlideUp from '@/components/common/SlideUp';
import Button from '@/components/ui/Button';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  return (
    <section className="relative sm:h-auto">
      <div className="h-full">
        <img
          src="/images/banner-image.png"
          alt="Acutaas Banner Image"
          className="h-full hidden sm:block"
        />
        <img
          src="/images/mobile-banner-image.png"
          alt="Acutaas Banner Image"
          className="h-full block sm:hidden"
        />
      </div>
      <div className="absolute top-1/2 left-0 translate-y-[-50%] w-full z-10">
        <SlideUp delay={700}>
          <div className="main-container">
            <div className="flex flex-col gap-4 sm:gap-10 lg:gap-16 max-w-[60%] sm:max-w-[500px]">
              <div className="flex flex-col gap-3 sm:gap-7">
                <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-[56px] xl:leading-tight font-bold leading-tight text-[#231f20]">
                  You and Us: Chemistries Apex
                </h1>
                <p>
                  Transforming and safeguarding lives while helping the world innovate through
                  breakthrough chemistry for new age industries.
                </p>
              </div>
              <Link href="/about-us">
                <Button variant="primary" size="md" className="w-fit">
                  Discover More
                </Button>
              </Link>
            </div>
          </div>
        </SlideUp>
      </div>
    </section>
  );
};

export default HeroSection;
