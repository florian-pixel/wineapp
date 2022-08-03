const express = require('express')
const {createUser, readOne,findAllUser,deleteUser,updateUser} = require('../controllers/User')

const router = express.Router()

router.post('/users/create', createUser)
router.get('/users/readall', findAllUser)
router.post('/users/readOne', readOne)
router.delete('/users/delete', deleteUser)

router.patch('/users/update/:email',updateUser)
module.exports = router