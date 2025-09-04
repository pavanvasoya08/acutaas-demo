import SectionHeader from '@/components/common/SectionHeader';
import Link from 'next/link';

const AnalyticalEquipmentSection: React.FC = () => {
  const documents = [
    {
      id: 1,
      fileName: 'Annual Report 2025',
      date: '08 July, 2025',
      icon: '/images/pdf-icon.svg',
    },
    {
      id: 2,
      fileName: 'Financial Statement Q1',
      date: '15 July, 2025',
      icon: '/images/pdf-icon.svg',
    },
    {
      id: 3,
      fileName: 'Company Profile',
      date: '20 July, 2025',
      icon: '/images/pdf-icon.svg',
    },
    {
      id: 4,
      fileName: 'Project Overview',
      date: '25 July, 2025',
      icon: '/images/pdf-icon.svg',
    },
    {
      id: 5,
      fileName: 'Meeting Notes',
      date: '30 July, 2025',
      icon: '/images/pdf-icon.svg',
    },
    {
      id: 6,
      fileName: 'Strategy Report',
      date: '05 Aug, 2025',
      icon: '/images/pdf-icon.svg',
    },
  ];

  return (
    <>
      <section className="pt-10 pb-16 lg:pb-20 overflow-hidden">
        <div className="main-container">
          <div className="flex flex-col gap-8 md:gap-10 lg:gap-14">
            <SectionHeader title="QC analytical equipment" />

            <div className="flex flex-col gap-5 max-w-[792px] 3xl:max-w-[1000px]">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] 3xl:text-[50px] font-semibold !leading-[1.2]">
                Simply Dummy Text
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {documents.map((doc) => (
                <Link
                  href="/docs/dummy-pdf.pdf"
                  target="_blank"
                  key={doc.id}
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 lg:p-5 3xl:p-6 border border-[#BCB2B2] transition-all duration-300 rounded-2xl hover:bg-[#FFF2EF]"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 3xl:w-14 3xl:h-14">
                    <img src={doc.icon} alt="PDF Icon" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg lg:text-xl 3xl:text-2xl !leading-[1.1] font-semibold mb-1.5 md:mb-2.5">
                      {doc.fileName}
                    </h3>
                    <p className="text-[#8F7C79]">{doc.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AnalyticalEquipmentSection;
