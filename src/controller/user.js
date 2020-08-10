const userControler = require('../models/user');
const helper = require('../helper/helpers');

module.exports = {
  getUser: (req, res) => {
    const result = {}
    userControler.getUser().then((results) => {
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
    userControler.insertUser(data).then((result) => {
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
    userControler.updateUser(idUser, data).then((result) => {
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
    userControler.userDetail(idUser).then((result) => {
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
  },

  register: (req, res) => {
    const data = req.body;
    const result = {};
    data.photo = 'https://www.pinclipart.com/picdir/middle/157-1578186_user-profile-default-image-png-clipart.png', data.status = 0
    userControler.register(data).then((result) => {
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

  login: (req, res) => {
    const {email, password} = req.body;
    const data = {
      email,
      password
    }
    userControler.login(data.email)
      .then((result) => {
        if(result[0] === undefined ) {
          console.log(result)
          result.status = 404;
          result.message = 'Email not found';
          helper.response(res, result)
        } else {
          if (data.password === result[0].password){
            result.status = 200;
            result.message = 'Login succes';
            result.data = data;
            helper.response(res, result)
          } else {
            result.status = 401;
            result.message = 'Incorrect password';
            helper.response(res, result)
          }
        }
      })
      .catch(err => {
        result.message = 'Internal server error';
        result.err = err;
        helper.response(res, result)
      })
  }
}