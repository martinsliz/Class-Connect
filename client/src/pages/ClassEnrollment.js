import { useNavigate } from 'react-router-dom'

const Account = ({ user, account }) => {
  let navigate = useNavigate()

  if (account.totalCredits === null) {
    account.totalCredits = 0
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
        <li onClick={() => navigate('/account/setting')}>
          <img
            src="https://static.thenounproject.com/png/1110062-200.png"
            alt="update"
          ></img>
          <label className="labels" style={{ fontWeight: 'bolder' }}>
            Account Setting
          </label>
        </li>
        <li>
          <img
            src="https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_1/v1665434595/janesvillek12wius/qquo71eei8xreklnwgpb/EnrollmentIcon.png"
            alt="enroll"
          ></img>
          <label className="labels" style={{ fontWeight: 'bolder' }}>
            Class Enrollment
          </label>
        </li>
      </ul>
      <div className="panel" style={{ fontWeight: 'bolder' }}>
        <h3>Total Credits: {account.totalCredits}</h3>
        <h3>Enrolled:</h3>
        {account.classes?.map((enroll) => (
          <div className="class-info" key={enroll.id}>
            <h4>Class: {enroll.name}</h4>
            <h4>Credits: {enroll.credits}</h4>
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
