import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Client from '../services/api'

const Account = ({ user }) => {
  let navigate = useNavigate()
  const [account, setAccount] = useState({})

  useEffect(() => {
    if (user) {
      const handleAccount = async () => {
        const data = await Client.get(`/api/users/info/${user.id}`)
        setAccount(data.data)
      }
      handleAccount()
    }
  }, [user, setAccount])

  if (account.totalCredits === null) {
    account.totalCredits = 0
  }

  const classes = [
    {
      name: 'Religion II',
      credits: 2
    },
    {
      name: 'Humanities I',
      credits: 2
    }
  ]

  return user ? (
    <div className="account-container col">
      <ul style={{ listStyle: 'none' }} className="dashboard">
        <li>
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/account-269-866236.png"
            alt="info"
          ></img>
          Account Information
        </li>
        <li>
          <img
            src="https://static.thenounproject.com/png/1110062-200.png"
            alt="update"
          ></img>
          Account Setting
        </li>
        <li>
          <img
            src="https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_1/v1665434595/janesvillek12wius/qquo71eei8xreklnwgpb/EnrollmentIcon.png"
            alt="enroll"
          ></img>
          Class Enrollment
        </li>
      </ul>
      <div className="panel">
        <h3>Total Credits: {account.totalCredits}</h3>
        <h3>Enrolled:</h3>
        {account.accountclasses?.map((enroll) => (
          <div>
            <label>Class Name: {enroll.name}</label>
            <label>Credits: {enroll.credits}</label>
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

export default Account
