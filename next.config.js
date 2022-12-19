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
}

module.exports = nextConfig
