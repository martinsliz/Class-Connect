import Client from './api'

export const GetComments = async () => {
  try {
    const res = await Client.get('api/comments')
    return res.data
  } catch (error) {
    throw error
  }
}
