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
}