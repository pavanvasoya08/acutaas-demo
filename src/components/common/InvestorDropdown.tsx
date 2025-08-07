'use client';

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from '@/components/ui/dropdown-menu';

interface MenuItem {
  label: string;
  href?: string;
  submenuItems?: MenuItem[];
}

interface Props {
  label: string;
  menuItems: MenuItem[];
}

const DrillMenu: React.FC<{ items: MenuItem[] }> = ({ items }) => {
  return (
    <>
      {items.map((item, index) =>
        item.submenuItems ? (
          <DropdownMenuSub key={index}>
            <DropdownMenuSubTrigger className="flex justify-between items-center w-full py-4 px-6 border-b border-[#BCB2B2] rounded-none">
              {item.label}
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent
              className="border border-[#BCB2B2]"
              sideOffset={8}
              alignOffset={-4}
            >
              <DrillMenu items={item.submenuItems} />
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        ) : (
          <DropdownMenuItem
            key={index}
            asChild
            className="py-4 px-6 border-b border-[#BCB2B2] rounded-none"
          >
            <a href={item.href} className="w-full">
              {item.label}
            </a>
          </DropdownMenuItem>
        )
      )}
    </>
  );
};

export const DropdownWithDrill: React.FC<Props> = ({ label, menuItems }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-primary-main hover:text-header transition-colors px-4 py-2">
        {label}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        sideOffset={10}
        align="start"
        className="border border-[#BCB2B2] shadow-none"
      >
        <DrillMenu items={menuItems} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
