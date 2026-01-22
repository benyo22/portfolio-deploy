'use client';

import { useTranslations } from 'next-intl';

import { FADE_IN_BASE_DELAY, connections } from '@/src/lib/data';

import { FadeIn } from '../ui/fade-in';
import { ContactInfoCard } from './contact-info-card';

export function ContactInfo() {
  const t = useTranslations('contact');

  const ariaLabels: Record<string, string> = {
    linkedin: t('info.linkedinAriaLabel'),
    github: t('info.githubAriaLabel'),
  };

  return (
    <FadeIn direction="left" delay={FADE_IN_BASE_DELAY}>
      <div className="flex w-full justify-center lg:justify-end">
        <div className="flex max-w-lg flex-col gap-8">
          <h2 className="text-foreground text-2xl font-semibold">
            {t('subTitle')}
          </h2>
          <p className="text-muted-foreground w-full leading-relaxed">
            {t('text')}
          </p>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {connections.map((connection) => (
              <a
                key={connection.href}
                href={connection.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ariaLabels[connection.kind]}
                className="group"
              >
                <ContactInfoCard connection={connection} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
