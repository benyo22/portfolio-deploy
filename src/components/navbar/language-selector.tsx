'use client';

import { memo, useCallback } from 'react';

import { useLocale, useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';

import { AppLocale, usePathname, useRouter } from '@/src/i18n/routing';

import { Button } from '../ui/button';

export default memo(function LanguageSelector() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const locale = useLocale();
  const t = useTranslations('navbar.languageSelector');

  const toggleLocale = useCallback(() => {
    const nextLocale: AppLocale = locale === 'en' ? 'hu' : 'en';

    router.replace(
      {
        pathname,
        query: {
          ...Object.fromEntries(params.entries()),
        },
      },
      { locale: nextLocale }
    );
  }, [locale, router, pathname, params]);

  const huIcon = <span className="fi fi-hu"></span>;
  const usIcon = <span className="fi fi-us"></span>;

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={t('ariaLabel', {
        language: locale === 'en' ? 'English' : 'Magyar',
      })}
      onClick={toggleLocale}
      title={locale === 'en' ? 'Váltás magyarra' : 'Switch to English'}
    >
      {locale === 'hu' ? usIcon : huIcon}
    </Button>
  );
});
