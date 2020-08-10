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

  updateProduct: (id_product, data) => {
    return new Promise((resolve, reject) => {
      connection.query("UPDATE product SET ? WHERE id_product= ?", [data, id_product], (err, result) => {
        if(!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  productDetail: (id_product) => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM product WHERE id_product= ?", [id_product], (err, result) => {
          if(!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        })
      }
    )
  },
  
  getPage: (page)=> {
    const dataPage = 6;
    const firstData = dataPage * page - dataPage;
    return new Promise((resolve,reject)=> {
      connection.query("SELECT * FROM `product` ORDER BY id_product ASC LIMIT ?, ?",[firstData, dataPage], (err,result)=> {
        if(!err){
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
}