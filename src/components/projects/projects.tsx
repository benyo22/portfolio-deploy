'use client';

import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';

import { GlowingLine } from '../ui/glowing-line';
import { GridBackground } from '../ui/grid-background';
import { PageTitle } from '../ui/page-title';

// Lazy load project list
const ProjectCardList = dynamic(
  () =>
    import('./project-card-list').then((mod) => ({
      default: mod.ProjectCardList,
    })),
  {
    loading: () => null,
  }
);

export function Projects() {
  const t = useTranslations('projects');

  return (
    <>
      <section
        className="relative flex min-h-screen w-full flex-col items-center gap-16 px-4 pt-32 pb-16 xl:px-16 xl:pb-32"
        aria-labelledby="projects-title"
      >
        <GridBackground />

        <PageTitle title={t('title')} />

        <ProjectCardList />
      </section>

      <GlowingLine />
    </>
  );
}
