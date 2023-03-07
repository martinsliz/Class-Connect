import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CreateComment } from '../services/CommentService'

const PostComment = () => {
  let navigate = useNavigate()
  const { id } = useParams()

  const initialState = {
    content: ''
  }
  const [createComment, setCreateComment] = useState(initialState)

  const handleChange = (event) => {
    setCreateComment({ ...createComment, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await { CreateComment }
    navigate(`/api/comments/${id}/`)
  }


  return (
    <div className="reviewContainer">
      <div className="formBox">
        <form onSubmit={handleSubmit}>
          <h2>Post a comment!</h2>
          <label htmlFor="content">Comment</label>
          <input
            placeholder='Leave review here'
            type="text"
            id="content"
            className='content'
            onChange={handleChange}
            value={createComment.content}
          ></input>
          <button className="formSubmit-btn" type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}

export default PostComment