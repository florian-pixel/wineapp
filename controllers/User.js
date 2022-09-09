const User = require('../models/User')


exports.createUser = async (req, res, next) => {
    const { dateOfBirth } = req.body
    const user = await User
        .create({
            ...req.body
        })
        .catch(err => { throw new Error(er) })
    return res.status(201).json(user)
}


exports.readAllUser = async (req, res, next) => {
    const users = await User
        .scope('withoutPassword')
        .findAll()
    return res.status(200).json(users)
}


exports.readOneUser = async (req, res, next) => {
    const user = await User.findOne({
        where: {
            id: req.params.id
        }
    })
    if (!user) {
        return res.status(404).send(`This user does not exist in our database`)
    }
    return res.status(200).json(user)

}


exports.updateUser = async (req, res, next) => {
    let user
    await User
        .update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .catch(err => { throw new Error(err) })
    return res.status(200).json({
        success: true
    })
}



exports.deleteUser = async (req, res, next) => {
    const user = await User.findByPk(req.params.id)
    if (!user) {
        return res.status(404).send(` This user does not exist in our database `)
    }
    await user.destroy()
    return res.status(200).json({
        success: true
    })
}