/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false, // 🔧 Disable Turbopack and use Webpack instead
  },
}

module.exports = nextConfig
