import { useNavigate } from 'react-router-dom'

const Account = ({ user, account }) => {
  let navigate = useNavigate()

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
        <li onClick={() => navigate('/account/setting')}>
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
        <h3>Fisrt Name: {account.firstName}</h3>
        <h3>Last Name: {account.lastName}</h3>
        <h3>Email: {account.email}</h3>
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
