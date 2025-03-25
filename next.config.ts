/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? `/${process.env.REPOSITORY_NAME}` : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? `/${process.env.REPOSITORY_NAME}` : '',
  env: {
    REPOSITORY_NAME: process.env.REPOSITORY_NAME,
    IS_PRODUCTION: process.env.NODE_ENV === 'production'
  },
  images: {
    unoptimized: true,
  },
  // 静的アセットのパスを修正
  publicRuntimeConfig: {
    basePath: process.env.NODE_ENV === 'production' ? `/${process.env.REPOSITORY_NAME}` : ''
  }
}

module.exports = nextConfig