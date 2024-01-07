'use strict';

const path = require('path');

module.exports = (appInfo) => {
  const config = {};

  config.keys = `${appInfo.name}`;

  config.static = {
    prefix: '/',
    dir: path.resolve('dist'),
  };

  config.ssrConfig = {
    startTime: (new Date()).valueOf(),
  }

  return config;
};
