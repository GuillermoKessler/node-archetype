'use strict';

/**
 * Product Controller.
 *
 * @module
 * @author Guillermo Fernández Kessler
 */

const logger = require('../../../middlewares/logger');
const errorHandler = require('../../../middlewares/error/error-handler');

/**
 * Get All Products.
 *
 * @param req
 * @param res
 */
function getAllProducts(req, res) {

  logger.info('Obteniendo todos los productos');

  const products = [{
    id: 1,
    name: 'Producto 1'
  },
  {
    id: 2,
    name: 'Producto 2'
  }];

  res.jsonp(products);
}

/**
 * Get Product.
 *
 * @param req
 * @param res
 */
function getProduct(req, res) {

  const idParam = req.params.id;

  logger.info('Obteniendo producto con id: %s', idParam);

  const product = {
    id: Number(idParam),
    name: 'Producto 1'
  };

  res.jsonp(product);
}

/**
 * Save Product.
 *
 * @param req
 * @param res
 */
function saveProduct(req, res) {

  logger.info('Creando producto');

  res.jsonp(req.body);
}

/**
 * Update Product.
 *
 * @param req
 * @param res
 */
function updateProduct(req, res) {

  const idParam = req.params.id;

  logger.info('Actualizando producto con id: %s', idParam);

  res.jsonp(req.body);
}

/**
 * Delete Product.
 *
 * @param req
 * @param res
 * @param next
 */
function deleteProduct(req, res, next) {

  logger.error('Funcionalidad no implementada');

  errorHandler.sendError(next, errorHandler.errors.NOT_IMPLEMENTED, 'Custom Message');
}


module.exports = {
  getAllProducts,
  getProduct,
  saveProduct,
  updateProduct,
  deleteProduct
};
