import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const routes = [
    '',
    '/services/water-damage-restoration',
    '/services/flood-damage-cleanup',
    '/services/emergency-water-extraction',
    '/services/basement-water-damage-repair',
    '/services/mold-remediation',
    '/chicago/water-damage-restoration',
    '/chicago/lincoln-park',
    '/chicago/logan-square',
    '/chicago/wicker-park',
    '/chicago/west-loop',
    '/chicago/south-side',
    '/about',
    '/blog',
    '/blog/first-24-hours-after-water-damage',
    '/blog/how-to-prevent-frozen-pipes-chicago',
    '/blog/chicago-flooded-basement-insurance-coverage',
    '/blog/hidden-mold-warning-signs-chicago',
    '/contact',
    '/faq',
    '/resources',
    '/privacy-policy',
    '/terms-and-conditions',
    '/disclaimer',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route.startsWith('/services') || route.startsWith('/chicago') ? 0.8 : 0.5,
  }));
}
