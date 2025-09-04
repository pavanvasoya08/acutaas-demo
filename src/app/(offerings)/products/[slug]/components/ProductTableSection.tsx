'use client';

import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import TableData from '@/lib/data/ProductTable.json';
import { FlatIcon } from '@/components/Flaticon';

export default function IntermediatesTable() {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState(searchTerm);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  const filteredData = TableData.map((group) => ({
    ...group,
    intermediates: group.intermediates.filter((item) =>
      [group.apiName, item.name, item.casNo, item.stage]
        .join(' ')
        .toLowerCase()
        .includes(debouncedSearch.toLowerCase())
    ),
  })).filter((group) => group.intermediates.length > 0);

  return (
    <section className="py-16 lg:py-20">
      <div className="main-container">
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center gap-5 flex-col md:flex-row">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] 3xl:text-[50px] font-semibold !leading-[1.2]">
              Lorem Ipsum is simply dummy text
            </h2>
            <div className="relative w-full max-w-[424px] 3xl:max-w-[565px] ml-auto">
              <Input
                type="text"
                placeholder="Search CAS Number"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full h-12 3xl:h-16 border-[#BCB2B2] py-3 px-4 pl-11 !text-base 3xl:!text-xl placeholder:text-[#BCB2B2]"
              />
              <div className="absolute top-1/2 -translate-y-1/2 left-4">
                <FlatIcon icon="search" className="!text-xl text-[#BCB2B2]" />
              </div>
            </div>
          </div>

          {/* Table */}
          <Table>
            <TableHeader className="sticky top-0">
              <TableRow>
                <TableHead>API Name</TableHead>
                <TableHead>Intermediate Name</TableHead>
                <TableHead>CAS No.</TableHead>
                <TableHead>Stage</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.length > 0 ? (
                filteredData.map((group, groupIndex) =>
                  group.intermediates.map((item, index) => (
                    <TableRow className="text-nowrap" key={`${groupIndex}-${index}`}>
                      {index === 0 && (
                        <TableCell rowSpan={group.intermediates.length}>{group.apiName}</TableCell>
                      )}
                      <TableCell className="lg:text-wrap">{item.name}</TableCell>
                      <TableCell className="text-nowrap">{item.casNo}</TableCell>
                      <TableCell className="text-nowrap">{item.stage}</TableCell>
                    </TableRow>
                  ))
                )
              ) : (
                <TableRow>
                  <TableCell colSpan={4} className="text-center py-6">
                    No results found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
