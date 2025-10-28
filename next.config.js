/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "https://braininsight.inblog.io",
      },
      {
        source: "/:path*",
        destination: "https://braininsight.inblog.io/:path*",
      },
    ];
  },
};
module.exports = nextConfig;
