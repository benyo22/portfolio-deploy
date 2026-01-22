'use client';

import { useTranslations } from 'next-intl';

import { Briefcase } from 'lucide-react';

import { Card, CardContent } from '@/src/components/ui/card';
import { FADE_IN_BASE_DELAY, FADE_IN_STAGGER } from '@/src/lib/data';
import { cn } from '@/src/lib/utils';

import { FadeIn } from '../ui/fade-in';

export function Experience() {
  const t = useTranslations('about');

  const experiences = [
    {
      position: t('experiences.soloronIt.position'),
      company: t('experiences.soloronIt.company'),
      date: t('experiences.soloronIt.date'),
      desc: t('experiences.soloronIt.desc'),
      isActive: false,
    },
  ];

  return (
    <div className="grid min-w-full grid-cols-1 gap-4 sm:min-w-xl lg:min-w-2xl">
      <FadeIn direction="bottom" delay={0}>
        <div className="mb-8 flex w-full items-center justify-center">
          <h2 className="text-muted-foreground hover:text-foreground flex w-fit items-center gap-2 text-3xl select-none">
            <Briefcase className="text-primary size-8" aria-hidden="true" />
            {t('experiences.title')}
          </h2>
        </div>
      </FadeIn>

      {experiences.map((experience, index) => (
        <FadeIn
          key={index}
          direction="bottom"
          delay={FADE_IN_BASE_DELAY + FADE_IN_STAGGER * index}
        >
          <Card
            key={index}
            className="bg-card/50 border-border/50 hover:border-primary/50 hover:shadow-primary/10 transition-colors hover:shadow-lg"
          >
            <CardContent className="relative">
              <div
                className={cn(
                  'hidden min-w-1 rounded-full sm:absolute sm:top-0 sm:left-2 sm:block sm:h-full sm:w-1',
                  experience.isActive ? 'bg-primary' : 'bg-muted'
                )}
                aria-hidden="true"
              />
              <div>
                <div className="flex flex-col items-start sm:flex-row sm:justify-between">
                  <h3 className="text-foreground text-lg font-bold">
                    {experience.position}
                  </h3>
                  <span
                    className={cn(
                      'w-fit rounded-full px-2 py-0.5 text-sm font-medium select-none',
                      experience.isActive
                        ? 'bg-primary/10 text-primary'
                        : 'bg-muted text-muted-foreground'
                    )}
                  >
                    {experience.date}
                  </span>
                </div>
                <p className="text-foreground/80 mb-2 font-medium">
                  {experience.company}
                </p>
                <p className="text-muted-foreground text-sm">
                  {experience.desc}
                </p>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      ))}
    </div>
  );
}
