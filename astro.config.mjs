import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://nikolajanke.online',
  integrations: [
    react(), 
    markdoc(), 
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: { theme: 'github-dark-dimmed' },
      gfm: true,
    }), 
    sitemap(), 
    tailwind({
      applyBaseStyles: false,
    }), 
    icon()],
  output: "hybrid",
  adapter: cloudflare()
});