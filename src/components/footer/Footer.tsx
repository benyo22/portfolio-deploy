import { getTranslations } from 'next-intl/server';

import { Copyright } from 'lucide-react';

export async function Footer() {
  const t = await getTranslations('footer');
  return (
    <div
      className="flex items-center justify-center gap-2 text-sm font-semibold"
      role="contentinfo"
    >
      <Copyright className="size-4" aria-hidden="true" />
      <p className="text-muted-foreground">
        <span>{new Date().getFullYear()}</span> <span>{t('author')}</span>{' '}
        <span>{t('allRightsReserved')}</span>
      </p>
    </div>
  );
}
