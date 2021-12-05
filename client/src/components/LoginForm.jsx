import React from 'react'
import { loginHelper } from '../utils/api/auth'
import { Formik } from 'formik'
import { loginValidator } from '../utils/clientValidator'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

const LoginForm = () => {
  const navigate = useNavigate()
  const handleSubmit = async (values) => {
    loginHelper(values, toast, navigate)
  }
  return (
    <div className="container">
      <ToastContainer />
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={loginValidator}
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
              Create an Account <a href="/register">Signup.</a>
            </div>

            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default LoginForm
