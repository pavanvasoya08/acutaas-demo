import SectionHeader from '@/components/common/SectionHeader';

const ContactSection: React.FC = () => {
  return (
    <section className="py-10 md:py-16 lg:py-20 overflow-hidden">
      <div className="main-container">
        <SectionHeader title="Get in touch" />
        <div className="grid grid-cols-2 gap-16">
          <div className="rounded-lg overflow-hidden">
            <img src="/images/contact-image.png" alt="" />
          </div>
          <div>
            <div className="max-w-[480px] mx-auto">
              <div className="flex flex-col gap-5 text-center md:text-left max-w-[448px]">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold leading-snug">
                  There are many variations of passages
                </h2>
                <p className="text-[#453A3D]">Our friendly team would love to hear from you.</p>
              </div>
              <form>
                <div className="grid grid-cols-2 gap-y-6 gap-x-8">
                  <div>
                    <label htmlFor="">First name</label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
