import SectionHeader from '@/components/common/SectionHeader';
import { FlatIcon } from '@/components/Flaticon';
import Button from '@/components/ui/Button';

interface itemsItem {
    title: string;
    description: string;
    icon: string;
    iconAlt: string;
}

const OurreactionSection: React.FC = () => {
    const items: itemsItem[] = [
        {
            title: 'Flow Chemistry',
            description: 'Continuous reactions for high efficiency',
            icon: 'flask',
            iconAlt: 'Route scouting',
        },
        {
            title: 'Microreactors',
            description: 'Precise control for complex reactions',
            icon: 'flask',
            iconAlt: 'Analytical development',
        },
        {
            title: 'UV Photo Reactors',
            description: 'Harnessing light for advanced synthesis',
            icon: 'flask',
            iconAlt: 'Scale-up',
        },
        {
            title: 'Flow Chemistry',
            description: 'Continuous reactions for high efficiency',
            icon: 'flask',
            iconAlt: 'Route scouting',
        },
        {
            title: 'Microreactors',
            description: 'Precise control for complex reactions',
            icon: 'flask',
            iconAlt: 'Analytical development',
        },
        {
            title: 'UV Photo Reactors',
            description: 'Harnessing light for advanced synthesis',
            icon: 'flask',
            iconAlt: 'Scale-up',
        },
        {
            title: 'Flow Chemistry',
            description: 'Continuous reactions for high efficiency',
            icon: 'flask',
            iconAlt: 'Route scouting',
        },
        {
            title: 'Microreactors',
            description: 'Precise control for complex reactions',
            icon: 'flask',
            iconAlt: 'Analytical development',
        }
    ];

    return (
        <section className="pt-8 pb-12 md:pt-10 md:pb-16 lg:pt-[50px] lg:pb-[80px] overflow-hidden bg-[#FFF8EE]">
            <div className="main-container">
                <div className="flex flex-col gap-8 md:gap-10 lg:gap-14">
                    <SectionHeader title="Our reaction" />
                    <div className="flex flex-col items-center gap-8 md:gap-10 lg:gap-14 text-center">
                        <h2 className="max-w-4xl text-3xl font-bold leading-tight text-[#231F20] sm:text-4xl md:text-5xl">
                            Lorem Ipsum is simply dummy text of the printing
                        </h2>
                        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 xl:gap-7">
                            {items.map((item, index) => (
                                <div
                                    key={index}
                                    className="overflow-hidden group relative flex flex-col items-center gap-8 md:gap-8 rounded-2xl border border-[#8F7C79] bg-[#FFF8EE] p-6 text-center shadow-sm transition-all h-full"
                                >
                                    <div className="absolute inset-0 bg-white rounded-2xl origin-bottom-left scale-0 md:group-hover:scale-100 transition-transform duration-300 ease-in-out"></div>
                                    <div className="relative z-10 flex flex-col items-center gap-8 md:gap-8 h-full w-full">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#BCB2B2] bg-white md:group-hover:bg-[#FFF8EE] shadow-sm transition-colors duration-500">
                                            <FlatIcon icon={item.icon} className="text-[#F99D1C] !text-xl leading-none" />
                                        </div>
                                        <div className="flex flex-col gap-2 flex-1">
                                            <h3 className="text-lg font-semibold text-[#231F20] md:text-xl">{item.title}</h3>
                                            <p className="text-[#8F7C79]">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>



                        <div className="pt-2">
                            <Button variant="primary">Button Text</Button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurreactionSection;


