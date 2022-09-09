const database = require('../database/db')
const User = require('../models/User')
const {tokenResponse} = require('../utils/tokenResponse')

exports.signin = async (req, res, next) => {
    const user = await User.findOne({
        where: {
            email: req.body.email
        }
    })

    const compare = user.matchPassword(req.body.password)
    if (!user || !compare){
        return res.status(401).json({msg: 'Invalid credentials'})
    }
    return tokenResponse(user.id, 200, res)
}