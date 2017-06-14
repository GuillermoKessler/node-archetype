'use strict';

/**
 * Modulo con la configuracion de Swagger.
 *
 * @module
 * @author Guillermo A. Fernández Kessler
 */

const swaggerJSDoc = require('swagger-jsdoc');
const config = require('./../config/config');

const swaggerDefinition = {
  info: {
    title: config.apiInfo.title,
    version: config.apiInfo.version,
    description: config.apiInfo.description
  },
  basePath: '/node-archetype'
};

const options = {
  swaggerDefinition,
  apis: [config.routes, './middlewares/health/health-routes.js']
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
