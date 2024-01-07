'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx, config } = this;
    const path = ctx.request.url;

    const render = require('../../dist/umi.server');
    const getInitialPropsCtx = { ssrConfig: config.ssrConfig };
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
