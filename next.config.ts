import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  i18n: {
    locales: ['hy', 'ru', 'en'],
    defaultLocale: 'hy',
    localeDetection: false,
  },
};

export default nextConfig;
