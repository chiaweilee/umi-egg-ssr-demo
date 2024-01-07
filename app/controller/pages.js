'use strict';

const Controller = require('egg').Controller;
const routes = require('../../config/routes');

class HomeController extends Controller {
  async routes() {
    const { ctx, config } = this;
    const path = ctx.request.url;

    let response;
    const route = routes.find((route) => route.path === path);
    if (route?.service && ctx.service.pages?.[route.service]) {
      response = await ctx.service.pages[route.service]();
    }

    const render = require('../../dist/umi.server');
    const getInitialPropsCtx = { ssrConfig: config.ssrConfig, response };
    const { html, error } = await render({
      path,
      getInitialPropsCtx,
    });

    if (error) {
      ctx.logger.error('[SSR] Render Error', error, ctx.url);
    }

    ctx.set('Content-Type', 'text/html');
    ctx.body = html;
  }
}

module.exports = HomeController;
