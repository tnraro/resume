import { defineConfig } from "astro/config";
import rehypeExternalLinks from "rehype-external-links";

// https://astro.build/config
export default defineConfig({
  base: "/resume",
  markdown: {
    rehypePlugins: [
      [rehypeExternalLinks, { rel: ["noreferrer external"] }]
    ],
  }
});
