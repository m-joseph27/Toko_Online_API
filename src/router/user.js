const express = require('express');
const Route = express.Router();
const userController = require('../controller/user');
const { Router } = require('express');

Route
  .get('/', userController.getUser)

module.exports = Router;