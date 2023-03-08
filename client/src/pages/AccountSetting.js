import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Client from '../services/api'

const Account = ({ user }) => {
  let navigate = useNavigate()
  const [email, setEmail] = useState({ email: '' })
  const [account, setAccount] = useState({})
  const [password, setPassword] = useState({
    oldPassword: '',
    newPassword: ''
  })

  useEffect(() => {
    if (user) {
      const handleAccount = async () => {
        const data = await Client.get(`/api/users/info/${user.id}`)
        setAccount(data.data)
      }
      handleAccount()
    }
  }, [user, setAccount])

  const handleEmail = async (e) => {
    if (user) {
      e.preventDefault()
      await Client.put(`/api/users/updateEmail/${user.id}`, email)
      setEmail({ ...email })
      alert('Email has been updated!')
      window.location.reload(false)
    }
  }

  const handlePassword = async (e) => {
    if (user) {
      e.preventDefault()
      await Client.put(`/api/users/updatePassword/${user.id}`, password)
      setPassword({ ...password })
      alert('Password has been updated!')
      window.location.reload(false)
    }
  }

  const handleChange = (event) => {
    setEmail({ ...email, [event.target.id]: event.target.value })
  }

  const passwordChange = (event) => {
    setPassword({ ...password, [event.target.id]: event.target.value })
  }

  return user ? (
    <div className="account-container col">
      <ul style={{ listStyle: 'none' }} className="dashboard">
        <li onClick={() => navigate('/account')}>
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
        <li onClick={() => navigate('/account/enrollment')}>
          <img
            src="https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_1/v1665434595/janesvillek12wius/qquo71eei8xreklnwgpb/EnrollmentIcon.png"
            alt="enroll"
          ></img>
          Class Enrollment
        </li>
      </ul>
      <div className="panel">
        <form onSubmit={handleEmail}>
          <div>
            <h3>Update Email</h3>
            <label>Current Email: {account.email}</label>
          </div>
          <label htmlFor="email">New Email:</label>
          <input
            type="text"
            id="email"
            onChange={handleChange}
            value={email.email}
          />
          <button type="submit" className="buttom">
            Send Update
          </button>
        </form>
        <form onSubmit={handlePassword}>
          <div>
            <h3>Update Password</h3>
          </div>
          <label htmlFor="oldPassword">Old Password:</label>
          <input
            type="text"
            id="oldPassword"
            onChange={passwordChange}
            value={password.oldPassword}
          />
          <label htmlFor="newPassword">New Password:</label>
          <input
            type="text"
            id="newPassword"
            onChange={passwordChange}
            value={password.newPassword}
          />
          <button type="submit" className="buttom">
            Send Update
          </button>
        </form>
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
