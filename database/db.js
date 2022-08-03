const {Sequelize} = require('sequelize')

const db = new Sequelize('wineapp', 'florian', 'flo256', {
    host: 'localhost',
    dialect: 'postgres'
})

module.exports = db