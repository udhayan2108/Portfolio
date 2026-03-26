/** @type {import('next').NextConfig} */
const basePath = process.env.NODE_ENV === "production" ? "" : ""; 

const nextConfig = {
  output: "export",
  basePath: "",
  assetPrefix: "",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: "",
  },
};

export default nextConfig;