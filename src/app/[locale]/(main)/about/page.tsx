import { getTranslations } from 'next-intl/server';

import { About } from '@/src/components/about/about';

export async function generateMetadata() {
  const t = await getTranslations('metadata.about');

  const title = t('title');
  const description = t('description');

  return {
    title: title,
    description: description,

    openGraph: {
      title: title,
      description: description,
      images: [
        {
          url: '/cv_photo.jpeg',
          width: 800,
          height: 800,
          alt: 'Bence Farkas - Software Engineer',
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: ['/cv_photo.jpeg'],
    },
  };
}

export default async function AboutPage() {
  return <About />;
}
