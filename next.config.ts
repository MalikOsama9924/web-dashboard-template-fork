import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: "dist",
  modularizeImports: {
    "@mui/icons-material": {
      transform: "@mui/icons-material/{{member}}",
    },
    "@mui/material": {
      transform: "@mui/material/{{member}}",
    },
  },
  images: {
    remotePatterns: [
      {
        hostname: "**",
        protocol: "https",
        pathname: "**",
      },
    ],
  },
  typedRoutes: true, // this will check for invalid routes and throw an error
  experimental: {
    // may get removed from the experimental in the future
    reactCompiler: true,
  },
};

export default nextConfig;
