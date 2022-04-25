class Transaction {    
    static getTransactionUser = async (idUser) => {
      const db = require("../models");
      const transactionTable = db.transactions;
      const data = await transactionTable.findAll({where: {
        idUser
      }});
      return data
    };
    static insertTransactionUser = async (row) => {
      console.log('masuukk')
      const db = require("../models");
      const transactionTable = db.transactions;
      console.log('row ', row)
      const data = await transactionTable.create(row)
      return data
    }
    static deleteTransactionUser = async(id) => {
      const db = require("../models");
      const transactionTable = db.transactions;
      const data = await transactionTable.destroy({
        where: { id }
      })
      return data
    }
  }
  
  module.exports = {Transaction}