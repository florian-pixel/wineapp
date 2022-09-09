const express = require('express')
const { createUser, readOneUser, readAllUser, deleteUser, updateUser } = require('../controllers/user')
const {protect} = require('../middlewares/auth')

const userRouter = express.Router()

userRouter.post('/', createUser)
userRouter.get('/', protect, readAllUser)
userRouter.get('/:id', readOneUser)
userRouter.put('/:id', updateUser)
userRouter.delete('/:id', deleteUser)


module.exports = userRouter