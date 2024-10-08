/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", //that's allow all domain support
      },
    ],
  },
};

export default nextConfig;
