import HeroImageSection from '@/components/common/HeroImageSection';
import ProductInquirySection from './components/ProductInquirySection';
import InquirySection from './components/InquirySection';
import SectionHeader from '@/components/common/SectionHeader';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Acutaas | Connect With Our Team Today ',
  description:
    'Reach Acutaas for product inquiries, general support, or business enquiries. Find direct contact details for our experts, CSR, HR, and business units.',
};

const ContactPage: React.FC = () => {
  return (
    <>
      <HeroImageSection imageSrc="/images/contact-us-banner-image.png" imageAlt="Contact Banner" />
      <ProductInquirySection />
      <InquirySection />
      <section className="pb-16 lg:pb-20 overflow-hidden">
        <div className="main-container">
          <div className="flex flex-col gap-8 md:gap-10 lg:gap-14">
            <SectionHeader title="Find our Units" />
            <div className="w-full m-0 rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d299048.94331688527!2d72.84145148579967!3d21.362801465494847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAcutaas%20Chemicals%20L!5e1!3m2!1sen!2sin!4v1755061978215!5m2!1sen!2sin"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[400px] md:h-[480px] lg:h-[560px]"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
