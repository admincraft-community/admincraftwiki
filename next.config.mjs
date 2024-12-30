import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  webpack: (config, { dev, isServer }) => {
    if (!dev) {
      // Only apply code splitting on client-side bundles
      if (!isServer) {
        config.optimization = {
          ...config.optimization,
          splitChunks: {
            chunks: 'all',
            maxInitialRequests: 25,
            minSize: 20000,
            maxSize: 20000000, // 20MB
            cacheGroups: {
              vendor: {
                test: /node_modules/,
                name: 'vendor',
                priority: 10,
                enforce: true,
              },
            },
          },
        };
      }
    }
    return config;
  },
};

export default withMDX(config);