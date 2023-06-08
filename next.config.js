/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    formats:['image/avif','image/webp'],
    domains: ['res.cloudinary.com'],
  },
  env: { 
    API_URL:  process.env.BASE_URL , 
  } 
}

module.exports = nextConfig
