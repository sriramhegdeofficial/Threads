/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["media1.giphy.com"],
  },
};

module.exports = nextConfig;
