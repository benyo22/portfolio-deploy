import { useTranslations } from 'next-intl';

import { Fingerprint, House, Layers, Mail } from 'lucide-react';

import { NavigationMenu } from '@/src/lib/types';

import { DesktopMenu } from './desktop-menu';
import LanguageSelector from './language-selector';
import { MobileMenu } from './mobile-menu';
import { ThemeToggle } from './theme-toggle';

export const NAVIGATION = [
  {
    key: 'home',
    href: '/home',
    icon: <House className="mt-0.5 size-7 md:size-4" />,
  },

  {
    key: 'about',
    href: '/about',
    icon: <Fingerprint className="mt-0.5 size-7 md:size-4" />,
  },
  {
    key: 'projects',
    href: '/projects',
    icon: <Layers className="mt-0.5 size-7 md:size-4" />,
  },
  {
    key: 'contact',
    href: '/contact',
    icon: <Mail className="mt-0.5 size-7 md:size-4" />,
  },
] as const;

export function NavBar() {
  const t = useTranslations('navbar.menuItems');

  const navigationMenuItems: NavigationMenu = NAVIGATION.map((item) => ({
    label: t(item.key),
    href: item.href,
    icon: item.icon,
  }));

  return (
    <>
      <DesktopMenu navigationMenuItems={navigationMenuItems} />

      <MobileMenu navigationMenuItems={navigationMenuItems} />

      <div className="flex gap-2">
        <LanguageSelector />
        <ThemeToggle />
      </div>
    </>
  );
}
