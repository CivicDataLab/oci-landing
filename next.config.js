/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['cdn-images-1.medium.com'],
  },
};

module.exports = nextConfig;
