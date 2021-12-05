const Joi = require('joi')

//validating req.body for signup
const signupValidator = (req) => {
  //defining schema
  const schema = Joi.object({
    name: Joi.string().min(4).max(50).required(),
    email: Joi.string().min(8).max(50).required().email(),
    password: Joi.string().min(8).max(255).required(),
  })

  return schema.validate(req)
}

//validating req.body for login

const loginValidator = (req) => {
  //define schema
  const schema = Joi.object({
    email: Joi.string().min(8).max(50).required().email(),
    password: Joi.string().min(8).max(255).required(),
  })

  return schema.validate(req)
}

module.exports = {
  loginValidator,
  signupValidator,
}
