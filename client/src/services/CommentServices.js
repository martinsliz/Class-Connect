import Client from './api'

export const GetComments = async () => {
  try {
    const res = await Client.get('api/comments')
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetCommentDetails = async () => {
  try {
    const res = await Client.get('api/comments/comment:id')
    return res.data
  } catch (error) {
    throw error
  }
}

export const CreateComment = async (req, res) => {
  try {
    const res = await Client.post('api/comments/')
    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdateComment = async () => {
  try {
    const res = await Client.put('api/comments/comment:id')
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteComment = async () => {
  try {
    const res = await Client.delete('/api/comments/comment:id')
    return res.data
  } catch (error) {
    throw error
  }
}
