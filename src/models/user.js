require('dotenv').config();
const connection = require('../config/db');

module.exports = {
  getUser: () => {
    return new Promise((resolve, reject) => {
      let sort = true;
        if(sort) {
          connection.query("SELECT * FROM user", (err, result) => {
            if(!err) {
              resolve(result)
            } else {
              reject(new Error(err))
            }
          });
        };
    });
  },

  insertUser: (id_user) => {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO user SET ?", id_user, (err, result) => {
        if(!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  updateUser: (id_user, data) => {
    return new Promise((resolve, reject) => {
      connection.query("UPDATE user SET ? WHERE id_user= ?", [data, id_user], (err, result) => {
        if(!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  userDetail: (id_user) => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM user WHERE id_user= ?", [id_user], (err, result) => {
        if(!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  register: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO user SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },
  
  login: (email) => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM user WHERE email = ?", email,  (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error(err));
          }
      })
    })
  },
}