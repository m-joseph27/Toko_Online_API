const express = require('express');
const Router = express.Router();
const categoryUser = require('../controller/user');

Router
  .get('/', categoryUser.getUser)
  .get('/:id_user', categoryUser.detailUser)
  .post('/insert', categoryUser.insertUser)
  .patch('/:id_user', categoryUser.updateUser)

module.exports = Router;