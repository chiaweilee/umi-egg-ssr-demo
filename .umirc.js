import { defineConfig } from "umi";

export default defineConfig({
  ssr: {},
  dynamicImport: {},
  routes: require('./config/routes').map(({ path, component }) => ({ path, component })),
  fastRefresh: {},
});
