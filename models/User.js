const { DataTypes } = require('sequelize')
const db = require('../database/db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userModel = {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        allowNull: true,
        primaryKey: true
    },
    lastName: {
        type: DataTypes.STRING,

    },
    firstName: {
        type: DataTypes.STRING
    },
    fullName: {
        type: DataTypes.VIRTUAL,
        get() {
            return `${this.firstName} ${this.lastName}`
        }
    },
    email: {
        type: DataTypes.STRING,
        validate: {
            isEmail: true,
        },
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        validate: {
            isAlphanumeric: true
        }
    },
    phoneNumber: {
        type: DataTypes.STRING,
        unique: true
    },
    role: {
        type: DataTypes.STRING,
        validate: {
            isIn: [['admin', 'client', 'superadmin']]
        },
        defaultValue: 'client',
        allowNull: true
    }
}

const userOptions = {
    timestamps: true,
    createdAt: true,
    updatedAt: true,
    scopes: {
        withoutPassword: {
            attributes: [
                "id",
                "lastName",
                "firstName",
                "fullName",
                "email",
                "phoneNumber",
                "role"
            ]
        }
    },
    hooks: {
        beforeCreate: async function(user, options){
            if(user.password){
                const salt = await bcrypt.genSalt(10)
                user.password = await bcrypt.hash(user.password, salt)
            }
        }
    },
    modelName: 'User'
}
const User = db.define('User', userModel, userOptions)

User.getSignedJwtToken = (id) => jwt.sign(
    {id},
    process.env.SECRET,
    {expiresIn: '1d'}
)

User.prototype.matchPassword = async function (password){
    return bcrypt.compareSync(password, this.dataValues.password)
}



module.exports = User