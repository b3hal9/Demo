const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50,
    minLength: 5,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    maxlength: 50,
    minLength: 8,
  },
  password: {
    type: String,
    required: true,
    maxlength: 255,
    minLength: 8,
  },
})

module.exports = new mongoose.model('user', userSchema)
