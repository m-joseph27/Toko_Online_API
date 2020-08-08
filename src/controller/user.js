const categoryModel = require('../models/user');
const helper = require('../helper/helpers');
const { response } = require('../helper/helpers');

module.exports = {
  getUser: (req, res) => {
    const result = {}
    categoryModel.getUser().then((results) => {
      if(results.length === 0) {
        result.status = 404;
        result.message = 'user not found';
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
      helper.response(res, result)
    })
  },

  insertUser: (req, res) => {
    const data = req.body;
    const result = {};
    categoryModel.insertUser(data).then((result) => {
      if(data === undefined) {
        result.status = 404;
        result.message = 'failed to insert new user';
        helper.response(res, result);
      } else {
        result.status = 200;
        result.message = 'OK';
        result.data = data;
        helper.response(res, result)
      }
    })
  },
}