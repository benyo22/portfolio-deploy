import { getTranslations } from 'next-intl/server';

import { Contact } from '@/src/components/contact/contact';

export async function generateMetadata() {
  const t = await getTranslations('metadata.contact');

  return {
    title: t('title'),
  };
}

export default async function ContactPage() {
  return <Contact />;
}
