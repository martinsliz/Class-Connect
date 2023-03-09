import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Client from '../services/api'

const ClassPreview = ({ user }) => {
  let navigate = useNavigate()
  const { name } = useParams()
  const [classes, setClasses] = useState([])

  useEffect(() => {
    const handleClasses = async () => {
      const data = await Client.get(`/api/classes/subject/${name}`)
      setClasses(data.data)
    }
    handleClasses()
  }, [name])

  return user ? (
    <div>
      <h1>Classes</h1>
      <div className="class-preview">
        {classes?.map((lecture) => (
          <div
            className="class-container"
            key={lecture.id}
            onClick={() => navigate(`/classDetails/${lecture.id}`)}
          >
            <h2>Name: {lecture.name}</h2>
            <p>Semester: {lecture.semester}</p>
            <p>Credits: {lecture.credits}</p>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="protected">
      <h3>Oops! You must be signed in to do that!</h3>
      <button onClick={() => navigate('/signin')}>Sign In</button>
    </div>
  )
}

export default ClassPreview
