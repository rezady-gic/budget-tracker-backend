const { User } = require('../models/user.model')
const jwt = require('jsonwebtoken');
require('dotenv').config();

class UserController {    
    static login = async(req, res) => {
        try {
            const {username, password} = req.body
            
            const data = await User.getUser(username)
            if(data.username === username && data.password === password) {
                const token = jwt.sign({username}, process.env.TOKEN_SECRET, { expiresIn: '200000s' });
                return res.json({id:data.id, username, password, token})
            } else {
                return res.json({message: 'login gagal'})
            }
        } catch(error) {
            return res.status(400).json({message: 'login gagal'})
        }
    }
}

module.exports = {UserController}