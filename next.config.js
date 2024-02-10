/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.pexels.com',
        },
        {
          protocol: 'https',
          hostname: 'avatars.githubusercontent.com',
        },
      ],
    },
    webpack: (config) => {
      config.resolve.fallback = {
        "mongodb-client-encryption": false,
        "aws4": false,
      };
  
      return config;
    },
  };
  
  module.exports = nextConfig;
  