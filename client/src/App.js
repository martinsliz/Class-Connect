import { useState, useEffect } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Nav from './components/Nav'
import Register from './pages/Register'
import SignIn from './pages/SignIn'
import Home from './pages/Home'
import { CheckSession } from './services/User'
import Account from './pages/Account'
import AccountSetting from './pages/AccountSetting'
import ClassEnrollment from './pages/ClassEnrollment'
import Lobby from './pages/Lobby'
import ClassPreview from './pages/ClassPreview'

const App = () => {
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    setUser(null)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <Nav user={user} handleLogOut={handleLogOut} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signIn" element={<SignIn setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account/" element={<Account user={user} />} />
          <Route
            path="/account/setting"
            element={<AccountSetting user={user} />}
          />
          <Route
            path="/account/enrollment"
            element={<ClassEnrollment user={user} />}
          />
          <Route path="/lobby" element={<Lobby user={user} />} />
          <Route
            path="/classPreview/:name"
            element={<ClassPreview user={user} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
