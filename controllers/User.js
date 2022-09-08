const User = require('../models/User')
const dayjs = require('dayjs')

exports.createUser = async (req, res, next) => {
    const { dateOfBirth } = req.body
    console.log('params ', req.params)
    const user = await User.create({
        ...req.body
        ,
        dateOfBirth: new Date(dayjs(dateOfBirth, 'DD-MM-YYYY'))
    })
    res.send(user)
}

exports.readOne = async (req, res, next) => {
    const oneUser = await User.findOne({
        where: {
            id: req.params.id
        }
    })
    if (!oneUser) {
        res.send("Utilisateur inexistant")
    } else {
        res.send(oneUser)
    }
}

exports.findAllUser = async (req, res, next) => {
    const allUser = await User.findAll()
    res.send(allUser)
}

exports.deleteUser = async (req, res, next) => {
    const stockSup = await User.destroy({
        where: {
            email: req.body.email
        }
    })
    message = stockSup === 1 ? "ok ustilisateur supprimé" : "utilisateur non supprimé"
    res.send(message)
}

exports.updateUser = async (req, res, next) => {
    const { dateOfBirth } = req.body
    const modify = await User.update({ ...req.body
        ,dateOfBirth: new Date(dayjs(dateOfBirth, 'DD-MM-YYYY')) }, {
        where: {
          email: req.params.email
        }
    })
    console.log(modify)
    if(modify[0] === 1 ){
        const oneUser = await User.findOne({
            where: {
                email: req.body.email
            }
        })
        const message = "utilisateur modifié"
        res.status(200).json({ message, data: oneUser })
    }else{
        res.status(500).send("utilisateur non modifié")
    }
}