'use strict';

/**
 * Product Router.
 *
 * @module
 * @author Guillermo Fernández Kessler
 */

const express = require('express');
const router = express.Router();
const productController = require('./product-controller');


/**
 * @swagger
 * definitions:
 *   Product:
 *     type: object
 *     required:
 *       - id
 *       - name
 *     properties:
 *       id:
 *         type: integer
 *         format: int64
 *         description: ID de producto
 *       name:
 *         type: string
 *         description: Nombre de producto
 */

/**
 * @swagger
 * /v1/products:
 *   get:
 *     tags:
 *       - API v1
 *     summary: Obtiene todos los productos
 *     description: Obtiene todos los productos
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Retorna productos
 *         schema:
 *           $ref: '#/definitions/Product'
 */
router.get('/v1/products', productController.getAllProducts);

/**
 * @swagger
 * /v1/products/{id}:
 *   get:
 *     tags:
 *       - API v1
 *     summary: Obtiene producto
 *     description: Obtiene producto a partir de un id
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID de producto
 *         required: true
 *         type: integer
 *         format: int64
 *     responses:
 *       200:
 *         description: Retorna un producto
 *         schema:
 *           $ref: '#/definitions/Product'
 */
router.get('/v1/products/:id', productController.getProduct);

/**
 * @swagger
 * /v1/products:
 *   post:
 *     tags:
 *       - API v1
 *     summary: Crea un producto
 *     description: Crea un producto
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: row
 *         description: Un producto
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Product'
 *     responses:
 *       200:
 *         description: Producto creado
 *         schema:
 *           $ref: '#/definitions/Product'
 */
router.post('/v1/products', productController.saveProduct);

/**
 * @swagger
 * /v1/products/{id}:
 *   put:
 *     tags:
 *       - API v1
 *     summary: Actualiza producto
 *     description: Actualiza producto a partir de un id
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID de producto
 *         required: true
 *         type: integer
 *         format: int64
 *       - name: body
 *         in: body
 *         description: Producto a actualizar
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Product'
 *     responses:
 *       200:
 *         description: Retorna un producto
 *         schema:
 *           $ref: '#/definitions/Product'
 */
router.put('/v1/products/:id', productController.updateProduct);

/**
 * @swagger
 * /v1/products/{id}:
 *   delete:
 *     tags:
 *       - API v1
 *     summary: Borra producto
 *     description: Borra producto a partir de un id
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID de producto
 *         required: true
 *         type: integer
 *         format: int64
 *     responses:
 *       204:
 *         description: Producto borrado
 */
router.delete('/v1/products/:id', productController.deleteProduct);

module.exports = router;
