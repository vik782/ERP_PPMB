/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/login',
          permanent: true, // Set to true if the redirect is permanent, otherwise set to false
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  
