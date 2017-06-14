'use strict';

/**
 * Modulo que unifica las configuraciones de la app.
 *
 * @module
 * @author Guillermo A. Fernández Kessler
 */

const _ = require('lodash');

module.exports = _.extend(
  require('./api'),
  require('./common'),
  require('./cors'),
  require('./env'),
  require('./logging')
);

