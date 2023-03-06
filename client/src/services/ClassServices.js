import Client from './api'

export const GetClasses = async () => {
  try {
    const res = await Client.get('/classes')
    return res.data
  } catch (error) {
    throw error
  }
}
