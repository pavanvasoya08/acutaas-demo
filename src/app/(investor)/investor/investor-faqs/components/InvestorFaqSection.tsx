'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';
import { FlatIcon } from '@/components/Flaticon';

// Dynamic FAQ data
const faqTabsData: Record<string, { question: string; answer: string }[]> = {
  'General Information': [
    {
      question: 'What does your company do?',
      answer:
        'We provide technology-driven investment solutions for institutional and retail investors.',
    },
    {
      question: 'How long have you been in business?',
      answer: 'Our company was founded in 2012 and has been growing steadily ever since.',
    },
    {
      question: 'Where are your offices located?',
      answer: 'We operate globally with offices in New York, London, Singapore, and Berlin.',
    },
    {
      question: 'Are you regulated by any financial authority?',
      answer:
        'Yes, we are registered and regulated by the SEC and other international regulatory bodies.',
    },
    {
      question: 'What industries do you invest in?',
      answer: 'We focus on tech, healthcare, real estate, and renewable energy sectors.',
    },
    {
      question: 'Can individuals invest directly?',
      answer: 'Yes, qualified individuals can invest directly through our platform.',
    },
    {
      question: 'What is the company mission?',
      answer:
        'To democratize investing and provide transparent, data-driven opportunities to everyone.',
    },
    {
      question: 'Do you offer internships or career opportunities?',
      answer: 'Yes, check our Careers page for current job and internship openings.',
    },
    {
      question: 'How can I stay updated with company news?',
      answer:
        'Subscribe to our newsletter or follow us on LinkedIn and Twitter for the latest updates.',
    },
  ],

  'Investment Plans': [
    {
      question: 'What types of investment plans do you offer?',
      answer: 'We offer growth, income, balanced, and sector-specific investment plans.',
    },
    {
      question: 'Is there a minimum investment requirement?',
      answer: 'Yes, the minimum investment starts at $10,000 depending on the plan.',
    },
    {
      question: 'Can I change my plan later?',
      answer: 'Yes, you can switch plans once per quarter through your investor dashboard.',
    },
    {
      question: 'Are the returns guaranteed?',
      answer: 'No, all investments carry risk, and returns are not guaranteed.',
    },
    {
      question: 'Do you offer tax-efficient plans?',
      answer: 'Yes, we provide tax-optimized portfolios tailored to your region.',
    },
    {
      question: 'How are the investments managed?',
      answer:
        'Our investment team actively manages portfolios using algorithmic and manual strategies.',
    },
    {
      question: 'Can I invest in international markets?',
      answer: 'Yes, we provide access to global investment opportunities across multiple regions.',
    },
    {
      question: 'What fees do you charge?',
      answer: 'We charge a management fee of 1% annually, with no hidden costs.',
    },
    {
      question: 'How do I compare different plans?',
      answer:
        'Use our plan comparison tool on the website to evaluate different investment options.',
    },
  ],

  'Account Management': [
    {
      question: 'How do I create an account?',
      answer:
        'Click on the "Sign Up" button and follow the registration process, which takes 2-3 minutes.',
    },
    {
      question: 'How do I reset my password?',
      answer: 'Go to the login page and click "Forgot Password" to receive reset instructions.',
    },
    {
      question: 'Can I open multiple accounts?',
      answer: 'No, we currently allow one account per individual or legal entity.',
    },
    {
      question: 'How do I update my contact information?',
      answer:
        'Log in to your dashboard and navigate to Account Settings to update your information.',
    },
    {
      question: 'Is two-factor authentication supported?',
      answer: 'Yes, we recommend enabling 2FA for additional account security.',
    },
    {
      question: 'Can I close my account at any time?',
      answer: 'Yes, you can request account closure at any time, subject to pending transactions.',
    },
    {
      question: 'What if I forget my login credentials?',
      answer: 'Use the password recovery tool or contact support for assistance.',
    },
    {
      question: 'Can I access my account from mobile devices?',
      answer: 'Yes, our platform is fully responsive and mobile-friendly.',
    },
    {
      question: 'Is my personal data secure?',
      answer:
        'Absolutely. We use bank-level encryption and comply with global data protection standards.',
    },
  ],

  'Investor Support': [
    {
      question: 'How do I contact support?',
      answer:
        'You can reach our support team via live chat, email, or the contact form on our website.',
    },
    {
      question: 'What is the typical response time?',
      answer: 'Our average response time is under 24 hours on business days.',
    },
    {
      question: 'Do you offer dedicated account managers?',
      answer: 'Yes, premium investors are assigned a dedicated relationship manager.',
    },
    {
      question: 'Is there phone support available?',
      answer: 'Yes, phone support is available Monday to Friday from 9 AM to 6 PM (local time).',
    },
    {
      question: 'Can I schedule a consultation?',
      answer: 'Yes, you can book a call with one of our investment advisors online.',
    },
    {
      question: 'Is support available in other languages?',
      answer: 'Currently, we support English, Spanish, French, and German.',
    },
    {
      question: 'Do you have a knowledge base?',
      answer: 'Yes, visit our Help Center for articles and FAQs.',
    },
    {
      question: 'Can I get updates on my investment status?',
      answer: 'Yes, real-time performance data is available in your dashboard.',
    },
    {
      question: 'Where can I report technical issues?',
      answer: 'Use the "Report a Problem" link in your dashboard or contact our support team.',
    },
  ],

  'Security & Compliance': [
    {
      question: 'How do you ensure data security?',
      answer:
        'We use end-to-end encryption, firewalls, and regular security audits to protect your data.',
    },
    {
      question: 'Are you compliant with global regulations?',
      answer: 'Yes, we comply with GDPR, CCPA, and other financial regulations.',
    },
    {
      question: 'Do you offer KYC and AML checks?',
      answer: 'Yes, we perform full KYC and AML compliance checks during onboarding.',
    },
    {
      question: 'Is my investment protected?',
      answer:
        'We follow industry best practices to safeguard your assets, though all investments carry risk.',
    },
    {
      question: 'How often is your platform audited?',
      answer: 'Our systems undergo annual third-party security and compliance audits.',
    },
    {
      question: 'Can I enable biometric login?',
      answer: 'Yes, biometric login is supported on mobile apps with Face ID and Touch ID.',
    },
    {
      question: 'What if there’s suspicious activity on my account?',
      answer: 'Immediately contact our fraud prevention team to lock down your account.',
    },
    {
      question: 'How do you handle data privacy?',
      answer: 'We do not sell your data and follow strict privacy policies outlined in our terms.',
    },
    {
      question: 'Do you offer insurance coverage?',
      answer:
        'Some investment products include third-party insurance. Contact support for details.',
    },
  ],
};

