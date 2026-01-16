import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'hu'],
  defaultLocale: 'en',
});

export type AppLocale = (typeof routing.locales)[number];
// Wrapper for Next.js navigation APIs to handle the locale prefix automatically
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
