/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  env: {
    CONVEX_DEPLOYMENT: process.env.CONVEX_DEPLOYMENT,
    NEXT_PUBLIC_CONVEX_URL: process.env.NEXT_PUBLIC_CONVEX_URL,
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    LIVEBLOCKS_SECRT_KEY: process.env.LIVEBLOCKS_SECRT_KEY,
  },
  images: {
    domains: ['via.placeholder.com', 'example.com'], // 添加你需要允许的域名
  },
}

module.exports = nextConfig