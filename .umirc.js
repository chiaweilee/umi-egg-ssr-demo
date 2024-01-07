import { defineConfig } from "umi";

export default defineConfig({
  ssr: {},
  routes: require('./config/routes').map(({ path, component }) => ({ path, component })),
});
