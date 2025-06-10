/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ukraineadvocacy',
  assetPrefix: '/ukraineadvocacy/',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
