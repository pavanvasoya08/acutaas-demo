import SectionHeader from '@/components/common/SectionHeader';
import StatCard from '@/components/common/StatCard';
import SectionIntro from '@/components/common/SectionIntro';

const stats = [
  {
    value: '43',
    label: 'Core Reactions',
    description: 'Expertise across diverse chemistries',
  },
  {
    value: '2',
    label: 'Reactor Types',
    description: 'Flow and microreactor capabilities',
  },
];

const ProcessChemistrySection: React.FC = () => {
  return (
    <section className="overflow-hidden py-12 md:py-16 lg:py-20">
      <div className="main-container">
        <div className="flex flex-col gap-8 md:gap-10 lg:gap-14">
          <SectionHeader title="Process chemistry capability & infrastructure" />

          <SectionIntro
            title="Chemistry Created for Industry Needs"
            description="ACUTAAS brings together deep chemical know-how and purpose-built infrastructure to create processes that are safe, scalable, and efficient for industries worldwide."
          />

          <div className="grid grid-cols-1 gap-5 md:gap-6 lg:grid-cols-3">
            <div className="overflow-hidden rounded-2xl">
              <img src="/images/chemistry-image-1.png" alt="Laboratory view" />
            </div>

            {/* Middle stacked stat cards */}
            <div className="flex flex-col gap-5 md:gap-6">
              {stats.map((s) => (
                <StatCard
                  key={s.value + s.label}
                  value={s.value}
                  label={s.label}
                  description={s.description}
                />
              ))}
            </div>

            {/* Right image */}
            <div className="overflow-hidden rounded-2xl">
              <img src="/images/chemistry-image-2.png" alt="Scientist at work" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessChemistrySection;
