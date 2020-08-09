const express = require('express');
const Router = express.Router();
const categoryOrder = require('../controller/order');

Router
  .get('/', categoryOrder.getOrder)
  .get('/:id_order', categoryOrder.detailOrder)
  .post('/insert', categoryOrder.insertOrder)
  .patch('/:id_order', categoryOrder.updateOrder)

  module.exports = Router;