import Button from '../ui/Button';

interface PageIntroProps {
  title: string;
  description: string;
  buttonLabel: string;
  buttonVariant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
}

const PageIntro: React.FC<PageIntroProps> = ({
  title = '',
  description = '',
  buttonLabel = '',
  buttonVariant = 'primary',
}) => {
  return (
    <section className="py-10 md:py-12 lg:py-[60px]">
      <div className="main-container">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-10 xl:gap-14 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] font-bold leading-tight xl:leading-tight text-[#231f20]">
            {title}
          </h1>
          <div className="flex flex-col items-center gap-5 lg:items-start lg:gap-7">
            <p>{description}</p>
            <Button variant={buttonVariant}>{buttonLabel}</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageIntro;
