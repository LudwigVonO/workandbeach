/** @type {import('next').NextConfig} */

const nextConfig = {
  // basePath: "/workandbeach",
  output:"export",
  reactStrictMode:true,
  experimental: {
    ppr: 'incremental',
  },
};


module.exports = nextConfig;
// export default nextConfig;