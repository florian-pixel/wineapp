const express = require('express')
const {createUser, readOne,findAllUser,deleteUser,updateUser} = require('../controllers/User')

const router = express.Router()

router.post('/users/create', createUser)
router.get('/users/readall', findAllUser)
router.get('/users/readOne/:id', readOne)
router.delete('/users/delete', deleteUser)

router.put('/users/update/:email',updateUser)
module.exports = router