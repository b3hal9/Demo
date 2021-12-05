const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const { handleLogin, handleRegister } = require('./controllers/auth.controller')
const helmet = require('helmet')
const cookieParser = require('cookie-parser')
const { urlencoded } = require('express')
require('dotenv').config()

//middlewares

app.use(cookieParser())
app.use(helmet())
app.use(express.json())
app.use(cors())
app.use(urlencoded({ extended: false }))

//routes
app.post('/login', handleLogin)
app.post('/register', handleRegister)

//db setup
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('connected to database...')
  })
  .catch((err) => {
    console.log(err)
    return err
  })

//server setup
const Port = process.env.PORT || 5000

app.listen(Port, () => console.log(`server running on port: ${Port}`))
