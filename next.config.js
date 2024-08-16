/** @type {import('next').NextConfig} */
// module.exports = {
//   webpack: (config) => {
//     config.module.rules.push({
//       test: /\.(mov|mp4)$/, // Add any video file extensions you're using
//       use: {
//         loader: "file-loader",
//         options: {
//           publicPath: "./public/bgVideo.mp4", // Change this path as needed
//           outputPath: "./public/bgVideo.mp4", // Change this path as needed
//           name: "[name].[ext]",
//         },
//       },
//     });

//     return config;
//   },

// };

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "service.gbcatransform.org.au",
      },
    ],
  },
};

module.exports = nextConfig;
