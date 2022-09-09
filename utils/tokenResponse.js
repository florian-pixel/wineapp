const User = require('../models/User')

exports.tokenResponse = async (id, statuscode, res) => {
    const token = await User.getSignedJwtToken(id)
    const cookieOptions = {
        expires: new Data(Date.now() + 1 * 24 * 60 * 60 * 1000),
        httpOnly: true
    }
    res
        .status(statuscode)
        .coockie('token', token, cookieOptions)
        .json({
            success: true,
            token
        })
}