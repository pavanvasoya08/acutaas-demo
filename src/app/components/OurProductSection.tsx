import SectionHeader from '@/components/common/SectionHeader';
import SectionIntro from '@/components/common/SectionIntro';
import ArrowIcon from '@/components/common/ArrowIcon';

interface OurProdcutCardProps {
  title: string;
  description: string;
  image: string;
}

const OurProductCard: React.FC<OurProdcutCardProps> = ({ title, description, image }) => {
  return (
    <div className="group border border-[#BCB2B2] rounded-2xl overflow-hidden relative">
      <div className="relative">
        <img src={image} alt={title} />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(35,31,32,0)_59.33%,#231F20_100%)]"></div>
        <div className="absolute left-5 right-5 bottom-5 flex items-center justify-between">
          <h3 className="text-white section-subtitle">{title}</h3>
          <ArrowIcon className="w-[34px] h-[34px]" fill="#FFFFFF" />
        </div>
      </div>

      <div className="absolute inset-0 bg-primary z-10 rounded-xl p-5 md:p-8 lg:p-10 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out">
        <div className="flex items-center justify-between">
          <p className="section-subtitle">{title}</p>
          <ArrowIcon className="w-[34px] h-[34px]" fill="#231F20" />
        </div>
        <p className="text-sm leading-normal mt-3">{description}</p>
      </div>
    </div>
  );
};

const OurProductSection: React.FC = () => {
  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-[#FFF8EE] overflow-hidden">
      <div className="main-container">
        <div className="flex flex-col gap-10 sm:gap-12 lg:gap-14">
          <SectionHeader title="Our Products" />
          <SectionIntro
            title="There are many variations of passages of Lorem Ipsum"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <OurProductCard
              title="Lorem Ipsum"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              image="/images/product-1.png"
            />
            <OurProductCard
              title="Lorem Ipsum"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              image="/images/product-2.png"
            />
            <OurProductCard
              title="Lorem Ipsum"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              image="/images/product-3.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProductSection;
