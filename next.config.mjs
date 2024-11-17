/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['encrypted-tbn0.gstatic.com', 'example.com', 'anotherdomain.com','www.hemcortho.com'], // Add your allowed domains here
  },
};

export default nextConfig;
