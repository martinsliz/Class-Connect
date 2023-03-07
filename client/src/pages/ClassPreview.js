import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Client from '../services/api'

const ClassPreview = ({ user }) => {
  let navigate = useNavigate()
  const { name } = useParams()
  //console.log(name)
  const [classes, setClasses] = useState([])

  useEffect(() => {
    //  if (user) {
    const handleClasses = async () => {
      const data = await Client.get(`/api/classes/subject/${name}`)
      //  console.log(data)
      setClasses(data.data)
    }
    handleClasses()
    //  }
  }, [])

  return user ? (
    <div>
      <h1 className="class-preview">Classes</h1>
      {classes?.map((lecture) => (
        <div className="class-container" key={lecture.id}>
          <h2>Name: {lecture.name}</h2>
          <p>Semester: {lecture.semester}</p>
          <p>Credits: {lecture.credits}</p>
        </div>
      ))}
    </div>
  ) : (
    <div className="protected">
      <h3>Oops! You must be signed in to do that!</h3>
      <button onClick={() => navigate('/signin')}>Sign In</button>
    </div>
  )
}

export default ClassPreview
