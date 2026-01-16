import { NextIntlClientProvider } from 'next-intl';
import { ThemeProvider } from 'next-themes';

export function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NextIntlClientProvider>
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </NextIntlClientProvider>
  );
}
