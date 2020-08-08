const express = require('express');
const Router = express.Router();
const categoryDetail = require('../controller/product');
const cors = require('cors');

Router
  .get('/', categoryDetail.getProduct)
  .post('/insert', categoryDetail.insertProduct)
  .patch('/id_product', categoryDetail.updateProduct)

  module.exports = Router;