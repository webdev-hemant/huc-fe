const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  sassOptions: {
    // define the absolute path...
    includePaths: [path.join(__dirname, "styles")],
  },
  env: {
    API_ENDPOINT: process.env.API_ENDPOINT,
    HAND_SHAKE: process.env.HAND_SHAKE,
  },
};

module.exports = nextConfig;
