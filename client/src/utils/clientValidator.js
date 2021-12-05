import * as Yup from 'yup'

export const loginValidator = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().label('Password').min(8),
})

export const registerValidator = Yup.object().shape({
  name: Yup.string().required().label('Username').min(4).max(16),
  email: Yup.string().required().email().label('Email').min(8).max(50),
  password: Yup.string().required().label('Password').min(8),
})
