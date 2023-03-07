import { useState, useEffect } from 'react'
import axios from 'axios'

const ClassPreview = (response) => {
  const [classes, setClasses] = useState([])

  const getClasses = async () => {
    const response = await axios.get('http://localhost:3001/api/classes')
    setClasses(response.data.classes)
  }

  useEffect(() => {
    getClasses()
  }, [])

  return (
    <div>
      <h1 className="class-name">Classes</h1>
      <div className="class-container">
        {classes.map((classes) => (
          <div className="class-card" key={classes._id}>
            <h2>Name: {classes.name}</h2>
            <p>Subject: {classes.subject}</p>
            <p>Semester: {classes.semester}</p>
            <p>Credits: {classes.credits}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ClassPreview
