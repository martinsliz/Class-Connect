import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Client from '../services/api'

const PostComment = () => {
  let navigate = useNavigate()
  const { userId } = useParams()
  const { classId } = useParams()

  const initialState = {
    content: ''
  }
  const [createComment, setCreateComment] = useState(initialState)

  const handleChange = (event) => {
    setCreateComment({ ...createComment, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await Client.post(`/api/comments/${userId}/${classId}`, )
    navigate(`/classDetails/${classId}/`)
  }


  return (
    <div className="reviewContainer">
      <div className="formBox">
        <form onSubmit={handleSubmit}>
          <h2>Post a comment!</h2>
          <label htmlFor="content"></label>
          <textarea
            cols="40" rows="5"
            placeholder='Leave review here'
            id="content"
            onChange={handleChange}
            value={createComment.content}
          ></textarea>
          <div>
          <button className="formSubmit-btn" type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PostComment