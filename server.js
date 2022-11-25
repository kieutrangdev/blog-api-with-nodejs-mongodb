const express = require("express")
const dotenv = require('dotenv')
dotenv.config()
require('./config/dbConnect')

const app = express()


const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`running on ${PORT}`)
})