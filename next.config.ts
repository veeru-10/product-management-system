import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  skipProxyUrlNormalize: true,
  images : {
    remotePatterns : [
      new URL('https://images.pexels.com/photos/**')
    ]
  }
};

export default nextConfig;
