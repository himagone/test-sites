/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: `/${process.env.REPOSITORY_NAME}`,
  assetPrefix: `/${process.env.REPOSITORY_NAME}/`,
  // 環境変数をクライアントサイドでも使えるようにする
  env: {
    REPOSITORY_NAME: process.env.REPOSITORY_NAME || '',
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig