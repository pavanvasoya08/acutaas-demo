import Button from '@/components/ui/Button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-80 sm:h-auto">
      <div className="h-full">
        <img src="/images/banner-image.png" alt="" className="h-full" />
      </div>
      <div className="absolute top-1/2 left-0 translate-y-[-50%] w-full z-10">
        <div className="main-container">
          <div className="flex flex-col gap-4 sm:gap-10 lg:gap-16 max-w-[500px]">
            <div className="flex flex-col gap-4 sm:gap-7">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] xl:leading-tight font-bold leading-tight text-[#231f20]">
                Lorem Ipsum is simply dummy text
              </h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry standard dummy text ever since the 1500s.
              </p>
            </div>
            <Button variant="primary" size="md" className="w-fit">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
