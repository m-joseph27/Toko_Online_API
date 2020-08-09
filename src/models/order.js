require('dotenv').config();
const connection = require('../config/db');

module.exports = {
  getOrder: () => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM order_product", (err, result) => {
        if(!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  insertOrder: (data) => {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO order_product SET ?", data, (err, result) => {
        if(!err) {
          resolve(result)
        }else {
          reject(new Error(err))
        }
      })
    })
  },
  
  updateOrder: (id_order, data) => {
    return new Promise((resolve, reject) => {
      connection.query("UPDATE order_product SET ? WHERE id_order= ?", [data, id_order], (err, result) => {
        if(!err) {
          console.log(result)
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  orderDetail: (id_order) => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT order_product.*, product.nm_product,product.price,product.description, user.nm_user FROM order_product INNER JOIN product ON order_product.id_product = product.id_product INNER JOIN user ON order_product.id_user = user.id_user WHERE id_order= ?", [id_order],(err, result) => {
          if(!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        })
      }
    )
  },
}