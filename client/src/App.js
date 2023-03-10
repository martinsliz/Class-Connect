import { useState, useEffect } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Nav from './components/Nav'
import Client from './services/api'
import { CheckSession } from './services/User'
import Register from './pages/Register'
import SignIn from './pages/SignIn'
import Home from './pages/Home'
import Account from './pages/Account'
import AccountSetting from './pages/AccountSetting'
import ClassEnrollment from './pages/ClassEnrollment'
import Lobby from './pages/Lobby'
import ClassPreview from './pages/ClassPreview'
import ClassDetails from './pages/ClassDetails'
import About from './pages/About'
import CommentForm from './components/CommentForm'
import UpdateComment from './components/UpdateComment'

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

  return (
    <div className="App">
      <Nav user={user} handleLogOut={handleLogOut} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signIn" element={<SignIn setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/account/"
            element={<Account user={user} account={account} />}
          />
          <Route
            path="/account/setting"
            element={<AccountSetting user={user} account={account} />}
          />
          <Route
            path="/account/enrollment"
            element={<ClassEnrollment user={user} account={account} />}
          />
          <Route path="/lobby" element={<Lobby user={user} />} />
          <Route
            path="/classPreview/:name"
            element={<ClassPreview user={user} />}
          />
          <Route
            path="/form/:userId/:classId"
            element={<CommentForm user={user} />}
          />
          <Route
            path="/updateForm/:classId/:id"
            element={<UpdateComment user={user} />}
          />
          <Route
            path="/classDetails/:id"
            element={<ClassDetails user={user} account={account} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
