'use client';

import { usePathname } from '@/src/i18n/routing';
import { NavigationMenu } from '@/src/lib/types';

import { MenuLink } from './menu-link';

export function DesktopMenu({
  navigationMenuItems,
}: {
  navigationMenuItems: NavigationMenu;
}) {
  const activeSection = usePathname();

  return (
    <div className="hidden md:flex">
      <div className="flex gap-8">
        {navigationMenuItems.map((item) => (
          <MenuLink
            key={item.href}
            navigationMenuItem={item}
            activeSection={activeSection}
          />
        ))}
      </div>
    </div>
  );
}
