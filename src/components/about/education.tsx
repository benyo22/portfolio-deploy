'use client';

import { useTranslations } from 'next-intl';

import { GraduationCap } from 'lucide-react';

import { Card, CardContent } from '@/src/components/ui/card';
import { FADE_IN_BASE_DELAY, FADE_IN_STAGGER } from '@/src/lib/data';
import { cn } from '@/src/lib/utils';

import { FadeIn } from '../ui/fade-in';

export function Education() {
  const t = useTranslations('about');

  const educations = [
    {
      degree: t('education.msc.degree'),
      school: t('education.msc.school'),
      date: t('education.msc.date'),
      desc: t('education.msc.desc'),
      isActive: true,
    },
    {
      degree: t('education.bsc.degree'),
      school: t('education.bsc.school'),
      date: t('education.bsc.date'),
      desc: t('education.bsc.desc'),
      isActive: false,
    },
    {
      degree: t('education.highScool.degree'),
      school: t('education.highScool.school'),
      date: t('education.highScool.date'),
      desc: t('education.highScool.desc'),
      isActive: false,
    },
  ];

  return (
    <div className="grid min-w-full grid-cols-1 gap-4 sm:min-w-xl lg:min-w-2xl">
      <FadeIn direction="bottom" delay={0}>
        <div className="mb-8 flex w-full items-center justify-center">
          <h2 className="text-muted-foreground hover:text-foreground flex w-fit items-center gap-2 text-3xl select-none">
            <GraduationCap className="text-primary size-8" aria-hidden="true" />
            {t('education.title')}
          </h2>
        </div>
      </FadeIn>

      {educations.map((education, index) => (
        <FadeIn
          key={index}
          direction="bottom"
          delay={FADE_IN_BASE_DELAY + FADE_IN_STAGGER * index}
        >
          <Card className="bg-card/50 border-border/50 hover:border-primary/50 hover:shadow-primary/10 w-full transition-colors hover:shadow-lg">
            <CardContent className="relative">
              <div
                className={cn(
                  'hidden min-w-1 rounded-full sm:absolute sm:top-0 sm:left-2 sm:block sm:h-full sm:w-1',
                  education.isActive ? 'bg-primary' : 'bg-muted'
                )}
                aria-hidden="true"
              />
              <div>
                <div className="flex flex-col items-start sm:flex-row sm:justify-between">
                  <h3 className="text-foreground text-lg font-bold">
                    {education.degree}
                  </h3>
                  <span
                    className={cn(
                      'w-fit rounded-full px-2 py-0.5 text-sm font-medium select-none',
                      education.isActive
                        ? 'bg-primary/10 text-primary'
                        : 'bg-muted text-muted-foreground'
                    )}
                  >
                    {education.date}
                  </span>
                </div>

                <p className="text-foreground/80 mb-2 font-medium">
                  {education.school}
                </p>
                <p className="text-muted-foreground text-sm">
                  {education.desc}
                </p>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      ))}
    </div>
  );
}
