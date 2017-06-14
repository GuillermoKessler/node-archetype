'use strict';

/**
 * Health Controller. Chequea el status de las dependencias y funcionamiento de la app.
 *
 * @module
 * @author Guillermo A. Fernández Kessler
 */

/**
 * Servicio de chequeo de la app.
 *
 * @param req
 * @param res
 */
function getStatus(req, res) {
  res.sendStatus(200);
}


module.exports = {
  getStatus
};
