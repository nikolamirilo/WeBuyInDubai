import react from "@vitejs/plugin-react";
import { defineConfig, splitVendorChunkPlugin } from "vite";

export default defineConfig({
  plugins: [
    react({
      runtimeHelpers: true,
    }),
    splitVendorChunkPlugin(),
    // Sitemap({
    //   hostname: "https://webuyindubai.com",
    //   routes: [
    //     { url: "/", changefreq: "daily", priority: 1 },
    //     { url: "/luxury-watches", changefreq: "daily", priority: 0.8 },
    //   ],
    // }),
  ],
  build: {
    reportCompressedSize: true,
    chunkSizeWarningLimit: 500,
    emptyOutDir: true,
  },
});
