import type { NextConfig } from "next";

const config: NextConfig = {
  output: "export",
  images: { unoptimized: true }, // images are pre-sized WebP in public/media
};

export default config;
