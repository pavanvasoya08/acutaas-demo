import SectionHeader from '@/components/common/SectionHeader';

const CertificationSection: React.FC = () => {
  const awardIcons = [
    { image: '/images/sgs-gmp.png', imageAlt: 'SGS GMP Certification' },
    { image: '/images/sgs-gmp.png', imageAlt: 'SGS GMP Certification' },
    { image: '/images/sgs-gmp.png', imageAlt: 'SGS GMP Certification' },
    { image: '/images/sgs-gmp.png', imageAlt: 'SGS GMP Certification' },
    { image: '/images/sgs-gmp.png', imageAlt: 'SGS GMP Certification' },
    { image: '/images/sgs-gmp.png', imageAlt: 'SGS GMP Certification' },
    { image: '/images/sgs-gmp.png', imageAlt: 'SGS GMP Certification' },
    { image: '/images/sgs-gmp.png', imageAlt: 'SGS GMP Certification' },
    { image: '/images/sgs-gmp.png', imageAlt: 'SGS GMP Certification' },
    { image: '/images/sgs-gmp.png', imageAlt: 'SGS GMP Certification' },
  ];

  return (
    <section className="overflow-hidden bg-[#FFF8EE] py-12 md:py-16 lg:py-20">
      <div className="flex flex-col gap-8 sm:gap-12 lg:gap-14">
        <div className="main-container">
          <SectionHeader title="Certifications" />
        </div>
        <div className="flex overflow-hidden">
          {Array(2)
            .fill(null)
            .map((_, repeatIndex) => (
              <div
                key={repeatIndex}
                className="slider-track flex flex-none gap-4 px-2 sm:gap-10 sm:px-5 md:gap-12 md:px-6 lg:gap-14 lg:px-7"
              >
                {awardIcons?.map((item, index) => (
                  <div
                    key={`${repeatIndex}-${index}`}
                    className="w-[130px] sm:w-[148px] mx-auto flex-shrink-0"
                  >
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className="sm:grayscale hover:grayscale-0 w-full h-auto transition duration-300"
                    />
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
