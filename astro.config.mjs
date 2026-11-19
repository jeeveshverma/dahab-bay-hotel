import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jeeveshverma.github.io',
  base: '/dahab-bay-hotel',
  trailingSlash: 'always',
  build: { format: 'directory', assets: '_db', inlineStylesheets: 'always' },
  compressHTML: true,
  devToolbar: { enabled: false },
  image: { responsiveStyles: false },
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
});
