import Client from './api'

export const GetClasses = async () => {
  try {
    const res = await Client.get('/api/classes')
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetClassById = async () => {
  try {
    const res = await Client.get('/api/classes/:class_id')
    return res.data
  } catch (error) {
    throw error
  }
}

export const getClassBySubject = async () => {
  try {
    const res = await Client.get('/api/classes/:class_subject')
    return res.data
  } catch (error) {
    throw error
  }
}

export const CreateClass = async () => {
  try {
    const res = await Client.post('/api/classes')
    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdateClass = async () => {
  try {
    const res = await Client.put('/api/classes/:class_id')
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteClass = async () => {
  try {
    const res = await Client.delete('/api/classes/:class_id')
    return res.data
  } catch (error) {
    throw error
  }
}
