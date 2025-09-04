import SectionHeader from '@/components/common/SectionHeader';
import { ContactForm } from './ContactForm';

const ContactSection: React.FC = () => {
  return (
    <section className="py-10 md:py-16 lg:py-20 overflow-hidden">
      <div className="main-container">
        <div className="flex flex-col gap-8 md:gap-10 lg:gap-14">
          <SectionHeader title="Get in touch" />
          <div className="grid gap-8 items-center grid-cols-1 sm:gap-12 lg:gap-16 lg:grid-cols-2">
            <div className="hidden lg:block max-w-[480px] mx-auto rounded-lg overflow-hidden order-2 lg:mx-0 lg:max-w-full lg:order-1">
              <img src="/images/contact-image.png" alt="Contact Image" />
            </div>
            <div className="order-1 lg:order-2">
              <div className="max-w-[480px] mx-auto flex flex-col gap-8 md:gap-10 lg:gap-12">
                <div className="flex flex-col gap-5 text-center md:text-left max-w-[448px]">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold leading-snug">
                    Looking to Connect With Us?
                  </h2>
                  <p className="text-[#453A3D]">
                    Share your enquiry and we will get back to you shortly
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
