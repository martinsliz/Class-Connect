import { useState, useEffect } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Nav from './components/Nav'

const App = () => {
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    setUser(null)
    localStorage.clear()
  }

  // const checkToken = async () => {
  //   const user = await CheckSession()
  //   setUser(user)
  // }

  // useEffect(() => {
  //   const token = localStorage.getItem('token')

  //   if (token) {
  //     checkToken()
  //   }
  // }, [])

  return (
    <div className="App">
      <Nav user={user} handleLogOut={handleLogOut} />
    </div>
  )
}

export default App
