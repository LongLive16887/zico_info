import { defineConfig } from 'astro/config';

export default defineConfig({
  // Основной адрес: из него строятся канонические ссылки, hreflang, og:image и sitemap
  site: 'https://zico.uz',
  output: 'static',
  compressHTML: true,
  devToolbar: { enabled: false },
});
