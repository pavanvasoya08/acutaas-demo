import SectionHeader from "@/components/common/SectionHeader";
import Button from "@/components/ui/Button";

export default function KeyMatrixSection() {
    // JSON data for right-side matrix
    const matrixData = [
        { value: "300", label: "Simply Dummy Text", unit: '+' },
        { value: "12", label: "Simply Dummy Text", unit: 'K' },
        { value: "19", label: "Simply Dummy Text", unit: 'Years' },
        { value: "65", label: "Simply Dummy Text", unit: 'K' },
        { value: "12", label: "Simply Dummy Text", unit: '' },
        { value: "90", label: "Simply Dummy Text", unit: '%' },
        { value: "87", label: "Simply Dummy Text", unit: '' },
        { value: "2017", label: "Simply Dummy Text", unit: '' }
    ];

    return (
        <section className="pt-16 pb-8 md:pt-20 md:pb-10 lg:pt-[100px] lg:pb-[50px] overflow-hidden">
            <div className="main-container">
                <div className="flex flex-col gap-8 md:gap-10 lg:gap-14">
                    <SectionHeader title="Key Matrix" />

                    <div className="flex flex-col items-stretch lg:flex-row gap-8 lg:gap-12 relative">
                        <div className="w-full lg:w-1/2 flex flex-col gap-6 justify-between">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight font-semibold">
                                Lorem Ipsum is simply<br />dummy text
                            </h2>
                            <div>
                                <p className="text-[#453A3D] text-sm md:text-base max-w-[90%]">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text
                                    ever since the 1500s, when an unknown printer took a galley of type
                                    and scrambled it to make a type specimen book.
                                </p>
                                <div className="my-4">
                                    <Button variant='primary'>Contact Us</Button>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 relative">
                            <div className="bg-[#FFF8EE] rounded-2xl p-12 grid grid-cols-2 gap-x-8 gap-y-6 min-w-fit">
                                {matrixData.slice(0, 8).map((item, index) => (
                                    <div key={index} className="flex flex-col">
                                        <p className="text-[32px] md:text-[40px] leading-[1.2] font-bold text-black flex items-baseline">
                                            {item.value}
                                            <span className='text-[#B03B23] ml-0.5'>{item.unit}</span>
                                        </p>
                                        <p className="text-[#8F7C79] text-xs md:text-sm mt-1">{item.label}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="hidden lg:block absolute top-0 bottom-0 left-[90%] w-[500%] bg-[#FFF8EE]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}