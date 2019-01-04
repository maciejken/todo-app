'use strict';
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const logger = require('./logger');
const errorHandler = require('errorhandler');
const express = require('express');

module.exports = function (app) {

  app.use(morgan('combined', {
    stream: {
      write: function (message) {
        logger.info(message);
      }
    }
  }));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(cors({
    origin: 'http://localhost:4200'
  }));
  app.use('/public', express.static(__dirname + '/../public'));
  app.use('/api', express.static(__dirname + '/../apidoc'));

  if (process.env.NODE_ENV === 'development') {
    app.use(errorHandler({
      log: errorNotification
    }));
  }

  function errorNotification(err, str, req) {
    const title = 'Error in ' + req.method + ' ' + req.url;
    logger.error(title, str);
  }
};