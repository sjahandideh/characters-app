import type { NextConfig } from "next"
import withPlaiceholder from "@plaiceholder/next"

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rickandmortyapi.com",
        pathname: "/api/character/avatar/**",
      },
    ],
  },
}

export default withPlaiceholder(nextConfig)
