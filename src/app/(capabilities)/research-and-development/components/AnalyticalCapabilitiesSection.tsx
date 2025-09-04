import SectionHeader from '@/components/common/SectionHeader';
import Button from '@/components/ui/Button';
import CapabilityCard from './CapabilityCard';
import { FlatIcon } from '@/components/Flaticon';
import Link from 'next/link';

const AnalyticalCapabilitiesSection: React.FC = () => {
  const bullets = [
    'HPLC, UPLC, GC, LC-MS systems',
    'IR, UV, GC-MS, DSC analysis tools',
    'Impurity and stability studies',
    'Method development & transfer',
  ];

  return (
    <section className="overflow-hidden bg-[#FFF8EE] pt-7 md:pt-7 lg:pt-10 pb-12 md:pb-16 lg:pb-20">
      <div className="main-container">
        <div className="flex flex-col gap-8 md:gap-10 lg:gap-14">
          <SectionHeader title="Analytical capabilities" />
          <div className="flex flex-col sm:items-center gap-8 md:gap-10 lg:gap-12 text-center">
            <div className="flex flex-col items-center gap-4 md:gap-5 lg:gap-6">
              <h2 className="max-w-4xl text-3xl font-bold leading-tight text-[#231F20] sm:text-4xl md:text-5xl">
                Raising the Bar in Analytics
              </h2>
              <p className="text-[#453A3D]">
                Our analytical strength lies in precision and reliability. With advanced
                capabilities and skilled experts, our team ensures exact results every time. We
                excel in method development, impurity profiling, stability studies, and analytical
                tech transfer, enabling confident decisions and trusted outcomes.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 md:gap-5 lg:gap-6">
              <h4 className="text-xl font-semibold text-[#231F20]">Key Analytical Highlights</h4>

              <div className="grid grid-cols-1 gap-1 md:gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:gap-7 w-full">
                {bullets.map((text) => (
                  <li
                    key={text}
                    className="flex justify-start gap-2 md:gap-3 text-[#231F20] items-center"
                  >
                    <FlatIcon
                      icon="comment-check"
                      size={16}
                      type="solid"
                      className="text-[#B03B23]"
                    />
                    <span className="text-start text-[#231F20]">{text}</span>
                  </li>
                ))}
              </div>
            </div>

            <div className="sm:pt-2">
              <Link href="/infrastructure">
                <Button variant="primary">Explore Our Infrastructure</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticalCapabilitiesSection;
