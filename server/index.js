require('dotenv').config()

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
const Router = require('./router/router')

const port = process.env.PORT || 3000
const mongoUri = process.env.MONGO_URL_DEV
// const mongoUri = process.env.MONGO_URL_PROD
console.log(mongoUri)
console.log(port)

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB')
}).catch((err) => {
    console.log(err)
})

// Set up CORS to allow requests from all origins
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(Router)
app.listen(port, () => {
    console.log(`App listening on port ${port}!`)
})
