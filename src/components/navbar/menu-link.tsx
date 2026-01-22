import { Dispatch, SetStateAction, memo } from 'react';

import { Link } from '@/src/i18n/routing';
import { NavigationMenuItem } from '@/src/lib/types';
import { cn } from '@/src/lib/utils';

export const MenuLink = memo(function MenuLink({
  navigationMenuItem,
  activeSection,
  setMobileMenuOpen,
}: {
  navigationMenuItem: NavigationMenuItem;
  activeSection: string;
  setMobileMenuOpen?: Dispatch<SetStateAction<boolean>>;
}) {
  const isActive = activeSection === navigationMenuItem.href;

  return (
    <Link
      key={navigationMenuItem.href}
      href={navigationMenuItem.href}
      className={cn(
        'group text-md relative flex items-center justify-center px-1 font-medium transition-colors duration-300 select-none',
        isActive
          ? 'text-secondary-foreground'
          : 'text-muted-foreground hover:text-foreground'
      )}
      onClick={() => setMobileMenuOpen && setMobileMenuOpen(false)}
    >
      {isActive && (
        <div className="bg-primary/70 absolute inset-0 rounded-full blur-[60px] xl:hidden" />
      )}
      <span
        className={cn(
          'text-primary absolute -left-3 text-4xl font-bold transition-all duration-300 md:text-xl',
          isActive
            ? 'translate-x-0 opacity-100'
            : '-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
        )}
      >
        {'{'}
      </span>
      <span className="flex items-center gap-2">
        {navigationMenuItem.icon}
        {navigationMenuItem.label}
      </span>
      <span
        className={cn(
          'text-primary absolute -right-3 text-4xl font-bold transition-all duration-300 md:text-xl',
          isActive
            ? 'translate-x-0 opacity-100'
            : 'translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
        )}
      >
        {'}'}
      </span>
    </Link>
  );
});
