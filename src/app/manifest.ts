import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Craving Toolkit",
    short_name: "Craving Toolkit",
    description: "Practical tools to fight addiction cravings and stay in recovery.",
    start_url: "/",
    display: "browser",
    background_color: "#f8fafc",
    theme_color: "#059669",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
