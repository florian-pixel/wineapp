const {DataTypes} = require('sequelize')
const db = require('../database/db')


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
    dateOfBirth: {
        type: DataTypes.DATE
    },
    email: {
        type: DataTypes.STRING,
        validate: {
            isEmail: true,
        },
        unique: true
    },
    phoneNumber: {
        type: DataTypes.STRING,
        unique: true
    },
    roles: {
        type: DataTypes.STRING,
        validate:{
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
    modelName: 'User'
}
const User = db.define('User', userModel, userOptions)
module.exports = User