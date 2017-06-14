'use strict';

/**
 * Inicia la app.
 *
 * @module
 * @author Guillermo A. Fernández Kessler
 */

const app = require('./middlewares/express');
const logger = require('./middlewares/logger');

const server = app.listen(app.get('port'), () => {
  logger.info('Express server listening on port %s', server.address().port);
});
