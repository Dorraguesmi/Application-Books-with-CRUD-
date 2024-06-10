/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["example.com"],
  },
  env: {
    URL: "http://localhost:3000",
  },
};

export default nextConfig;
