'use strict';
const http = require('http');
const mongoose = require('mongoose');
const logger = require('./logger');

module.exports = function (app) {
  let port;
  let server;

  port = normalizePort(process.env.PORT_HTTP);
  server = http.createServer(app);
  mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true }, (err) => {
    if (err) {
      logger.error('Unable to connect to MongoDB')
      process.exit(1)
    } else {
      server
        .listen(port)
        .on('error', onError)
        .on('listening', onListening);
    }
  });


  /**
   * Normalize a port into a number, string, or false.
   */
  function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
      // named pipe
      return val;
    }

    if (port >= 0) {
      // port number
      return port;
    }

    return false;
  }

  /**
   * Event listener for HTTP server "error" event.
   */
  function onError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }

    const port = server.address().port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        logger.error(port, 'requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        logger.error(port, 'is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  }

  /**
   * Event listener for HTTP server "listening" event.
   */
  function onListening() {
    const port = server.address().port;
    logger.info(`App listening on port ${port}`);
  }
};