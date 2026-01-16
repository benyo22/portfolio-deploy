'use client';

import { useTranslations } from 'next-intl';

import { FadeIn } from '../ui/fade-in';

export function Bio() {
  const t = useTranslations('about');

  return (
    <FadeIn direction="right" delay={0}>
      <div className="flex flex-1 flex-col justify-center text-center lg:text-left">
        <div className="text-muted-foreground flex flex-col gap-4 text-lg leading-relaxed lg:max-w-2xl">
          <p>{t('bio.p1')}</p>
          <p>{t('bio.p2')}</p>
        </div>
      </div>
    </FadeIn>
  );
}
