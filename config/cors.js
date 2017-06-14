'use strict';

/**
 * Modulo que contiene la configuracion de CORS.
 *
 * @module
 * @author Guillermo A. Fernández Kessler
 */

module.exports = {

  corsConfig: {
    origin: '*',
    methods: [
      'GET',
      'POST',
      'PUT',
      'DELETE',
      'HEAD',
      'OPTIONS'
    ],
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'Type',
      'Authorization'
    ],
    credentials: true,
    preflightContinue: true
  },
};
