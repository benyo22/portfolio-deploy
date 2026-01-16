import { getTranslations } from 'next-intl/server';

import { Toaster } from 'sonner';

import { Providers } from '@/src/components/providers/providers';

import '../../../node_modules/flag-icons/css/flag-icons.min.css';
import '../globals.css';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('metadata');

  return {
    // TODO: Enable before deploying with correct URL
    // metadataBase: new URL('https://farkasbence.hu'),

    title: {
      template: `%s | ${t('title')}`,
      default: t('title'),
    },
    description: t('description'),

    openGraph: {
      title: t('title'),
      description: t('description'),
      url: 'https://farkasbence.hu',
      siteName: 'Farkas Bence Portfolio',
      locale: locale,
      type: 'website',
    },

    icons: {
      icon: '/favicon.ico',
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className="dark scroll-smooth"
      data-scroll-behavior="smooth"
    >
      <body className="bg-background">
        <Toaster />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
