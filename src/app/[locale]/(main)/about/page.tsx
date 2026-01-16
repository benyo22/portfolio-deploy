import { getTranslations } from 'next-intl/server';

import { About } from '@/src/components/about/about';

export async function generateMetadata() {
  const t = await getTranslations('metadata.about');

  return {
    title: t('title'),
  };
}

export default async function AboutPage() {
  return <About />;
}
