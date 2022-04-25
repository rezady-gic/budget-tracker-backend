class User {        
  static getUser = async (userLogin) => {
    const db = require("../models");
    const userDatabase = db.users;
    const {id,username, password} = await userDatabase.findOne({ where: { username: userLogin} });
    return {id,username, password}
  };
}

module.exports = {User}