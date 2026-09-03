import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/seo';
import { blogPosts } from '@/lib/blogData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const coreRoutes = [
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
    '/contact',
    '/faq',
    '/resources',
    '/privacy-policy',
    '/terms-and-conditions',
    '/disclaimer',
  ];

  const blogRoutes = blogPosts.map((post) => post.slug);

  const allRoutes = Array.from(new Set([...coreRoutes, ...blogRoutes]));

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority:
      route === ''
        ? 1.0
        : route.startsWith('/services') || route.startsWith('/chicago')
        ? 0.8
        : 0.6,
  }));
}
