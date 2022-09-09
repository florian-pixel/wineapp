const {DataTypes} = require('sequelize')
const db = require('../database/db')

const productModel = {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        allowNull: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantity: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    bottlePrice: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    boxPrice: {
        type: DataTypes.BIGINT,
        allowNull: false
    }
}

const productOptions = {
    timestamps: true,
    createdAt: true,
    updatedAt: true,
    modelName: 'Product'
}

const Product = db.define('Product', productModel, productOptions)

module.exports = Product