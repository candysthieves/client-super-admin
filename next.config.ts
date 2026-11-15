import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      '*.css': {
        loaders: ['@tailwindcss/turbopack'],
        as: '*.css',
      },
    },
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '*.s3.eu-north-1.amazonaws.com' },
      {
        protocol: 'https',
        hostname: 'lumusapp-528592447405-eu-north-1-an.s3.eu-north-1.amazonaws.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8080',
        pathname: '/uploads/**',
      },
    ],
  },
}

export default nextConfig
