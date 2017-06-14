'use strict';

/**
 * Modulo que contiene la configuracion de Express.
 *
 * @module
 * @author Guillermo A. Fernández Kessler
 */

const express = require('express');
const cors = require('cors');
const path = require('path');
const morganLogger = require('morgan');
const compress = require('compression');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const swaggerUi = require('swagger-ui-express');
const config = require('../config/config');
const logger = require('./logger');
const utils = require('../common/utils');
const errorHandler = require('./error/error-handler');
const swaggerConfig = require('./swagger');
const healthServices = require('./health/health-routes');

/**
 * Crea una Express app
 *
 * @returns {*}
 */
function createExpressApp() {

  const app = express();

  app.use(cors(config.corsConfig));

  // compress all requests
  app.use(compress());

  // Request body parsing middleware should be above methodOverride
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
  app.use(methodOverride());

  // Use helmet to secure Express headers
  app.use(helmet());

  // Logging express request
  if (config.logging.express) {
    app.use(morganLogger('combined', { stream: logger.stream }));
  }

  // Health services
  app.use('/node-archetype', healthServices);

  // Require routing
  const routes = utils.getModulesPaths(config.routes);

  routes.forEach((routePath) => {
    const route = require(path.resolve(routePath));
    app.use('/node-archetype', route);
  });

  app.set('port', config.server.port);

  // Error Handler
  app.use(errorHandler.logErrors);
  app.use(errorHandler.errorHandler);

  // Swagger
  app.use('/node-archetype', swaggerUi.serve, swaggerUi.setup(swaggerConfig));


  return app;
}

module.exports = createExpressApp();

