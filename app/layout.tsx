import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StickyMobileCall } from '@/components/StickyMobileCall';
import { siteConfig } from '@/lib/seo';
import { getLocalBusinessSchema } from '@/lib/schema';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Water Damage Restoration Chicago, IL | 24/7 Emergency Cleanup',
    template: '%s | Chicago Water Damage Restoration',
  },
  description: siteConfig.description,
  keywords: [
    'water damage restoration Chicago',
    'emergency water extraction Chicago',
    'flood damage cleanup Chicago IL',
    'burst pipe repair Chicago',
    'basement water removal Chicago',
    'mold remediation Chicago',
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
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
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: 'Water Damage Restoration Chicago, IL | 24/7 Emergency Cleanup',
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Water Damage Restoration Chicago, IL | 24/7 Emergency Cleanup',
    description: siteConfig.description,
  },
  alternates: {
    canonical: siteConfig.url,
  },
  verification: {
    google: 'AcGRLsS90J3FMvopi8xequ75TINfGW2OzvYP6NW3gBw',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = getLocalBusinessSchema();

  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <StickyMobileCall />
      </body>
    </html>
  );
}
