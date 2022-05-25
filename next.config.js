/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    URL_BACKEND: "https://fazzpay.herokuapp.com",
    URL_BACKEND2: "https://jsonplaceholder.typicode.com",
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/login",
  //       destination: "/auth/login",
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
