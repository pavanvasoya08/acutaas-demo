import SectionHeader from '@/components/common/SectionHeader';
import TradingViewWidget from './TradingViewWidget';

const StockSection: React.FC = () => {
  return (
    <>
      <section className="py-16 lg:py-20 bg-[#FFF8EE] overflow-hidden">
        <div className="main-container">
          <div className="flex flex-col gap-8 md:gap-10 lg:gap-14">
            <SectionHeader title="BSE & NSE Scrip Code & BSE & NSE Tracker" />
            <div className=" flex flex-col gap-8 md:gap-12 lg:gap-16 items-center">
              <div className="flex flex-col gap-5 text-center max-w-[1080px] 3xl:max-w-[1350px] mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] 3xl:text-[50px] font-semibold !leading-[1.2]">
                  Lorem Ipsum is simply dummy text
                </h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged.
                </p>
              </div>
              <div className="w-full h-[500px] 3xl:h-[670px] rounded-2xl overflow-hidden border border-[#BCB2B2] max-w-[964px] 3xl:max-w-[1250px] mx-auto">
                {/* <img src="/images/stock-image.png" alt="stock map" /> */}
                <TradingViewWidget />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StockSection;
