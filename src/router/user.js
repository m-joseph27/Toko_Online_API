const express = require('express');
const Router = express.Router();
const categoryUser = require('../controller/user');
const multer = require('multer');
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
  .get('/', categoryUser.getUser)
  .get('/:id_user', categoryUser.detailUser)
  .post('/insert', upload.single('photo'), categoryUser.insertUser)
  .patch('/:id_user', upload.single('photo'), categoryUser.updateUser)

module.exports = Router;