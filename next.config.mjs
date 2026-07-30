/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/services/water-damage-restoration',
        permanent: true,
      },
      {
        source: '/chicago',
        destination: '/chicago/water-damage-restoration',
        permanent: true,
      },
      {
        source: '/water-damage',
        destination: '/services/water-damage-restoration',
        permanent: true,
      },
      {
        source: '/flood-damage',
        destination: '/services/flood-damage-cleanup',
        permanent: true,
      },
      {
        source: '/mold-removal',
        destination: '/services/mold-remediation',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
