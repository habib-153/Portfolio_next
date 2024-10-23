/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.pdf$/,
      use: "file-loader",
    });

    return config;
  },
};

module.exports = nextConfig;
