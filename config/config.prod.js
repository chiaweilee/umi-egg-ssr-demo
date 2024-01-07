'use strict';

const path = require('path');

module.exports = (appInfo) => {
  const config = {};

  config.cluster = {
    listen: {
      port: 80,
      hostname: '0.0.0.0',
    },
  };

  return config;
};
