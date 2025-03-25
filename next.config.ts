/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: process.env.NODE_ENV === 'production' ? `/${process.env.REPOSITORY_NAME}` : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? `/${process.env.REPOSITORY_NAME}/` : '',
    images: {
      unoptimized: true,
    },
  }
  
  module.exports = nextConfig