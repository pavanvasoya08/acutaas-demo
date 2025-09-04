import SectionHeader from '@/components/common/SectionHeader';
const facilityData = {
    features: [
        "Culture of Precision and Agility",
        "People Who Build What Lasts",
        "Advanced Thinking in Every Lab",
        "Scalable Systems for Tomorrow",
        "Innovation-Driven Research",
        "Innovation-Driven Research",
        "Culture of Precision and Agility",
        "People Who Build What Lasts",
        "Advanced Thinking in Every Lab"
    ]
};
const DetailsAnkleshwarBranch: React.FC = () => {
    return (
        <section className="pb-16 lg:pb-20 overflow-hidden py-8 md:py-10 lg:py-[50px]">
            <div className="main-container">
                <div className="flex flex-col gap-8 md:gap-10 lg:gap-14">
                    <SectionHeader title="Detailed facility  – Ankleshwar" />
                    <div className="flex flex-wrap items-center justify-between gap-8 sm:gap-10 lg:flex-nowrap lg:gap-14">
                        <div className="flex flex-col gap-10 md:gap-12 lg:gap-16 max-w-[588px] mx-auto lg:mx-0">
                            <div className="flex flex-col gap-5 lg:w-[77%]">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold leading-snug">
                                    Evolving Chemistry Since 2004
                                </h2>
                                <p className="text-base mx-auto lg:mx-0">
                                    Founded in 2004 and rebranded as ACUTAAS in 2025, we have grown from a specialized intermediate firm into a publicly listed global enterprise focused on research driven chemistry and scalable innovation.
                                </p>
                            </div>
                            <div>
                                <p className="section-subtitle">What Drives Us Every Day</p>
                                <div className='features-grid grid grid-cols-1 md:grid-cols-2 gap-x-6 mt-7 [&>*:last-child]:border-b md:[&>*:nth-last-child(-n+2)]:border-b'>
                                    {facilityData?.features?.map((feature, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className='flex gap-3 items-center border-t border-[#BCB2B2] py-4'>
                                                <img
                                                    src="/images/why-choose-check-mark.svg"
                                                    className="w-5 flex-none"
                                                    alt=""
                                                />
                                                <p className="text-[#453A3D]">{feature}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="rounded-2xl overflow-hidden max-w-[528px] mx-auto lg:mx-0">
                            <img src="/images/ankleshwar-facility-image.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DetailsAnkleshwarBranch;
