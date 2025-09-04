'use client';

import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import navbarData from '@/lib/data/navigation.json';
import { usePathname } from 'next/navigation';
import { FlatIcon } from '../Flaticon';
import { useState } from 'react';
import InvestorMegaMenu from './InvestorMegaMenu';

type MenuItem = {
  label: string;
  href?: string;
  hasSubmenu?: boolean;
  submenuItems?: MenuItem[];
};

function isActive(pathname: string, href?: string): boolean {
  return href ? pathname === href : false;
}

function hasActiveChild(item: any, pathname: string): boolean {
  if (isActive(pathname, item.href)) return true;
  if (item.submenuItems) {
    return item.submenuItems.some((child: any) => hasActiveChild(child, pathname));
  }
  return false;
}

const RenderMenuItem: React.FC<{ item: MenuItem }> = ({ item }) => {
  const pathname = usePathname();
  const isSubActive = isActive(pathname, item.href) || hasActiveChild(item, pathname);
  const subCls = `py-4 px-6 !border-b !border-[#BCB2B2] !rounded-none last:!border-b-0 !text-base 3xl:!text-xl !leading-none transition-all duration-300 !bg-transparent hover:!text-[#F99D1C] ${
    isSubActive ? 'text-[#F99D1C] font-bold' : 'text-[#231F20]'
  }`;

  if (item.hasSubmenu && item.submenuItems) {
    return (
      <DropdownMenuSub>
        <DropdownMenuSubTrigger className={`${subCls} flex items-center justify-between`}>
          {item.label}
          <FlatIcon
            icon="angle-small-right"
            type={`${isSubActive ? 'bold' : 'regular'}`}
            className="!text-xl"
          />
        </DropdownMenuSubTrigger>
        <DropdownMenuSubContent
          className="!border !border-[#BCB2B2] rounded-2xl shadow-none"
          sideOffset={4}
          alignOffset={-4}
        >
          {item.submenuItems.map((sub, idx) => (
            <RenderMenuItem key={idx} item={sub} />
          ))}
        </DropdownMenuSubContent>
      </DropdownMenuSub>
    );
  }

  return (
    <DropdownMenuItem asChild>
      <Link href={item.href || '#'} className={`${subCls} cursor-pointer`}>
        {item.label}
      </Link>
    </DropdownMenuItem>
  );
};

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-8">
      {navbarData.navbar.map((item: MenuItem, index: number) => {
        const isTopActive = isActive(pathname, item.href) || hasActiveChild(item, pathname);
        const cls = `!text-base 3xl:!text-xl !leading-tight transition-all duration-300 hover:text-[#F99D1C] ${isTopActive ? 'font-bold text-[#F99D1C]' : 'text-[#231F20]'}`;
        const isInvestor = item.label === 'Investor';

        if (item.hasSubmenu && item.submenuItems) {
          return (
            <DropdownMenu
              key={index}
              open={openMenu === index}
              onOpenChange={(isOpen) => setOpenMenu(isOpen ? index : null)}
            >
              <DropdownMenuTrigger
                className={`${cls} flex items-center gap-1 outline-none py-6`}
                onMouseEnter={() => setOpenMenu(index)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                {item.label}
                <FlatIcon
                  icon="angle-small-down"
                  type={`${isTopActive ? 'bold' : 'regular'}`}
                  className="!text-xl"
                />
              </DropdownMenuTrigger>
              {isInvestor ? (
                openMenu === index && (
                  <div
                    onMouseEnter={() => setOpenMenu(index)}
                    onMouseLeave={() => setOpenMenu(null)}
                    className="absolute top-full left-0 w-full z-50"
                  >
                    <InvestorMegaMenu />
                  </div>
                )
              ) : (
                <DropdownMenuContent
                  sideOffset={0}
                  onMouseEnter={() => setOpenMenu(index)}
                  onMouseLeave={() => setOpenMenu(null)}
                  className="!border !border-[#BCB2B2] rounded-2xl shadow-none"
                >
                  {item.submenuItems.map((sub, idx) => (
                    <RenderMenuItem key={idx} item={sub} />
                  ))}
                </DropdownMenuContent>
              )}
            </DropdownMenu>
          );
        }

        return (
          <Link key={index} href={item.href || '#'} className={`${cls} inline-block`}>
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
