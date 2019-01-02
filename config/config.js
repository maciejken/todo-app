'use strict';
const logger = require('../libs/logger');

module.exports = function () {
  const env = process.env.NODE_ENV;
  if (env) {
    logger.info(`NODE_ENV variable is set to "${env}"`)
    return require(`./config.${env}`);
  } else {
    logger.info('NODE_ENV not found. Used "development" by default');
    return require('./config.development.js');
  }
};
