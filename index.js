const express = require('express')
const db = require('./database/db')
const router = require('./routes/User')

const app = express()

db.authenticate()
    .then(() => console.log('Database connected'))
    .catch(err => console.log(err))

db.sync()
    .catch(err => console.log(err))

app.use(express.urlencoded({ extended: true }, { limit: '50mb' }))
app.use(express.json({ limit: '50mb' }, { type: '*/*' }))

app.use('/api', router)
app.listen(4000)