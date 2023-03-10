import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Client from '../services/api'

const Account = ({ user, account }) => {
  let navigate = useNavigate()
  const [email, setEmail] = useState({ email: '' })
  const [password, setPassword] = useState({
    oldPassword: '',
    newPassword: ''
  })

  const handleEmail = async (e) => {
    if (user) {
      e.preventDefault()
      await Client.put(`/api/users/updateUserDetails/${user.id}`, email)
      setEmail({ ...email })
      window.location.reload(false)
    }
  }

  const handlePassword = async (e) => {
    if (user) {
      e.preventDefault()
      await Client.put(`/api/users/updatePassword/${user.id}`, password)
      setPassword({ ...password })
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
          <label className="labels" style={{ fontWeight: 'bolder' }}>
            Account Information
          </label>
        </li>
        <li>
          <img
            src="https://static.thenounproject.com/png/1110062-200.png"
            alt="update"
          ></img>
          <label className="labels" style={{ fontWeight: 'bolder' }}>
            Account Setting
          </label>
        </li>
        <li onClick={() => navigate('/account/enrollment')}>
          <img
            src="https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_1/v1665434595/janesvillek12wius/qquo71eei8xreklnwgpb/EnrollmentIcon.png"
            alt="enroll"
          ></img>
          <label className="labels" style={{ fontWeight: 'bolder' }}>
            Class Enrollment
          </label>
        </li>
      </ul>
      <div className="setting-panel" style={{ fontWeight: 'bolder' }}>
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
          <button type="submit" className="button">
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
