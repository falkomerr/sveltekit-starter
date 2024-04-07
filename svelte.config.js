import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config}*/
const config = {
  preprocess: [vitePreprocess()],
  kit: {
    adapter: adapter(),
    files: {
      routes: 'src/app',
      lib: 'src',
      appTemplate: 'src/app/index.html',
      assets: 'public'
    },
    alias: {
      '@/*': 'src/*'
    }
  }
};
export default config;
