const express = require('express');
const Router = express.Router();
const categoryDetail = require('../controller/product');

Router
  .get('/', categoryDetail.getProduct)
  .get('/:id_product', categoryDetail.detailProduct)
  .post('/insert', categoryDetail.insertProduct)
  .patch('/:id_product', categoryDetail.updateProduct)

  module.exports = Router;