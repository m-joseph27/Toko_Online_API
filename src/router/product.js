const express = require('express');
const Router = express.Router();
const categoryDetail = require('../controller/product');
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
  .get('/', categoryDetail.getProduct)
  .get('/:id_product', categoryDetail.detailProduct)
  .post('/insert', upload.single('photo'), categoryDetail.insertProduct)
  .patch('/:id_product',upload.single('photo'), categoryDetail.updateProduct)

  module.exports = Router;