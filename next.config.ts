import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === 'production'
const prefixPath = !isProd ? '/sub-derectory' : '';
const nextConfig: NextConfig = {
    assetPrefix: prefixPath,
    basePath: prefixPath,
    reactStrictMode: true,
    output: "export",
    experimental: {
        optimizePackageImports: ["@chakra-ui/react"],
    },
};

export default nextConfig;