import apiClient from '../client'

export const loginHelper = async (data, toast, navigate) => {
  const endpoint = '/login'
  const response = await apiClient.post(endpoint, data)
  if (response.ok) {
    return navigate('/dashboard')
  } else if (response.problem) {
    return toast.error(response.data || response.problem)
  }
}

export const registerHelper = async (data, toast, navigate) => {
  const endpoint = '/register'
  const response = await apiClient.post(endpoint, data)
  if (response.ok) {
    console.log(response.data)
    return navigate('/login')
  } else if (response.problem) {
    return toast.error(response.data || response.problem)
  }
}
