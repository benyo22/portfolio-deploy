import { useTranslations } from 'next-intl';

import { GlowingLine } from '@/src/components/ui/glowing-line';

import { PageTitle } from '../ui/page-title';
import { Bio } from './bio';
import { Education } from './education';
import { Experience } from './experience';
import { Hobbies } from './hobbies';
import { Languages } from './languages';
import { Photo } from './photo';
import { Skills } from './skills';

export function About() {
  const t = useTranslations('about');

  return (
    <>
      <section
        className="flex min-h-screen w-full flex-col items-center gap-16 px-4 pt-32 pb-16 xl:px-16 xl:pb-32"
        aria-labelledby="about-title"
      >
        <PageTitle title={t('title')} />

        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-32">
          <Photo />
          <Bio />
        </div>

        <Education />

        <Experience />

        <Languages />

        <Skills />

        <Hobbies />
      </section>

      <GlowingLine />
    </>
  );
}
