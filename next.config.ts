// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   output: 'export',
//   trailingSlash: true,
//   images: {
//     unoptimized: true,
//   },
//   assetPrefix: '',
//   // FIX: Fixed build ID so browser cache never breaks between rebuilds
//   generateBuildId: async () => {
//     return 'nycreport-stable-build';
//   },
// };

// export default nextConfig;

// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   output: 'export',
//   trailingSlash: true,
//   images: {
//     unoptimized: true,
//   },
//   assetPrefix: '',
//   // Fixed build ID so browser cache never breaks between rebuilds
//   generateBuildId: async () => {
//     return 'nycreport-stable-build';
//   },
//   // Ignore TypeScript and ESLint errors during build
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
// };

// export default nextConfig;



import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{
      source: "/politics/trump-erupted-alina-habba-50-million-deal",
      destination: "/politics/trump-reportedly-erupted-alina-habba-50-million-deal",
      permanent: true,
    }];
  },
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;