const {Router} = require('express')

const userRouter = require('./user')
const authRouter = require('./auth')


const appRouter = Router()

appRouter.use('/users', userRouter)
appRouter.use('/auth', authRouter)

module.exports = appRouter