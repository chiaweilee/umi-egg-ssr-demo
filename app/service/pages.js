'use strict';

const Service = require('egg').Service;

class PagesService extends Service {
  async hello() {
    return 'Hello, SSR!';
  }
}

module.exports = PagesService;
