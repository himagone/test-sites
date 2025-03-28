/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.REPOSITORY_NAME ? `/${process.env.REPOSITORY_NAME}` : "",
  assetPrefix: process.env.REPOSITORY_NAME ? `/${process.env.REPOSITORY_NAME}/` : "",
  base: './',
}

module.exports = nextConfig