const express = require('express');
const product = require('./product');
const user = require('./user');
const order = require('./order');

const Router = express.Router();
Router
  .use('/user', user)
  .use('/product', product)
  .use('/order', order)

module.exports = Router;