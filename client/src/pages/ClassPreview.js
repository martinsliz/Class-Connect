import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Client from '../services/api'

const ClassPreview = ({ user }) => {
  let navigate = useNavigate()
  const [classes, setClasses] = useState([])

  useEffect(() => {
    if (user) {
      const handleAccount = async () => {
        const data = await Client.get(`/api/classes/:class_subject`)
        setClasses(data.data)
      }
      handleAccount()
    }
  }, [user, setClasses])

  return user ? (
    <div>
      <h1 className="class-preview">Classes</h1>
      <div className="class-container">
        <h2>Name: {classes.name}</h2>
        <p>Subject: {classes.subject}</p>
        <p>Semester: {classes.semester}</p>
        <p>Credits: {classes.credits}</p>
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
