import {defineConfig} from "vite";
import nunjucks from 'vite-plugin-nunjucks';

export default defineConfig({
  base: "/softline",
  plugins: [
    nunjucks()
  ]
})