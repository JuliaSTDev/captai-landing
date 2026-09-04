/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/flowkit-escola",
        destination: "/captai",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
