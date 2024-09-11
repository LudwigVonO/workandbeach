/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
      ppr: 'incremental',
    },
};

export default {nextConfig}

// export default (phase, { defaultConfig }) => {
//   /**
//    * @type {import('next').NextConfig}
//    */
//   const nextConfig = {
//     experimental: {
//       ppr: 'incremental',
//     },
//   }
//   return nextConfig
// }
