const express = require('express');
const product = require('./product');
const user = require('./user');

const Router = express.Router();
Router
  .use('/user', user)
  .use('/product', product)

module.exports = Router;