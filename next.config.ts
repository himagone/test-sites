/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: `/${process.env.REPOSITORY_NAME}`,
  assetPrefix: `/${process.env.REPOSITORY_NAME}/`,
  env: {
    REPOSITORY_NAME: process.env.REPOSITORY_NAME,
  },
  images: {
    unoptimized: true,
    path: `/${process.env.REPOSITORY_NAME}/images`,
  },
}

module.exports = nextConfig