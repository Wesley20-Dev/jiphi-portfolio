import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // Miniatures des vidéos YouTube.
  images: {
    remotePatterns: [new URL("https://i.ytimg.com/vi/**")],
  },
  // L'ancienne page « À propos » est désormais une section de l'accueil.
  async redirects() {
    return [{ source: "/a-propos", destination: "/#parcours", permanent: true }];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
