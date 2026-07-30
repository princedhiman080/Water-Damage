import { siteConfig } from './seo';

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    'name': siteConfig.name,
    'description': siteConfig.description,
    'url': siteConfig.url,
    'telephone': siteConfig.phone,
    'email': siteConfig.email,
    'priceRange': siteConfig.priceRange,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': siteConfig.address.streetAddress,
      'addressLocality': siteConfig.address.addressLocality,
      'addressRegion': siteConfig.address.addressRegion,
      'postalCode': siteConfig.address.postalCode,
      'addressCountry': siteConfig.address.addressCountry,
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': siteConfig.geo.latitude,
      'longitude': siteConfig.geo.longitude,
    },
    'areaServed': [
      {
        '@type': 'City',
        'name': 'Chicago',
        'sameAs': 'https://en.wikipedia.org/wiki/Chicago',
      },
      { '@type': 'AdministrativeArea', 'name': 'Lincoln Park, Chicago' },
      { '@type': 'AdministrativeArea', 'name': 'Logan Square, Chicago' },
      { '@type': 'AdministrativeArea', 'name': 'Wicker Park, Chicago' },
      { '@type': 'AdministrativeArea', 'name': 'West Loop, Chicago' },
      { '@type': 'AdministrativeArea', 'name': 'South Side, Chicago' },
    ],
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      'opens': '00:00',
      'closes': '23:59',
    },
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Water Damage Restoration Services',
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Emergency Water Damage Restoration',
          },
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Flood Damage Cleanup & Removal',
          },
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Burst Pipe Emergency Extraction',
          },
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Basement Water Damage Repair',
          },
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Mold Remediation & Prevention',
          },
        },
      ],
    },
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map((faq) => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer,
      },
    })),
  };
}

export function getServiceSchema(serviceName: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': serviceName,
    'description': description,
    'provider': {
      '@type': 'LocalBusiness',
      'name': siteConfig.name,
      'telephone': siteConfig.phone,
      'url': siteConfig.url,
    },
    'areaServed': {
      '@type': 'City',
      'name': 'Chicago',
    },
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': `${siteConfig.url}${item.url}`,
    })),
  };
}
