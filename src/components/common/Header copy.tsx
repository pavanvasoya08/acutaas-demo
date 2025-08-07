'use client';
import React, { useState } from 'react';
import Button from '../ui/Button';
import { FlatIcon } from '../Flaticon';
import nav from '@/lib/data/navigation.json';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface SubmenuItem {
  label: string;
  href: string;
}

interface MenuItem {
  label: string;
  href: string;
  hasSubmenu?: boolean;
  submenuItems?: SubmenuItem[];
}

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubmenu = (menu: string) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
  };

  const isActive = (href: string) => {
    return pathname === href;
  };

  const isParentActive = (item: MenuItem) => {
    if (!item.hasSubmenu || !item.submenuItems) return false;
    return item.submenuItems.some((subItem) => isActive(subItem.href));
  };

  return (
    <header className="w-full bg-main border-b-2 border-[#231F200D] sticky top-0 z-50 py-4 md:py-6 lg:py-8">
      <div className="main-container header-container">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex-shrink-0 w-full max-w-[176px]">
            <img src="/images/acutaas-website-logo.svg" alt="Acutaas Logo" />
          </Link>

          <nav className="hidden xl:flex items-center gap-9">
            {(nav.navbar as MenuItem[]).map((item, index) => (
              <div key={index} className="relative group">
                {item.hasSubmenu ? (
                  <div className="relative">
                    <button
                      className={`flex items-center gap-1 transition-colors duration-300 ${
                        isActive(item.href) || isParentActive(item)
                          ? 'text-header font-bold'
                          : 'text-primary-main hover:text-header'
                      }`}
                      role="menuitem"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {item.label}
                      <FlatIcon
                        icon={'angle-small-down'}
                        type={'regular'}
                        className="!text-[20px]"
                      />
                    </button>

                    <div className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <ul role="menu" className="py-2">
                        {item.submenuItems?.map((subItem, subIndex) => (
                          <li key={subIndex} role="menuitem">
                            <a
                              href={subItem.href}
                              className={`block px-4 py-2 text-sm transition-colors duration-300 ${
                                isActive(subItem.href)
                                  ? 'text-header font-semibold bg-gray-100'
                                  : 'text-primary-main hover:bg-gray-50 hover:text-header'
                              }`}
                            >
                              {subItem.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className={`transition-colors duration-300 ${
                      isActive(item.href)
                        ? 'text-header font-bold'
                        : 'text-primary-main hover:text-header'
                    }`}
                    role="menuitem"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden xl:block">
            <Button variant="primary" size="sm">
              Contact Us
            </Button>
          </div>

          <button
            className="xl:hidden p-2 rounded-md text-primary-main hover:text-header transition-colors duration-300"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <nav className={`xl:hidden ${isMenuOpen ? 'block' : 'hidden'} pb-6`}>
          <div className="space-y-2">
            {(nav.navbar as MenuItem[]).map((item, index) => (
              <div key={index}>
                {item.hasSubmenu ? (
                  <div>
                    <button
                      onClick={() => toggleSubmenu(item.label)}
                      className={`flex items-center justify-between w-full px-4 py-3 text-left text-base font-normal transition-colors duration-300 ${
                        isActive(item.href) || isParentActive(item)
                          ? 'text-header font-bold bg-gray-50'
                          : 'text-primary-main hover:text-header hover:bg-gray-50'
                      }`}
                    >
                      {item.label}
                      <FlatIcon
                        icon={'angle-small-down'}
                        type={'regular'}
                        className={`!text-[20px] transition-transform duration-300 ${
                          activeSubmenu === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {activeSubmenu === item.label && (
                      <div className="bg-gray-50 border-l-2 border-primary">
                        {item.submenuItems?.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href={subItem.href}
                            className={`block px-8 py-2 text-sm transition-colors duration-300 ${
                              isActive(subItem.href)
                                ? 'text-header font-semibold bg-gray-100'
                                : 'text-primary-main hover:text-header'
                            }`}
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className={`block px-4 py-3 text-base font-normal transition-colors duration-300 ${
                      isActive(item.href)
                        ? 'text-header font-bold bg-gray-50'
                        : 'text-primary-main hover:text-header hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}

            <div className="px-4 pt-4">
              <Button variant="primary" size="md" fullWidth className="text-sm font-medium">
                Contact Us
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
