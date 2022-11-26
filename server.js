const express = require("express")
const dotenv = require('dotenv')
dotenv.config()
require('./config/dbConnect')

const app = express()

//routes
//-----
    // user router
    // app.post('/api/v1/users/register')



const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`running on ${PORT}`)
})
