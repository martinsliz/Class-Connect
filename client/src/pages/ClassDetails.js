import Client from '../services/api'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ClassDetails = ({ user }) => {
  let navigate = useNavigate()
  const { id } = useParams()
  const [classDetails, setClassDetails] = useState({})

  useEffect(() => {
    const getClassDetails = async () => {
      const response = await Client.get(`/api/classes/${id}`)
      setClassDetails(response.data)
      // console.log(response.data)
    }
    getClassDetails()
  }, [])

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
          <button>Enroll</button>
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
