const categoryModel = require('../models/product');
const helper = require('../helper/helpers')

module.exports = {
  getProduct: (req, res) => {
    categoryModel.getProduct().then((result) => {
      helper.response(res, result, 200);
    })
    .catch(err => console.log(err));
  },


  insertProduct: (req, res) => {
    const {nm_product} = req.body;
    const data = {nm_product}
    categoryModel.insertProduct(data).then((result) => {
        res.send(result);
      })
      .catch(err => console.loq(err));
  },

  updateProduct: (req, res) => {
    const {nm_product} = req.id_product;
    const data = {nm_product}
    categoryModel.updateProduct(data).then((result) => {
      res.send(result);
    })
      .catch(err => console.log(err));
  },

}