'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { FlatIcon } from '../Flaticon';
import nav from '@/lib/data/navigation.json';

const Footer: React.FC = () => {
  const pathname = usePathname();

  const socialLinks = [
    { src: '/images/linkedin-footer-icon.svg', alt: 'LinkedIn', href: '#' },
    { src: '/images/instagram-footer-icon.svg', alt: 'Instagram', href: '#' },
    { src: '/images/facebook-footer-icon.svg', alt: 'Facebook', href: '#' },
    { src: '/images/youtube-footer-icon.svg', alt: 'YouTube', href: '#' },
    { src: '/images/whatsapp-footer-icon.svg', alt: 'WhatsApp', href: '#' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <footer className="pb-10 pt-16 lg:pt-20 bg-[#231F20]">
      <div className="main-container">
        <div className="grid grid-col-1 gap-10 lg:grid-cols-4 lg:gap-6">
          <div className="flex flex-col gap-4 lg:gap-8">
            <div className="w-full max-w-[226px]">
              <img src="/images/acutaas-website-logo-white.svg" alt="" />
            </div>
            <p className="text-sm text-[#8C8C8C]">
              We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud equip ex ea commodo consequat...{' '}
              <span className="text-[#AEBDE5] hover:underline">Read More</span>
            </p>
            <div className="flex lg:hidden flex-wrap gap-y-2 gap-x-3">
              {nav.footer.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`text-sm transition-colors duration-200 ${
                    isActive(link.href)
                      ? 'text-header font-bold'
                      : 'text-footer-light hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex gap-4 lg:gap-5 mt-auto">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} className="w-6 h-6" aria-label={social.alt}>
                  <img src={social.src} alt={social.alt} />
                </a>
              ))}
            </div>
          </div>
          <div className="lg:col-span-3 flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-wrap justify-between md:flex-col gap-6">
                <h3 className="footer-title">Contact Us</h3>
                <div className="flex items-center gap-3">
                  <FlatIcon icon="phone-call" className="!text-xl text-[#8C8C8C]" />
                  <div>
                    <span className="text-[#8C8C8C] text-xs !leading-none mb-1 inline-block">
                      Have a question?
                    </span>
                    <div className="text-base text-white !leading-none">
                      +91 75730 15366 / +91 72279 77744
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6">
                    <img src="/images/footer-mail-icon.svg" alt="Mail Icon" />
                  </div>
                  <div>
                    <span className="text-[#8C8C8C] text-xs !leading-none mb-1 inline-block">
                      Contact us at
                    </span>
                    <div className="text-base text-white !leading-none">info@acutaas.com</div>
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <img src="/images/footer-map-image.png" alt="" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-3 md:gap-6">
                <h3 className="footer-title">Address: Unit-I</h3>
                <p className="text-sm text-[#8C8C8C]">
                  440/4, 5, 6, 8206-B, <br />
                  478, 479 & 494, 495, <br />
                  Road No : 82/A & 82/C, G.I.D.C, <br />
                  Sachin, Surat - 394230, <br />
                  Gujarat - INDIA
                </p>
              </div>
              <div className="flex flex-col gap-3 md:gap-6">
                <h3 className="footer-title">Address: Unit-II</h3>
                <p className="text-sm text-[#8C8C8C]">
                  Plot No. 127/1 G.I.D.C. Industrial Estate, <br />
                  Ankleshwar - 393 002, <br />
                  Gujarat State, INDIA
                </p>
              </div>
              <div className="flex flex-col gap-3 md:gap-6">
                <h3 className="footer-title">Address: Unit-III</h3>
                <p className="text-sm text-[#8C8C8C]">
                  Plot No. 910/1/B, <br />
                  G.I.D.C. Jhagadia - 393 110, <br />
                  Gujarat State, INDIA
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 mt-12 lg:gap-10 lg:mt-16">
          <div className="hidden lg:flex flex-wrap justify-between items-center gap-6">
            {nav.footer.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`text-sm transition-colors duration-200 ${
                  isActive(link.href)
                    ? 'text-header font-bold'
                    : 'text-footer-light hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-6">
            <div className="h-[1px] w-full bg-secondary-light"></div>
            <div className="flex justify-center px-4 sm:px-14">
              <p className="text-sm lg:text-base text-footer text-center">
                © {new Date().getFullYear()}, All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
