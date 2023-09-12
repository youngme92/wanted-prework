/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === "production";
const nextConfig = {
  basePath: isProduction ? "/wanted_prework_page" : "",
  output: isProduction ? "export" : "standalone",
  //   images: {
  //     loader: "imgix",
  //     path: "https://youngme92.github.io/wanted_prework_page",
  //   },
  assetPrefix: isProduction
    ? "https://youngme92.github.io/wanted_prework_page"
    : "",
};

module.exports = nextConfig;
