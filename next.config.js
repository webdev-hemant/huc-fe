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
    FORM_KEY: process.env.FORM_KEY,
    OPEN_AI_KEY: process.env.OPEN_AI_KEY,
  },
};

module.exports = nextConfig;
