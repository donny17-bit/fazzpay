/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    URL_BACKEND: "https://fazzpay.herokuapp.com",
    URL_BACKEND2: "https://jsonplaceholder.typicode.com",
    URL_IMAGE: "https://res.cloudinary.com/dd1uwz8eu/image/upload/v1653276449/",
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/home",
      },
      {
        source: "/login",
        destination: "/auth/login",
      },
      {
        source: "/register",
        destination: "/auth/register",
      },
      {
        source: "/create-pin",
        destination: "/auth/createPin",
      },
      {
        source: "/reset-password",
        destination: "/auth/resetPass",
      },
    ];
  },
};

module.exports = nextConfig;
