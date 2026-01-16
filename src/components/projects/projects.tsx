import { useTranslations } from 'next-intl';

import { GlowingLine } from '../ui/glowing-line';
import { GridBackground } from '../ui/grid-background';
import { PageTitle } from '../ui/page-title';
import { ProjectCardList } from './project-card-list';

export function Projects() {
  const t = useTranslations('projects');

  return (
    <>
      <section className="relative flex min-h-screen w-full flex-col items-center gap-16 px-4 pt-32 pb-16 xl:px-16 xl:pb-32">
        <GridBackground />

        <PageTitle title={t('title')} />

        <ProjectCardList />
      </section>

      <GlowingLine />
    </>
  );
}
