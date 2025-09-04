'use client';

import { useState } from 'react';
import SectionHeader from '@/components/common/SectionHeader';
import { FlaskConical, BookText, Beaker, Plus, X } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import SectionSideIntro from '@/components/common/SectionSideIntro';

interface AreaItem {
  title: string;
  content: string;
}

const ResearchAreasSection: React.FC = () => {
  const items: AreaItem[] = [
    {
      title: 'New Chemical Entities',
      content:
        'Our work in NCEs drives the discovery and development of novel molecules, opening opportunities for new products and applications that meet emerging market and societal needs.',
    },
    {
      title: 'Contract Research & Manufacturing',
      content:
        'Through CRAMS, we provide end-to-end research and production solutions, combining scientific expertise, operational flexibility, and quality to deliver projects efficiently and reliably.',
    },
    {
      title: 'Green Chemistry',
      content:
        'We apply eco-friendly methods to chemical processes, reducing waste, conserving resources, and ensuring that innovation supports a cleaner, more sustainable future.',
    },
    {
      title: 'Chiral & Biocatalytic Chemistr',
      content:
        'Our expertise in chiral and biocatalytic chemistry delivers precision molecules with high selectivity and efficiency, enabling advanced intermediates for complex applications.',
    },
    {
      title: 'Advanced Intermediates',
      content:
        'We design and produce advanced intermediates that meet stringent quality requirements, supporting industries with reliable building blocks for specialized applications.',
    },
  ];

  return (
    <section className="overflow-hidden pb-12 md:pb-16 lg:pb-20">
      <div className="main-container">
        <div className="flex flex-col gap-8 md:gap-10 lg:gap-14">
          <SectionHeader title="Key Manufacturing" />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="hidden lg:block overflow-hidden rounded-2xl">
              <img src="/images/research-area-image.png" alt="Researcher at microscope" />
            </div>

            <div className="flex flex-col gap-5 md:gap-7 lg:gap-9">
              <div className="flex flex-col gap-3 md:gap-5">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] !leading-tight font-semibold text-center md:text-left">
                  Advancing Research Frontiers
                </h2>
                <p className="text-[#8F7C79] text-sm md:text-base text-center md:text-left">
                  We explore strategic areas of study that drive innovation, enable breakthroughs,
                  and strengthen our role in shaping the future of chemistry.
                </p>
              </div>

              <div className="rounded-2xl bg-white">
                <Accordion type="single" defaultValue="item-1">
                  {items.map((item, index) => (
                    <AccordionItem key={item.title} value={`item-${index + 1}`}>
                      <AccordionTrigger className="group">{item.title}</AccordionTrigger>
                      <AccordionContent className="text-[#453A3D]">
                        <p>{item.content}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchAreasSection;

// import SectionHeader from '@/components/common/SectionHeader';
// import { FlatIcon } from '@/components/Flaticon';
// import Button from '@/components/ui/Button';
// import Link from 'next/link';

// const manufacturingData = {
//   features: [
//     'Culture of Precision and Agility',
//     'People Who Build What Lasts',
//     'Advanced Thinking in Every Lab',
//     'Scalable Systems for Tomorrow',
//     'Innovation-Driven Research',
//     'Innovation-Driven Research',
//   ],
// };

// const KeyManufacturingSection: React.FC = () => {
//   return (
//     <section className="pb-16 lg:pb-20 overflow-hidden py-8 md:py-10 lg:py-[50px]">
//       <div className="main-container">
//         <div className="flex flex-col gap-8 md:gap-10 lg:gap-14">
//           <SectionHeader title="Key Manufacturing" />
//           <div className="flex flex-wrap items-stretch justify-between gap-8 sm:gap-10 lg:flex-nowrap lg:gap-14">
//             <div className="rounded-2xl overflow-hidden max-w-[528px] mx-auto lg:mx-0">
//               <img src="/images/manufacturing-image.png" alt="" />
//             </div>
//             <div className=" flex flex-col gap-6 lg:gap-16 max-w-[588px] mx-auto lg:mx-0 h-full justify-between">
//               <div>
//                 <div className="flex flex-col gap-5 lg:w-[77%]">
//                   <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold leading-snug">
//                     Evolving Chemistry Since 2004
//                   </h2>
//                   <p className="text-base mx-auto lg:mx-0">
//                     Founded in 2004 and rebranded as ACUTAAS in 2025, we have grown from a
//                     specialized intermediate firm into a publicly listed global enterprise focused
//                     on research driven chemistry and scalable innovation.
//                   </p>
//                 </div>
//                 <div className="border-t border-[#BCB2B2] w-full my-8 lg:my-10"></div>
//               </div>
//               <div>
//                 <p className="section-subtitle">What Drives Us Every Day</p>
//                 <div className="grid md:grid-cols-2 gap-y-4 gap-x-4 md:gap-x-6 mt-7">
//                   {manufacturingData.features.map((feature, index) => (
//                     <div key={index} className="flex gap-3 items-start">
//                       <FlatIcon
//                         icon="comment-check"
//                         type="solid"
//                         size={20}
//                         className="text-[#B03B23]"
//                       />
//                       <p>{feature}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default KeyManufacturingSection;
