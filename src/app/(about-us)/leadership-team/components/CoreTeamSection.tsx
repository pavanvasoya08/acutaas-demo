import SectionHeader from '@/components/common/SectionHeader';
import CoreTeam from '@/lib/data/coreTeam.json';
import Link from 'next/link';

interface SocialIconsProps {
  Instagram: string;
  Linkedin: string;
  Facebook: string;
  [key: string]: string;
}
const socialIcons: SocialIconsProps = {
  Instagram: '/images/team-instagram.svg',
  Linkedin: '/images/team-linkedin.svg',
  Facebook: '/images/team-facebook.svg',
};

const CoreTeamSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-20 overflow-hidden">
      <div className="main-container">
        <div className="flex flex-col gap-8 md:gap-10 lg:gap-14">
          <SectionHeader title="Core Team" />
          <div className="grid grid-cols-1 gap-3 md:gap-4 lg:gap-5 items-end text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] !leading-tight font-semibold">
              People Behind Our Progress
            </h2>
            <p>Experienced minds driving innovation and building a sustainable future</p>
          </div>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {CoreTeam.map((member, index) => (
              <div key={index} className="group relative overflow-hidden">
                <div className="relative">
                  <img src={member.image} alt={member.name} />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(35,31,32,0)_60%,#231F20_100%)]"></div>
                  <div className="absolute left-6 right-6 bottom-6 flex flex-col">
                    <h3 className="text-white text-lg md:text-xl !leading-[1.2] font-semibold mt-1">
                      {member.name}
                    </h3>
                    <p className="!text-sm !leading-[1.28] text-white">{member.position}</p>
                  </div>
                </div>
                <div className="p-6 absolute inset-0 bg-[#F99D1C] flex flex-col gap-4 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                  <div>
                    <p className="text-lg md:text-xl !leading-[1.2] font-semibold mb-1">
                      {member.name}
                    </p>
                    <p className="text-sm">{member.position}</p>
                  </div>
                  <p className="text-sm opacity-70">{member.description}</p>
                  <div className="flex items-center gap-6 mt-auto">
                    {member.socialLinks?.map((link, index) => {
                      const iconSrc = socialIcons[link.platform];
                      return link.url && iconSrc ? (
                        <Link
                          key={index}
                          href={link.url}
                          target="_blank"
                          className="w-10 h-10 p-[10px] rounded-full border border-[#231F20] flex items-center justify-center"
                        >
                          <img src={socialIcons[link.platform]} alt={link.platform} />
                        </Link>
                      ) : null;
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <p className="!leading-[1.2] text-[#231F20] font-semibold text-xl md:text-3xl lg:text-[40px]">
              Our Leadership team is the driving force behind everything we do. Our diverse
              leadership team brings together decades of collective experience, ensuring strategic
              direction while maintaining the highest standards of corporate governance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreTeamSection;
