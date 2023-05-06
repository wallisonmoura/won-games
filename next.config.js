/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development'
})
const nextConfig = withPWA({
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['localhost', 'res.cloudinary.com']
  }
})

module.exports = nextConfig
