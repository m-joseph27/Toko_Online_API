const express = require('express');
const Router = express.Router();
const controlerUser = require('../controller/user');
const multer = require('multer');
const auth = require('../helper/auth');
const storage = multer.diskStorage({
  destination: function(req,file,cb){
    cb(null, './upload')
  },
  filename: function(req,file,cb){
    cb(null, file.originalname)
  }
})
const upload = multer({
  storage
})

Router
  .get('/', controlerUser.getUser)
  .get('/:id_user', controlerUser.detailUser)
  .post('/insert', upload.single('photo'), controlerUser.insertUser)
  .post('/login', controlerUser.login)
  .post('/register', controlerUser.register)
  .patch('/:id_user', upload.single('photo'), controlerUser.updateUser)

module.exports = Router;