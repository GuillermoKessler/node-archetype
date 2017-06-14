'use strict';

/**
 * Router de los servicios de health check.
 *
 * @module
 * @author Guillermo A. Fernández Kessler
 */

const express = require('express');
const router = express.Router();
const healthController = require('./health-controller');

/**
 * @swagger
 * /keep-alive:
 *   get:
 *     tags:
 *       - Health
 *     summary: Chequea que la api se este ejecutando
 *     description: Chequea que la api se este ejecutando
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/keep-alive', healthController.getStatus);

module.exports = router;

