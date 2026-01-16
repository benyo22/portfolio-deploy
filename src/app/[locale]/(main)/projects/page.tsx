import { getTranslations } from 'next-intl/server';

import { Projects } from '@/src/components/projects/projects';

export async function generateMetadata() {
  const t = await getTranslations('metadata.projects');

  return {
    title: t('title'),
  };
}

export default async function ProjectsPage() {
  return <Projects />;
}
