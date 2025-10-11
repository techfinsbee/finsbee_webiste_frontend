// /** @type {import('next').NextConfig} */
// const nextConfig = {};
/** @type {import('next').NextConfig} */
const nextConfig = {
 
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "c.animaapp.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
// export default nextConfig;
