/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  experimental: {
    optimizePackageImports: ['lucide-react']
  },
  // Configuration for static export (GitHub Pages)
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/banco-insights-2.0' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/banco-insights-2.0/' : ''
}

module.exports = nextConfig