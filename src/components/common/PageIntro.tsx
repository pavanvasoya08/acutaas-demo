import Link from 'next/link';
import Button from '../ui/Button';

interface PageIntroProps {
  title: string;
  description?: string;
  buttonLabel?: string;
  buttonVariant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  pageUrl?: string;
  layout?: 'one-column' | 'two-column';
  className?: string;
}

const PageIntro: React.FC<PageIntroProps> = ({
  title,
  description,
  buttonLabel,
  buttonVariant = 'primary',
  pageUrl = '/contact-us',
  layout = 'two-column',
  className = '',
}) => {
  const isTwoColumn = layout === 'two-column';

  return (
    <section className="py-10 md:py-12 lg:py-[60px]">
      <div className="main-container">
        <div
          className={`grid gap-4 ${
            isTwoColumn
              ? 'grid-cols-1 lg:grid-cols-2 md:gap-8 lg:gap-10 xl:gap-14 text-center lg:text-left item-end'
              : 'grid-cols-1 text-center max-w-[876px] 3xl:max-w-[1168px] mx-auto md:gap-6'
          } ${className || ''}`}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] 3xl:text-7xl font-bold leading-tight xl:leading-tight text-[#231f20]">
            {title}
          </h1>

          <div
            className={`flex flex-col justify-end gap-4 ${
              isTwoColumn
                ? 'items-center lg:items-start md:gap-6 lg:gap-7'
                : 'lg:gap-6 items-center'
            }`}
          >
            <p className={`${isTwoColumn ? '' : 'max-w-[758px] 3xl:max-w-[970px] mx-auto'}`}>
              {description}
            </p>

            {buttonLabel && pageUrl && (
              <Link href={pageUrl}>
                <Button variant={buttonVariant}>{buttonLabel}</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageIntro;
