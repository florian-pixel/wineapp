const express = require('express')
const {createUser} = require('../controllers/user')
const {signin} = require('../controllers/auth')

const authRouter = express.Router()

authRouter.post('/signup', createUser)
authRouter.post('/signin', signin)
authRouter.get('/me', )
authRouter.get('/logout', )

module.exports = authRouter