/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    URL_BACKEND: "https://fazzpay.herokuapp.com",
    URL_BACKEND2: "https://jsonplaceholder.typicode.com",
    URL_IMAGE: "https://res.cloudinary.com/dd1uwz8eu/image/upload/v1653276449/",
    URL_DEFAULT_IMG:
      "https://cdn-icons.flaticon.com/png/512/2102/premium/2102633.png?token=exp=1657032483~hmac=3bcf0fdc2d5be666f0720b618a089935",
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
