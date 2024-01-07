'use strict';

const Controller = require('egg').Controller;

class ApiController extends Controller {
  async test() {
    const { ctx } = this;

    ctx.body = 'Hello, SSR!';
  }
}

module.exports = ApiController;
