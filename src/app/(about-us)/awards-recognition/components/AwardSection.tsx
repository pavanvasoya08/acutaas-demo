import SectionHeader from '@/components/common/SectionHeader';
import SectionIntro from '@/components/common/SectionIntro';
import React from 'react';

const AwardSection = () => {
  const awards = [
    {
      image: '/images/award-image.png',
      name: 'Southern Gujarat Chamber of Commerce and Industry (SGCCI) For Outstanding entrepreneur in MSME segment',
      description:
        'Recognized for exceptional leadership and vision in building a strong, competitive MSME business.',
    },
    {
      image: '/images/award-image.png',
      name: 'Federation of Gujarat Industries (FGI) For Outstanding Business Leader',
      description:
        'Honored for strategic leadership that strengthened growth and inspired excellence across the organization.',
    },
    {
      image: '/images/award-image.png',
      name: 'Trishul Award For Outstanding Export Performance For The Year 2017-18',
      description:
        'Awarded for exceptional export performance, expanding global reach and contributing to international trade.',
    },
    {
      image: '/images/award-image.png',
      name: 'Trishul Award For Outstanding Export Performance For The Year 2018-19',
      description:
        'Recognized for sustained export excellence, driving growth and strengthening presence in global markets.',
    },
    {
      image: '/images/award-image.png',
      name: 'Safe & Secure Manufacturing Facility For Fire & Safety Association of India',
      description:
        'Honored for creating a safe, compliant, and well-managed manufacturing environment.',
    },
    {
      image: '/images/award-image.png',
      name: 'Federation of Gujarat Industries For Award for excellence in R&D',
      description:
        'Awarded for pioneering research that delivered impactful, industry-relevant innovations.',
    },
    {
      image: '/images/award-image.png',
      name: 'SGCCI Golden Jubilee Award For Exceptional Contribution To R&D',
      description:
        'Recognized for exceptional contributions to research and development that advanced industry capabilities.',
    },
  ];

  return (
    <section className="overflow-hidden py-16 bg-white">
      <div className="main-container">
        <div className="flex flex-col gap-8 sm:gap-12 lg:gap-14">
          <SectionHeader title="Awards" />
          <SectionIntro
            title="Achievements That Mirror Our Impact"
            description="Behind every award is a team that showed up, stayed curious, and kept going. These honors are not just wins for us but nods to the trust, care and creation we bring to the chemical world."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {awards.map((award, index) => (
              <div key={index} className="group relative overflow-hidden">
                <div>
                  <img src={award.image} alt={award.name} className="bg-[#FFF8EE]" />
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent pointer-events-none p-6 flex flex-col justify-end text-white">
                    <h3
                      className="text-xl font-medium text-white"
                      style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {award.name}
                    </h3>
                  </div>
                </div>
                <div className="absolute inset-0 bg-[#F99D1C] p-6 flex flex-col justify-between translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">{award.name}</h3>
                    <p className="text-sm">{award.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardSection;
