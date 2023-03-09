import { Link } from 'react-router-dom'

const Nav = ({ user, handleLogOut }) => {
  let userOptions
  if (user) {
    userOptions = (
      <nav>
        <h3>Welcome {user.email}!</h3>
        <Link to="/lobby">Home</Link>
        <Link onClick={handleLogOut} to="/">
          Sign Out
        </Link>
        <Link to='/account'>Account</Link>
        <Link to='/about'>About</Link>
      </nav>
    )
  }

  const publicOptions = (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/signIn">Sign In</Link>
      <Link to='/about'>About</Link>
    </nav>
  )

  return (
    <header>
        <div className="logo-wrapper" alt="logo">
          <img
            className="logo"
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="welcome banner"
          />
        </div>
      {user ? userOptions : publicOptions}
    </header>
  )
}

export default Nav
