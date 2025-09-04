import SectionHeader from '@/components/common/SectionHeader';
import ApplyJobForm from './ApplyJobForm';

const JobDetailSection: React.FC = () => {
  return (
    <>
      <section className="py-16 lg:py-20 overflow-hidden">
        <div className="main-container">
          <div className="flex flex-col gap-8 md:gap-10 lg:gap-14">
            <SectionHeader title="Job Details" />
            <div className="grid grid-cols-1 gap-6 items-center lg:grid-cols-2">
              <div className="flex flex-col gap-8 md:gap-10 lg:gap-12">
                <div className="flex flex-col gap-4 lg:gap-6">
                  <h2 className="text-[#0A1013] font-bold text-2xl lg:text-[32px] !leading-normal">
                    The Opportunity:
                  </h2>
                  <div className="job-detail-rich-text text-[#566771] text-base lg:text-lg !leading-[1.6]">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scrambled it to make a type
                      specimen book. It has survived not only five centuries, but also the leap into
                      electronic typesetting, remaining essentially unchanged. It was popularised in
                      the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 lg:gap-6">
                  <h2 className="text-[#0A1013] font-bold text-2xl lg:text-[32px] !leading-normal">
                    Requirements:
                  </h2>
                  <div className="job-detail-rich-text text-[#566771] text-base lg:text-lg !leading-[1.6]">
                    <ul>
                      <li>Lorem Ipsum is simply dummy text of the printing and typesetting.</li>
                      <li>Lorem Ipsum is simply dummy text of the printing.</li>
                      <li>Lorem Ipsum is simply dummy text of the printing and typesetting.</li>
                      <li>Lorem Ipsum is simply dummy text of the printing.</li>
                      <li>Lorem Ipsum is simply dummy text of the printing and typesetting.</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col gap-4 lg:gap-6">
                  <h2 className="text-[#0A1013] font-bold text-2xl lg:text-[32px] !leading-normal">
                    Qualifications:
                  </h2>
                  <div className="job-detail-rich-text text-[#566771] text-base lg:text-lg !leading-[1.6]">
                    <ul>
                      <li>Lorem Ipsum is simply dummy text of the printing and typesetting.</li>
                      <li>Lorem Ipsum is simply dummy text of the printing.</li>
                      <li>Lorem Ipsum is simply dummy text of the printing and typesetting.</li>
                      <li>Lorem Ipsum is simply dummy text of the printing.</li>
                      <li>Lorem Ipsum is simply dummy text of the printing and typesetting.</li>
                      <li>Lorem Ipsum is simply dummy text of the printing.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-[#FFF8EE] p-6 sm:p-8 md:p-10 lg:py-[60px] lg:px-10 flex flex-col gap-8 md:gap-10 lg:gap-14">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold leading-snug text-center">
                  Apply for this Job
                </h2>
                <ApplyJobForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobDetailSection;
