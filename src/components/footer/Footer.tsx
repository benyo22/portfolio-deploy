import { Copyright } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

export async function Footer() {
  const t = await getTranslations('footer');
  return (
    <p className="text-muted-foreground flex items-center justify-center gap-2 text-sm font-semibold">
      <Copyright className="size-4" /> <span>{new Date().getFullYear()}</span>
      <span>{t('author')}</span>
      <span>{t('allRightsReserved')}</span>
    </p>
  );
}