const InvestorFaqSection: React.FC = () => {
  const tabKeys = Object.keys(faqTabsData);

  const [currentTab, setCurrentTab] = useState(tabKeys[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [openFaqIndexes, setOpenFaqIndexes] = useState<Record<string, number>>(() =>
    Object.fromEntries(tabKeys.map((tab) => [tab, 0]))
  );

  const toggleFAQ = (tab: string, index: number) => {
    setOpenFaqIndexes((prev) => ({
      ...prev,
      [tab]: prev[tab] === index ? -1 : index,
    }));
  };

  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
    setIsDropdownOpen(false);
  };

  return (
    <section className="py-20">
      <div className="main-container">
        <Tabs
          value={currentTab}
          onValueChange={setCurrentTab}
          className="flex flex-col md:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16 items-start"
        >
          <div className="relative w-full block md:hidden">
            <div
              className="flex items-center justify-between p-4 border border-[#8F7C79] rounded-[10px] bg-[#FFF8EE] cursor-pointer"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span className="font-semibold">{currentTab}</span>
              <FlatIcon
                icon="angle-small-down"
                className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
              />
            </div>

            {isDropdownOpen && (
              <div className="overflow-hidden absolute top-full left-0 right-0 mt-1 bg-white border border-[#8F7C79] rounded-[10px] shadow-md z-10">
                {tabKeys.map((tab) => (
                  <div
                    key={tab}
                    className={`py-3 px-4 cursor-pointer ${tab === currentTab ? 'font-semibold bg-[#FFF8EE]' : ''}`}
                    onClick={() => handleTabChange(tab)}
                  >
                    {tab}
                  </div>
                ))}
              </div>
            )}
          </div>
          <TabsList className="bg-transparent p-0 hidden md:flex flex-col gap-3 items-stretch md:max-w-[220px] lg:max-w-[240px] 3xl:max-w-[320px] w-full flex-none">
            {tabKeys.map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="text-base 3xl:text-lg font-normal transition-all duration-300 border border-transparent rounded-[10px] justify-normal py-3 px-6 lg:px-8 !shadow-none text-[#231F20] data-[state=active]:font-semibold data-[state=active]:bg-[#FFF8EE] data-[state=active]:border-[#8F7C79]"
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>

          {tabKeys.map((tab) => (
            <TabsContent key={tab} value={tab} className="w-full fade-in duration-300">
              <div className="flex flex-col gap-6 sm:gap-8">
                {faqTabsData[tab].map((faq, index) => {
                  const isOpen = openFaqIndexes[tab] === index;

                  return (
                    <div
                      key={index}
                      className="border-t border-[#BCB2B2] pt-4 sm:pt-6 first:border-t-0 first:pt-0"
                    >
                      <div
                        className="flex items-center justify-between gap-6 cursor-pointer"
                        onClick={() => toggleFAQ(tab, index)}
                      >
                        <p
                          className={`text-[#231F20] transition-all duration-500 text-base sm:text-lg 3xl:text-xl !leading-[1.22] ${
                            isOpen ? 'font-semibold' : 'font-normal'
                          }`}
                        >
                          {faq.question}
                        </p>
                        <div className="flex-none w-5 h-5 sm:w-6 sm:h-6 border-2 border-[#B03B23] rounded-full flex items-center justify-center relative">
                          <div className="w-2.5 sm:w-3 h-0.5 bg-[#B03B23] rounded-full"></div>
                          <div
                            className={`w-0.5 h-2.5 sm:h-3 bg-[#B03B23] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                              isOpen ? 'rotate-90 opacity-0' : 'opacity-100 rotate-0'
                            }`}
                          ></div>
                        </div>
                      </div>

                      <div
                        className={`grid transition-all duration-500 ease-in-out ${
                          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="pr-12 pt-2 text-[#8F7C79]">
                            {faq.answer} {faq.answer} {faq.answer}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default InvestorFaqSection;
