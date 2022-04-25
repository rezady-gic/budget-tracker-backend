module.exports = (sequelize, Sequelize) => {
    const Transactions = sequelize.define("transaction", {
      idUser: {
        type: Sequelize.INTEGER
      },
      time: {
        type: Sequelize.DATE
      },
      nominal: {
        type: Sequelize.INTEGER
      },
      category: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      }
    });
    return Transactions;
  };