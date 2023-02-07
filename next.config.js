/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["raw.githubusercontent.com"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
