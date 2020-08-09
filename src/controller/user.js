const categoryModel = require('../models/user');
const helper = require('../helper/helpers');

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
    data.photo = `http://localhost:1111/api/upload/${req.file.filename}`
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

  updateUser: (req, res) => {
    const idUser = req.params.id_user;
    const data = req.body;
    const result = {};
    data.photo = `http://localhost:1111/api/upload/${req.file.filename}`
    categoryModel.updateUser(idUser, data).then((result) => {
      if(data === 0) {
        result.status = 404;
        result.message = 'failed to update user';
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

  detailUser: (req, res) => {
    const idUser = req.params.id_user;
    const result = {};
    categoryModel.userDetail(idUser).then((result) => {
      if(result.length === 0) {
        result.status = 404;
        result.message = 'User not found';
        helper.response(res, result);
      } else {
        result.status = 200;
        result.message = 'OK';
        result.data = result;
        helper.response(res, result);
      }
    })
    .catch(err => {
      result.message = 'internal server error';
      result.err = err;
      helper.response(res, result)
    })
  }
}