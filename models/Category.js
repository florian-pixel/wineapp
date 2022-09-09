const {DataTypes} = require('sequelize')
const db = require('../database/db')
const Product = require('./User')

const categoryModel= {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        allowNull: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}

const categoryOptions = {
    timestamps: true,
    createdAt: true,
    updatedAt: true,
    modelName: 'Category'
}

const Category = db.define('Category', categoryModel, categoryModel)

Product.category = Product.belongsTo(Category)
Category.products = Category.hasMany(Product,{
    as:'products',
    onDelete: 'CASCADE',
    onUpdate: ''
})

module.exports = Category