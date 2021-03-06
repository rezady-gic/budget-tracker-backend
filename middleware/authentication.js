const jwt = require('jsonwebtoken');
require('dotenv').config()
class Authentication{
    static checkToken(req, res, next) {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
      
        if (token == null) return res.sendStatus(401)
      
        jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
          console.log('error ', err)
          if (err) return res.sendStatus(403)
          req.user = user
          next()
        })
      }
      
}

module.exports = { Authentication }