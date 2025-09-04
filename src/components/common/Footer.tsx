'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { FlatIcon } from '../Flaticon';
import nav from '@/lib/data/navigation.json';
import Link from 'next/link';

const Footer: React.FC = () => {
  const pathname = usePathname();

  const socialLinks = [
    {
      src: '/images/linkedin-footer-icon.svg',
      alt: 'LinkedIn',
      href: 'https://www.linkedin.com/company/acutaas-chemicals-limited/',
    },
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
    <footer className="pb-10 pt-16 lg:pt-20 bg-[#3E0E04] text-sm 3xl:text-lg">
      <div className="main-container">
        <div className="grid grid-col-1 gap-10 lg:grid-cols-4 lg:gap-6">
          <div className="flex flex-col gap-4 lg:gap-8">
            <div className="w-full max-w-[226px] 3xl:max-w-[300px]">
              <img src="/images/acutaas-website-logo-white.svg" alt="Acutaas Logo" />
            </div>
            <p className="text-[#FFFFFF80]">
              ACUTAAS is a global chemical enterprise with over two decades of experience, having
              served customers in 55 countries with products, services, and solutions having
              applications in varied industries driven by research, innovation, and sustainability.{' '}
              <Link href="/about-us" className="text-[#F99D1C] hover:underline">
                Read More
              </Link>
            </p>
            <div className="flex lg:hidden flex-wrap gap-y-2 gap-x-3">
              {nav.footer.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`transition-colors duration-200 ${
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
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  className="w-6 h-6 3xl:w-8 3xl:h-8"
                  aria-label={social.alt}
                >
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
                  <FlatIcon icon="phone-call" className="!text-xl 3xl:!text-2xl text-[#FFFFFF80]" />
                  <div>
                    <span className="text-[#FFFFFF80] text-xs 3xl:text-base !leading-none mb-1 inline-block">
                      Have a question?
                    </span>
                    <div className="text-base 3xl:text-xl text-white !leading-none">
                      <a href="tel:+917573015366">+91 75730 15366</a> /{' '}
                      <a href="tel:+917227977744">+91 72279 77744</a>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 3xl:w-6">
                    <img src="/images/footer-mail-icon.svg" alt="Mail Icon" />
                  </div>
                  <div>
                    <span className="text-[#FFFFFF80] text-xs 3xl:text-base !leading-none mb-1 inline-block">
                      Contact us at
                    </span>
                    <div className="text-base 3xl:text-xl text-white !leading-none">
                      <a href="mailto:info@acutaas.com">info@acutaas.com</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <iframe
                  // src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d299048.94331688527!2d72.84145148579967!3d21.362801465494847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAcutaas%20Chemicals%20L!5e1!3m2!1sen!2sin!4v1755061978215!5m2!1sen!2sin"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m10!1m3!1d951214.0221075533!2d72.51180817180013!3d21.36312269731501!2m1!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAcutaas%20Chemicals%20L!5e0!3m2!1sen!2sin!4v1755167516696!5m2!1sen!2sin"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-[146px] 3xl:h-[194px]"
                ></iframe>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-3 md:gap-6">
                <h3 className="footer-title">Address: Unit-I</h3>
                <a
                  href="https://maps.app.goo.gl/TTbtcjuyq2RdERwu6"
                  target="_blank"
                  className="text-[#FFFFFF80]"
                >
                  440/4, 5, 6, 8206-B, <br />
                  478, 479 & 494, 495, <br />
                  Road No : 82/A & 82/C, G.I.D.C, <br />
                  Sachin, Surat - 394230, <br />
                  Gujarat - INDIA
                </a>
              </div>
              <div className="flex flex-col gap-3 md:gap-6">
                <h3 className="footer-title">Address: Unit-II</h3>
                <a
                  href="https://maps.app.goo.gl/X7Cv1G8E39j6QS1P7"
                  target="_blank"
                  className="text-[#FFFFFF80]"
                >
                  Plot No. 127/1 G.I.D.C. Industrial Estate, <br />
                  Ankleshwar - 393 002, <br />
                  Gujarat State, INDIA
                </a>
              </div>
              <div className="flex flex-col gap-3 md:gap-6">
                <h3 className="footer-title">Address: Unit-III</h3>
                <a
                  href="https://maps.app.goo.gl/WWUsJR8tL6pdTYtFA"
                  target="_blank"
                  className="text-[#FFFFFF80]"
                >
                  Plot No. 910/1/B, <br />
                  G.I.D.C. Jhagadia - 393 110, <br />
                  Gujarat State, INDIA
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 mt-12 lg:gap-10 lg:mt-16">
          <div className="hidden lg:flex flex-wrap justify-between items-center gap-6">
            {nav.footer.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`transition-colors duration-200 ${
                  isActive(link.href)
                    ? 'text-header font-bold'
                    : 'text-[#FFFFFF80] hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-6">
            <div className="h-[1px] w-full bg-[#FFFFFF24]"></div>
            <div className="flex justify-center px-4 sm:px-14">
              <p className="text-[#FFFFFF80] text-center">
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
