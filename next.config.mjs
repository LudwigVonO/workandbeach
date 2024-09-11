/** @type {import('next').NextConfig} */

const nextConfig = {
  // basePath: "/workandbeach",
  experimental: {
    ppr: 'incremental',
  },
};

module.exports = nextConfig