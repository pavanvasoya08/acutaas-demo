import SectionHeader from '@/components/common/SectionHeader';

const AwardsSection: React.FC = () => {
  const awardIcon = [
    {
      image: '/images/sgs-gmp.png',
      imageAlt: 'Awards',
    },
    {
      image: '/images/sgs-gmp.png',
      imageAlt: 'Awards',
    },
    {
      image: '/images/sgs-gmp.png',
      imageAlt: 'Awards',
    },
    {
      image: '/images/sgs-gmp.png',
      imageAlt: 'Awards',
    },
    {
      image: '/images/sgs-gmp.png',
      imageAlt: 'Awards',
    },
    {
      image: '/images/sgs-gmp.png',
      imageAlt: 'Awards',
    },
  ];

  return (
    <section className="bg-[#FFF8EE] py-16 sm:py-20 overflow-hidden">
      <div className="main-container">
        <div className="flex flex-col gap-12 sm:gap-14">
          <SectionHeader title="Globally Certified" />
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-[75px] items-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {awardIcon.map((item, index) => (
                <div key={index} className="w-full max-w-[120px] mx-auto group relative">
                  <div
                    className="w-full h-full absolute inset-0 z-10 transition-opacity duration-300"
                    style={{
                      backgroundColor: '#8B605733',
                      mixBlendMode: 'lighten',
                    }}
                  ></div>
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="relative z-0 transition duration-300 lg:group-hover:grayscale-0 lg:grayscale"
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold leading-snug">
                Standards That Streng then What We Build
              </h2>
              <p className="text-base max-w-[461px] mx-auto lg:mx-0">
                Every certificate we hold reflects how we think, work, and deliver. From quality to
                safety and sustainability, our processes are audited, approved, and aligned with the
                highest global expectations.
              </p>
              <p className="text-base max-w-[461px] mx-auto lg:mx-0">
                Certificates - USFDA, PMDA, ISO 9001/14001/45001, GMP, SA 8000, Kosher, Halal, and
                21 CFR Part 11 compliance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
