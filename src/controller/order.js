const categoryModel = require('../models/order');
const helper = require('../helper/helpers');

module.exports = {
  getOrder: (req, res) => {
    const result = {};
    categoryModel.getOrder().then((results) => {
      if(results.length === 0) {
        result.status = 404;
        result.message = 'product not found';
        helper.response(res, result);
      } else {
        result.status = 202;
        result.message = 'OK';
        result.data = results;
        helper.response(res, result);
      }
    })
    .catch(err => {
      result.message = 'internal server error';
      result.err = err;
      helper.response(res,result)
    })
  },

  insertOrder: (req, res) => {
    const data = req.body;
    const result = {};
    categoryModel.insertOrder(data).then((results) => {
      if(data === undefined ) {
        result.status = 404;
        result.message = 'failed to input product';
        helper.response(res, result);
      } else {
        result.status = 200;
        result.message = 'OK';
        result.data = data;
        helper.response(res, result);
      }
    })
    .catch(err => {
      result.message = 'internal server error';
      result.err = err;
      helper.response(res, result)
    });
  },

  detailOrder: (req, res) => {
    const idOrder = req.params.id_order;
    const result = {}
    categoryModel.orderDetail(idOrder).then((result) => {
      if(result.length === 0 ) {
        result.status = 404;
        result.message = 'Order not found';
        helper.response(res, result);
      } else {
        result.status = 200;
        result.message = 'OK';
        result.data = results;
        helper.response(res, result);
      }
    })
    .catch(err => {
      console.log(err)
      result.message = 'internal server error';
      result.err = err;
      helper.response(res, result)
    })
  },

  updateOrder: (req, res) => {
    const idOrder = req.params.id_order;
    const data = req.body;
    const result = {};
    categoryModel.updateOrder(idOrder, data).then((result) => {
      if(data === 0 ) {
        result.status = 404;
        result.message = 'failed to input update';
        helper.response(res, result);
      } else {
        result.status = 200;
        result.message = 'OK';
        result.data = data;
        helper.response(res, result);
      }
    })
    .catch(err => {
      result.message = 'internal server error';
      result.err = err;
      helper.response(res, result)
    });
  },

}