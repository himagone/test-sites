/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.REPOSITORY_NAME ? `/${process.env.REPOSITORY_NAME}` : "",
  assetPrefix: process.env.REPOSITORY_NAME ? `/${process.env.REPOSITORY_NAME}/` : "",
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: `/${process.env.REPOSITORY_NAME}/`
  },
}

module.exports = nextConfig