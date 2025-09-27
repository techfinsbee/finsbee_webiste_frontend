// /** @type {import('next').NextConfig} */
// const nextConfig = {};
/** @type {import('next').NextConfig} */
const nextConfig = {
   eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "c.animaapp.com",
        pathname: "/mfnnsr9tKgXFn5/img/**",
      },
    ],
  },
};

export default nextConfig;
// export default nextConfig;
