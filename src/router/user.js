const express = require('express');
const Router = express.Router();
const categoryUser = require('../controller/user');

Router
  .get('/', categoryUser.getUser)
  .post('/insert', categoryUser.insertUser)

module.exports = Router;