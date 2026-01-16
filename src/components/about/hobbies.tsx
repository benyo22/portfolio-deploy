'use client';

import { useTranslations } from 'next-intl';

import {
  BookOpen,
  ChefHat,
  Dumbbell,
  Heart,
  Mountain,
  Waves,
} from 'lucide-react';

import { Card, CardContent } from '@/src/components/ui/card';
import { FADE_IN_BASE_DELAY } from '@/src/lib/data';

import { FadeIn } from '../ui/fade-in';

export function Hobbies() {
  const t = useTranslations('about');

  const hobbies = [
    {
      name: t('hobbies.items.waterpolo'),
      icon: Waves,
    },
    {
      name: t('hobbies.items.sports'),
      icon: Dumbbell,
    },
    {
      name: t('hobbies.items.outdoors'),
      icon: Mountain,
    },
    {
      name: t('hobbies.items.cooking'),
      icon: ChefHat,
    },
    {
      name: t('hobbies.items.reading'),
      icon: BookOpen,
    },
  ];

  return (
    <div className="grid min-w-full grid-cols-1 gap-4 sm:min-w-xl lg:min-w-2xl">
      <FadeIn direction="bottom" delay={0}>
        <div className="mb-8 flex w-full items-center justify-center">
          <h3 className="text-muted-foreground hover:text-foreground flex w-fit items-center gap-2 text-3xl select-none">
            <Heart className="text-primary size-8" />
            {t('hobbies.title')}
          </h3>
        </div>
      </FadeIn>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
        {hobbies.map((hobby, index) => {
          const Icon = hobby.icon;

          return (
            <FadeIn key={index} direction="bottom" delay={FADE_IN_BASE_DELAY}>
              <Card
                key={index}
                className="bg-card/50 border-border/50 hover:border-primary/50 hover:shadow-primary/10 group transition-colors hover:shadow-lg"
              >
                <CardContent className="flex flex-col items-center justify-center p-4 text-center">
                  <div className="bg-primary/10 group-hover:bg-primary/20 mb-3 flex size-10 items-center justify-center rounded-full transition-colors">
                    <Icon className="text-primary size-5" />
                  </div>
                  <span className="text-foreground font-medium">
                    {hobby.name}
                  </span>
                </CardContent>
              </Card>
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
}
