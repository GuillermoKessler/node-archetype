'use strict';

/**
 * Modulo que contiene la configuracion ajena al entorno de la app.
 *
 * @module
 * @author Guillermo A. Fernández Kessler
 */

const packageJson = require('../package.json');

module.exports = {

  apiInfo: {
    title: 'node-archetype API Documentation',
    name: packageJson.name,
    version: packageJson.version,
    description: packageJson.description
  }
};
