import { useTranslations } from 'next-intl';

import { ArrowRightCircle } from 'lucide-react';

import { Link } from '@/src/i18n/routing';

import { Button } from '../ui/button';

export function ViewCVButton() {
  const t = useTranslations('home.buttons');

  return (
    <div className="flex justify-center lg:justify-start">
      <Button
        asChild
        className="from-primary to-chart-2 shadow-chart-2/20 hover:shadow-chart-2/40 relative w-fit overflow-hidden rounded-full bg-linear-to-r text-white shadow-md transition-all duration-500 hover:scale-105 hover:shadow-xl/50"
      >
        <Link href={'/about'}>
          {t('viewCV')}
          <ArrowRightCircle className="size-5" aria-hidden="true" />
        </Link>
      </Button>
    </div>
  );
}
