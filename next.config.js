/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
    domains: ["cdn.simpleicons.org"],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@emailjs/browser": require("path").resolve(__dirname, "lib/emailjs-browser.ts"),
    };

    return config;
  },
};

module.exports = nextConfig;
