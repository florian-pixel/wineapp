const {DataTypes} = require('sequelize')
const db = require('../database/db')
const Product = require('./User')
const User = require('./User')

const Order = db.define('Order',
    {
        purchaseOrderNumber: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        delivery: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        }
    }, 
    {
    timestamps: true,
    createdAt: true,
    modelName: 'Order'
})

Product.belongsToMany(User, {through: Order})
User.belongsToMany(Product, {through: Order})

module.exports