'use client';

import { useState } from 'react';

import { useTranslations } from 'next-intl';

import { Menu } from 'lucide-react';

import { usePathname } from '@/src/i18n/routing';
import { NavigationMenu } from '@/src/lib/types';

import { Button } from '../ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';
import { MenuLink } from './menu-link';

export function MobileMenu({
  navigationMenuItems,
}: {
  navigationMenuItems: NavigationMenu;
}) {
  const activeSection = usePathname();

  const t = useTranslations('navbar.mobileMenu');
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </SheetTrigger>

        <SheetContent side="right" className="min-w-screen">
          <SheetHeader>
            <SheetTitle className="sr-only">{t('title')}</SheetTitle>
          </SheetHeader>

          <div className="m-auto flex flex-col gap-8 text-center text-3xl">
            {navigationMenuItems.map((item) => (
              <MenuLink
                key={item.href}
                navigationMenuItem={item}
                activeSection={activeSection}
                setMobileMenuOpen={setOpen}
              />
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
