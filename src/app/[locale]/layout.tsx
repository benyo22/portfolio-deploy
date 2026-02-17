import { getTranslations } from 'next-intl/server';
import { Inter } from 'next/font/google';

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import 'flag-icons/css/flag-icons.min.css';
import { Toaster } from 'sonner';

import { Providers } from '@/src/components/providers/providers';

import '../globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('metadata');

  const baseUrl = 'https://farkas-bence-portfolio.vercel.app';

  return {
    metadataBase: new URL(baseUrl),

    title: {
      template: `%s | ${t('title')}`,
      default: t('title'),
    },
    description: t('description'),

    keywords: [
      'Bence Farkas',
      'Farkas Bence',
      'Software Engineer',
      'Web Developer',
      'Full Stack Developer',
      'Computer Science',
      'ELTE',
      'Portfolio',
      'React',
      'Next.js',
      'Node.js',
      'TypeScript',
    ],

    authors: [{ name: 'Bence Farkas' }],
    creator: 'Bence Farkas',
    publisher: 'Bence Farkas',

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    openGraph: {
      title: t('title'),
      description: t('description'),
      url: locale === 'en' ? '/en' : '/hu',
      siteName: 'Farkas Bence Portfolio',
      locale: locale,
      type: 'website',
      images: [
        {
          url: '/cv_photo.jpeg',
          width: 800,
          height: 800,
          alt: 'Bence Farkas - Software Engineer',
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['/cv_photo.jpeg'],
    },

    icons: {
      icon: '/favicon.ico',
    },

    alternates: {
      canonical: 'https://farkas-bence-portfolio.vercel.app',
      languages: {
        en: '/en',
        hu: '/hu',
      },
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

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Bence Farkas',
    alternateName: 'Farkas Bence',
    url: 'https://farkas-bence-portfolio.vercel.app',
    image: 'https://farkas-bence-portfolio.vercel.app/cv_photo.jpeg',
    jobTitle: 'Software Engineer',
    description:
      'Software Engineer and Web Developer, MSc Computer Science student at ELTE',
    knowsAbout: [
      'Web Development',
      'Software Engineering',
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
    ],
  };

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className="dark scroll-smooth"
      data-scroll-behavior="smooth"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`bg-background ${inter.className}`}>
        <SpeedInsights />
        <Analytics />

        <Toaster />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
