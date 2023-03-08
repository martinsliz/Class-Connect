import Client from '../services/api'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ClassDetails = ({ user, account }) => {
  let navigate = useNavigate()
  const { id } = useParams()
  const [classDetails, setClassDetails] = useState({})
  const [comments, setComments] = useState([])
  let [enrolled, setEnrolled] = useState(false)
  let [unenrolled, setUnEnrolled] = useState(true)

  useEffect(() => {
    const getClassDetails = async () => {
      const response = await Client.get(`/api/classes/${id}`)
      // console.log(response.data.comments)
      setClassDetails(response.data)
      setComments(response.data.comments.slice(0, 10))
    }
    getClassDetails()
  }, [id])

  const button = () => {
    for (let i = 0; i < account.classes?.length; i++) {
      if (account.classes[i].id === classDetails?.id) {
        enrolled = true
        unenrolled = false
        return
      }
    }
  }

  button()

  const handleEnrolled = async () => {
    if (user) {
      await Client.post(`/api/classlists/${user.id}/${classDetails.id}`)
      await Client.put(`/api/users/updateUserDetails/${user.id}`, {
        totalCredits: classDetails.credits + account.totalCredits
      })
      setEnrolled(true)
      window.location.reload(false)
    }
  }

  const handleUnEnrolled = async () => {
    if (user) {
      await Client.delete(`/api/classlists/${user.id}/${classDetails.id}`)
      await Client.put(`/api/users/updateUserDetails/${user.id}`, {
        totalCredits: account.totalCredits - classDetails.credits
      })
      setUnEnrolled(true)
      window.location.reload(false)
    }
  }

  return user ? (
    <div className="class-content">
      <div>
        <h1>{classDetails.name}</h1>
      </div>
      <section className="details">
        <div className="flex-row">
          <div className="detail">
            <h3>Name: {classDetails.name}</h3>
          </div>
          <div className="detail">
            <h3>Subject: {classDetails.subject}</h3>
          </div>
          <div className="detail">
            <h3>Description: {classDetails.description}</h3>
          </div>
          <div className="detail">
            <h3>Semester: {classDetails.semester}</h3>
          </div>
          <div className="detail">
            <h3>Teacher: {classDetails.teacher}</h3>
          </div>
          <div className="detail">
            <h3>Credits: {classDetails.credits}</h3>
          </div>
          {!enrolled && (
            <div>
              <button onClick={handleEnrolled}>Enroll</button>
            </div>
          )}
          {!unenrolled && (
            <div>
              <button onClick={handleUnEnrolled}>Withdrawl</button>
            </div>
          )}
        </div>
        <div>
          <h3 className="class-preview">Comments</h3>
          <button onClick={() => navigate(`/form/${user.id}/${id}`)}>
            Post a Comment
          </button>
          {comments?.map((comment) => (
            <div className="comment-container" key={comment.id}>
              <p>Comment: {comment.content}</p>
              <button>Update Comment</button>
              <button>Delete Comment</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  ) : (
    <div className="protected">
      <h3>Oops! You must be signed in to do that!</h3>
      <button onClick={() => navigate('/signin')}>Sign In</button>
    </div>
  )
}

export default ClassDetails
