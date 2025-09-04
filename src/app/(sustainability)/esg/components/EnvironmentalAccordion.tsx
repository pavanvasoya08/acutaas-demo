'use client';
import { EnvironmentTabs } from '@/lib/data/EnvironmentAccordion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';

const EnvironmentalAccordion: React.FC = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.4, ease: 'linear' }
      );
    }
  }, [activeTab]);

  const currentTab = EnvironmentTabs.find((tab) => tab.id === activeTab)!;
  return (
    <Tabs
      value={activeTab}
      onValueChange={setActiveTab}
      className="flex flex-col gap-8 md:gap-10 lg:gap-14"
    >
      <TabsList className="border border-[#BCB2B24D] bg-white rounded-2xl md:rounded-3xl p-2 md:p-2.5 self-center flex items-center gap-1.5 md:gap-5">
        {EnvironmentTabs?.map((item) => (
          <TabsTrigger
            key={`tab-${item?.id}`}
            className="text-base 3xl:text-xl py-2 px-3 md:py-3 md:px-5 lg:px-7 rounded-xl md:rounded-2xl duration-300 data-[state=active]:bg-[#231F20] data-[state=active]:text-white"
            value={item?.id}
          >
            {item?.tabName}
          </TabsTrigger>
        ))}
      </TabsList>

      <TabsContent ref={contentRef} value={currentTab.id}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 3xl:gap-16 items-center">
          <div className="hidden lg:block overflow-hidden rounded-2xl">
            <img src={currentTab.image} alt="Researcher at microscope" />
          </div>

          <div className="flex flex-col gap-5 md:gap-7 lg:gap-9">
            <div className="flex flex-col gap-3 md:gap-5">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] 3xl:text-[50px] font-semibold !leading-[1.2] text-center md:text-left">
                {currentTab.title}
              </h2>
              <p>{currentTab.description}</p>
            </div>

            <div className="rounded-2xl bg-white">
              <Accordion type="single" defaultValue="item-1">
                {currentTab.accordions?.map((item, index) => (
                  <AccordionItem key={item.id} value={`item-${index + 1}`}>
                    <AccordionTrigger
                      className="group"
                      icon={
                        <span className="flex h-8 w-8 3xl:w-10 3xl:h-10 items-center justify-center rounded-md">
                          {item?.icon}
                        </span>
                      }
                    >
                      {item?.trigger}
                    </AccordionTrigger>
                    <AccordionContent className="text-[#453A3D]">
                      <p>{item?.content}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default EnvironmentalAccordion;
