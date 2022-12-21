/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  i18n: {
    locales: ["pt-BR"],
    defaultLocale: "pt-BR",
  },
  images: {
    loader: "default",
    domains: ["localhost", "127.0.0.1", "blog.hamiltonjr.dev"],
  },
  theme: {
    extend: {
      fontFamily: {
        "press-start": ['"Press Start 2P"', "cursive"],
        Nunito: ['"Nunito"', "sans-serif"],
      },
    },
  },
}

module.exports = nextConfig
