import SectionHeader from '@/components/common/SectionHeader';

const GallerySection: React.FC = () => {
  return (
    <section className=" py-10 md:py-16 lg:py-20 overflow-hidden">
      <div className="main-container">
        <div className="flex flex-col gap-8 md:gap-10 lg:gap-14">
          <SectionHeader title="Gallery" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-end">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] !leading-tight font-semibold">
              There are many variations of passages of Lorem Ipsum
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 grid-flow-row-dense">
            <div className="grid grid-cols-1 col-span-1 sm:col-span-2 gap-4">
              <div className="rounded-xl overflow-hidden">
                <img src="/images/gallery-image-1.png" alt="life-mobile" />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="rounded-xl overflow-hidden">
                  <img src="/images/gallery-image-4.png" alt="life-mobile" />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <img src="/images/gallery-image-5.png" alt="life-mobile" />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="rounded-xl overflow-hidden">
                  <img src="/images/gallery-image-6.png" alt="life-mobile" />
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="rounded-xl overflow-hidden">
                    <img src="/images/gallery-image-7.png" alt="life-mobile" />
                  </div>
                  <div className="rounded-xl overflow-hidden">
                    <img src="/images/gallery-image-8.png" alt="life-mobile" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="rounded-xl overflow-hidden">
                <img src="/images/gallery-image-2.png" alt="life-mobile" />
              </div>
              <div className="rounded-xl overflow-hidden">
                <img src="/images/gallery-image-3.png" alt="life-mobile" />
              </div>
              <div className="rounded-xl overflow-hidden">
                <img src="/images/gallery-image-9.png" alt="life-mobile" />
              </div>
            </div>
            <div className="flex flex-col gap-4 md:flex-row lg:col-span-1 md:col-span-3 md:justify-evenly lg:flex-col">
              <div className="rounded-xl overflow-hidden">
                <img src="/images/gallery-image-10.png" alt="life-mobile" />
              </div>
              <div className="rounded-xl overflow-hidden">
                <img src="/images/gallery-image-11.png" alt="life-mobile" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
