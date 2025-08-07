'use client';
import React, { useEffect, useState } from 'react';
import investorData from '@/lib/data/navigation.json';
import { FlatIcon } from '../Flaticon';
import Link from 'next/link';

interface NavItem {
  label: string;
  href: string;
  hasSubmenu?: boolean;
  submenuItems?: NavItem[];
}

const InvestorMegaMenu = () => {
  const investorMenu = investorData.navbar.find((item) => item.label === 'Investor') as NavItem;

  const [menuPath, setMenuPath] = useState<string[]>(
    investorMenu?.submenuItems?.[0]?.label ? [investorMenu.submenuItems[0].label] : []
  );

  const findCurrentMenu = (menu: NavItem, path: string[]): NavItem => {
    let current = menu;
    for (let label of path) {
      current = current.submenuItems?.find((item) => item.label === label) as NavItem;
    }
    return current;
  };

  const handleItemClick = (label: string) => {
    setMenuPath((prev) => [...prev, label]);
  };

  const handleBack = () => {
    setMenuPath((prev) => prev.slice(0, -1));
  };

  const currentMenu = findCurrentMenu(investorMenu, menuPath);

  const ROWS_PER_COLUMN = 7;

  const getColumnChunks = (items: NavItem[], rowsPerColumn: number): NavItem[][] => {
    const columns: NavItem[][] = [];
    const columnCount = Math.ceil(items.length / rowsPerColumn);

    for (let col = 0; col < columnCount; col++) {
      const chunk = items.slice(col * rowsPerColumn, (col + 1) * rowsPerColumn);
      columns.push(chunk);
    }

    return columns;
  };

  const columns = getColumnChunks(currentMenu.submenuItems || [], ROWS_PER_COLUMN);

  const [key, setKey] = useState(0);
  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [menuPath]);

  return (
    <div className="bg-white border-t-[2px] border-[#231F200D]">
      <div className="main-container">
        <div className="py-6">
          <div className="flex flex-wrap items-end gap-1">
            <span className="text-[#231F20] text-2xl !leading-none font-semibold">Investor</span>
            {menuPath.map((label, index) => (
              <React.Fragment key={label}>
                <span
                  className={`text-base !leading-none ${
                    index === menuPath.length - 1 ? 'text-[#8F7C79]' : 'text-[#8F7C79]'
                  }`}
                >
                  /
                </span>
                <span
                  key={key}
                  className={`cursor-pointer hover:underline text-base !leading-none ${index === menuPath.length - 1 ? 'text-[#8F7C79] fade-in' : 'text-[#8F7C79]'}`}
                  onClick={() => setMenuPath(menuPath.slice(0, index + 1))}
                >
                  {label}
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="flex gap-6 py-6">
          <div className="w-1/3 bg-[#FFF8EE] p-5 rounded-2xl">
            {investorMenu.submenuItems?.map((item) => (
              <button
                key={item.label}
                onMouseEnter={() => setMenuPath([item.label])}
                className={`transition-all duration-300 group text-left w-full py-4 px-3 flex items-center justify-between ${
                  menuPath[0] === item.label ? 'font-semibold' : 'hover:font-semibold'
                }`}
              >
                {item.label}
                <FlatIcon
                  icon="angle-small-right"
                  className={`!text-xl !leading-none transition-all duration-300 ${menuPath[0] === item.label ? 'flex' : 'opacity-0 invisible group-hover:visible group-hover:opacity-100'}`}
                />
              </button>
            ))}
          </div>

          <div className="w-2/3 pt-2">
            {menuPath.length > 1 && (
              <div className="flex items-center gap-2 mb-5">
                <button onClick={handleBack}>
                  <FlatIcon
                    icon="angle-small-left"
                    className="!text-xl !leading-none text-[#231F20]"
                  />
                </button>
                <h3 className="text-sm !leading-none font-medium text-[#231F20]">
                  {menuPath[menuPath.length - 1]}
                </h3>
              </div>
            )}

            <div className="grid grid-cols-2 gap-6">
              {columns.map((columnItems, colIndex) => (
                <ul key={colIndex} className="flex flex-col gap-7">
                  {columnItems.map((item) => (
                    <li key={item.label} className="flex items-center w-full">
                      {item.hasSubmenu ? (
                        <button
                          onClick={() => handleItemClick(item.label)}
                          className="text-sm !leading-snug text-[#231F20] flex justify-between items-center w-full"
                        >
                          {item.label}
                          <FlatIcon icon="angle-small-right" className="!text-lg !leading-snug" />
                        </button>
                      ) : (
                        <Link
                          href={item.href}
                          className="block text-sm !leading-snug text-[#231F20] w-full"
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorMegaMenu;
