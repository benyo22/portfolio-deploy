'use client';

import { useTheme } from 'next-themes';

import { Moon, Sun } from 'lucide-react';

import { Button } from '../ui/button';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      size="icon"
      variant="ghost"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <Sun className="absolute scale-0 rotate-90 text-yellow-300 transition-all duration-300 dark:scale-100 dark:rotate-0" />

      <Moon className="text-primary absolute scale-100 rotate-0 transition-all duration-300 dark:scale-0 dark:-rotate-90" />
      <span className="sr-only">Theme Toggle</span>
    </Button>
  );
}
