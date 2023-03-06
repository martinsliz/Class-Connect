import Client from './api'

export const GetClasses = async () => {
  try {
    const res = await Client.get('/api/classes')
    return res.data
  } catch (error) {
    throw error
  }
}
