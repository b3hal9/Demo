import React from 'react'
import { registerHelper } from '../utils/api/auth'
import { Formik } from 'formik'
import { registerValidator } from '../utils/clientValidator'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const RegisterForm = () => {
  const navigate = useNavigate()

  const handleSubmit = async (values) => {
    registerHelper(values, toast, navigate)
  }
  return (
    <div className="container">
      <ToastContainer />
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={registerValidator}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputname1" className="form-label">
                User Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputname1"
                aria-describedby="nameHelp"
                onBlur={handleBlur('name')}
                onChange={handleChange('name')}
                value={values.name}
              />
              {errors.name && touched.name ? (
                <div className="errortext">{errors.name}</div>
              ) : null}
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onBlur={handleBlur('email')}
                onChange={handleChange('email')}
                value={values.email}
                required
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
              {errors.email && touched.email ? (
                <div className="errortext">{errors.email}</div>
              ) : null}
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onBlur={handleBlur('password')}
                onChange={handleChange('password')}
                value={values.password}
                required
              />
              {errors.password && touched.password ? (
                <div className="errortext">{errors.password}</div>
              ) : null}
            </div>
            <div className="mb-3">
              Already have an Account? <a href="/login">Login.</a>
            </div>

            <button type="submit" className="btn btn-primary">
              SignUp
            </button>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default RegisterForm
