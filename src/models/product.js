require('dotenv').config();
const connection = require('../config/db');

module.exports = {
  getProduct: () => {
    return new Promise((resolve, reject) =>{
      let sort = true;
        if(sort) {
          connection.query("SELECT * FROM product", (err, result) => {
            if(!err) {
              resolve(result)
            } else {
              reject(new Error(err))
            }
          })
        }
    })
  },
  
  categoryDetail: () => {
    return new Promise((resolve, reject) => {
      if(sort) {
        connection.query("SELECT * FROM product", (err, result) => {
          if(!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        })
      }
    })
  },

  insertProduct: (nm_product) => {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO product SET ?", nm_product, (err, result) => {
        if(!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  updateProduct: (id_product) => {
    return new Promise((resolve, reject) => {
      connection.query("UPDATE product SET ? WHERE nm_product= ?", [id_product], (err, result) => {
        if(!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}