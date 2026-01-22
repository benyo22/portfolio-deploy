import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://farkas-bence-portfolio.vercel.app';
  const lastModified = new Date();

  const routes = ['', '/home', '/about', '/projects', '/contact'];
  const locales = ['en', 'hu'];

  const sitemap: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    routes.forEach((route) => {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified,
        changeFrequency:
          route === '' || route === '/home' ? 'weekly' : 'monthly',
        priority: route === '' || route === '/home' ? 1 : 0.8,
      });
    });
  });

  return sitemap;
}
