'use client';

import { useLocale, useTranslations } from 'next-intl';

import { FadeIn } from '../ui/fade-in';
import { Connections } from './connections';
import { ViewCVButton } from './view-cv-button';

export function Hero() {
  const t = useTranslations('home.hero');
  const locale = useLocale();

  return (
    <div className="flex items-center justify-center text-center lg:justify-end lg:text-left">
      <div className="z-10 flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <FadeIn direction="bottom" delay={100}>
            <h1 className="text-foreground text-5xl font-bold lg:text-7xl">
              {locale === 'hu' ? (
                <>
                  <span className="-ml-1">{t('lastName')}</span>{' '}
                  <span className="text-chart-1">{t('firstName')}</span>
                </>
              ) : (
                <>
                  <span className="text-chart-1 -ml-1">{t('firstName')}</span>{' '}
                  <span>{t('lastName')}</span>
                </>
              )}
            </h1>
          </FadeIn>

          <FadeIn direction="bottom" delay={200}>
            <h2 className="text-chart-1 text-2xl font-semibold">
              {t('occupation')}
            </h2>

            <p className="text-foreground text-md">{t('description')}</p>
          </FadeIn>
        </div>

        <FadeIn direction="bottom" delay={300}>
          <Connections />
        </FadeIn>

        <FadeIn direction="bottom" delay={450}>
          <ViewCVButton />
        </FadeIn>
      </div>
    </div>
  );
}
