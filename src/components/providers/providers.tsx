import { Suspense, lazy, memo } from 'react';

import { NextIntlClientProvider } from 'next-intl';
import { ThemeProvider } from 'next-themes';

const LazySonnerToaster = lazy(() =>
  import('sonner').then((mod) => ({
    default: mod.Toaster,
  }))
);

export const Providers = memo(function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NextIntlClientProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem={false}
        disableTransitionOnChange
      >
        <Suspense fallback={null}>
          <LazySonnerToaster />
        </Suspense>
        {children}
      </ThemeProvider>
    </NextIntlClientProvider>
  );
});
