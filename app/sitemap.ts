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
    '/blog/water-damage-restoration-chicago-guide',
    '/blog/common-causes-water-damage-chicago-homes',
    '/blog/first-24-hours-after-water-damage',
    '/blog/water-damage-restoration-cost-chicago',
    '/blog/basement-flooding-chicago-cleanup-guide',
    '/blog/chicago-water-damage-restoration-checklist',
    '/blog/water-damage-restoration-vs-water-mitigation',
    '/blog/diy-water-damage-cleanup-vs-professional',
    '/blog/water-damage-restoration-or-mold-remediation-first',
    '/blog/chicago-flooded-basement-insurance-coverage',
    '/blog/how-to-file-water-damage-insurance-claim-chicago',
    '/blog/how-to-prevent-frozen-pipes-chicago-winter',
    '/blog/spring-flooding-chicago-prevention-guide',
    '/blog/signs-you-need-professional-water-damage-restoration',
    '/blog/hidden-water-damage-behind-walls-chicago',
    '/blog/how-long-does-water-damage-restoration-take',
    '/blog/can-water-damage-cause-mold-chicago-guide',
    '/blog/residential-vs-commercial-water-damage-restoration-chicago',
    '/blog/why-iicrc-certified-water-damage-restoration-matters',
    '/blog/how-to-choose-best-water-damage-restoration-company-chicago',
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
