'use client';

import { useTranslations } from 'next-intl';

import { Languages as LanguagesIcon } from 'lucide-react';

import { Card, CardContent } from '@/src/components/ui/card';
import { FADE_IN_BASE_DELAY } from '@/src/lib/data';
import { cn } from '@/src/lib/utils';

import { FadeIn } from '../ui/fade-in';

export function Languages() {
  const t = useTranslations('about');

  const languages = [
    {
      name: t('languages.hungarian.name'),
      level: t('languages.hungarian.level'),
      highlight: true,
    },
    {
      name: t('languages.english.name'),
      level: t('languages.english.level'),
      highlight: true,
    },
    {
      name: t('languages.german.name'),
      level: t('languages.german.level'),
      highlight: false,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 md:min-w-2xl">
      <FadeIn direction="bottom" delay={0}>
        <div className="mb-8 flex w-full items-center justify-center">
          <h3 className="text-muted-foreground hover:text-foreground flex w-fit items-center gap-2 text-3xl select-none">
            <LanguagesIcon className="text-primary size-8" />
            {t('languages.title')}
          </h3>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {languages.map((language, index) => (
          <FadeIn key={index} direction="bottom" delay={FADE_IN_BASE_DELAY}>
            <Card
              key={index}
              className="bg-card/50 border-border/50 hover:border-primary/50 hover:shadow-primary/10 transition-colors hover:shadow-lg"
            >
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <h4 className="text-foreground mb-2 text-lg font-bold">
                  {language.name}
                </h4>
                <span
                  className={cn(
                    'rounded-full px-3 py-1 text-sm font-medium select-none',
                    language.highlight
                      ? 'bg-primary/10 text-primary'
                      : 'bg-muted text-muted-foreground'
                  )}
                >
                  {language.level}
                </span>
              </CardContent>
            </Card>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
