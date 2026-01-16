'use client';

import { useTranslations } from 'next-intl';

import { Code } from 'lucide-react';

import { FADE_IN_BASE_DELAY, skills } from '@/src/lib/data';

import { FadeIn } from '../ui/fade-in';
import { SkillsBackend } from './skills-backend';
import { SkillsFrontend } from './skills-frontend';
import { SkillsTools } from './skills-tools';

export function Skills() {
  const t = useTranslations('about');

  return (
    <div className="grid min-w-full grid-cols-1 gap-4 sm:min-w-xl lg:min-w-2xl">
      <FadeIn direction="bottom" delay={0}>
        <div className="mb-8 flex w-full items-center justify-center">
          <h3 className="text-muted-foreground hover:text-foreground flex w-fit items-center gap-2 text-3xl select-none">
            <Code className="text-primary size-8" />
            {t('skills.title')}
          </h3>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 gap-4">
        <FadeIn direction="bottom" delay={FADE_IN_BASE_DELAY}>
          <SkillsFrontend skills={skills} />
        </FadeIn>

        <FadeIn direction="bottom" delay={FADE_IN_BASE_DELAY}>
          <SkillsBackend skills={skills} />
        </FadeIn>

        <FadeIn direction="bottom" delay={FADE_IN_BASE_DELAY}>
          <SkillsTools skills={skills} />
        </FadeIn>
      </div>
    </div>
  );
}
