import Client from './api'

export const SignInUser = async (data) => {
  try {
    const res = await Client.post('/api/users/login', data)
    localStorage.setItem('token', res.data.token)
    // Set the current signed in users token to localStorage
    return res.data.user
  } catch (error) {
    throw error
  }
}

export const RegisterUser = async (data) => {
  try {
    const res = await Client.post('/api/users/register', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdatePassword = async (data) => {
  try {
    const res = await Client.put('/api/users/updatePassword/:user_id', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdateEmail = async (data) => {
  try {
    const res = await Client.put('/api/users/updateEmail/:user_id', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetUserById = async (data) => {
  try {
    const res = await Client.get('/api/users/:user_id', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteUser = async (data) => {
  try {
    const res = await Client.delete('/api/users/:user_id', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CheckSession = async () => {
  try {
    // Checks if the current token if it exists is valid
    const res = await Client.get('/api/users/session')
    return res.data
  } catch (error) {
    throw error
  }
}
